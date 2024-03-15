'use client';

import NextLink from 'next/link';
import { useCallback, useState } from 'react';

import { Box, IconButton, Typography } from '@mui/material';
import {
	DataGrid,
	GridColDef,
	GridRowsProp,
	GridRowSpacingParams,
	useGridApiRef,
} from '@mui/x-data-grid';
import {
	ArrowDownward,
	ArrowUpward,
	BookmarkAdd,
	Delete,
	Sort,
} from '@mui/icons-material';

import { Recipe } from '../lib/definitions';

interface Props {
	bookmarks: Recipe[];
	removeBookmark: any;
	setDrawerOpen: any;
}

export default function BookmarkList({
	bookmarks,
	removeBookmark,
	setDrawerOpen,
}: Props) {
	const apiRef = useGridApiRef();

	// Structure table columns
	const columns: GridColDef[] = [
		{
			field: 'title',
			flex: 1,

			// Render column header with sort functionality
			renderHeader: params => (
				<ColumnHeader
					bookmarks={bookmarks.length > 0}
					sort={() => {
						apiRef.current.sortColumn(params.colDef);
					}}
				/>
			),

			// Render rows
			renderCell: params => (
				<RowData
					id={params.row.id}
					removeBookmark={removeBookmark}
					setDrawerOpen={setDrawerOpen}
					title={params.row.title}
				/>
			),
		},
	];

	// Structure table rows
	const rows: GridRowsProp = [
		...(Object.values(bookmarks) ?? []).map(bookmark => {
			return {
				id: bookmark.id,
				title: bookmark.title,
			};
		}),
	];

	const rowSpacing = useCallback((params: GridRowSpacingParams) => {
		return {
			top: params.isFirstVisible ? 0 : 4,
			bottom: params.isLastVisible ? 0 : 4,
		};
	}, []);

	return (
		<DataGrid
			apiRef={apiRef}
			autoHeight
			columns={columns}
			disableColumnMenu={true}
			getRowSpacing={rowSpacing}
			hideFooter
			// Prevent default column header behavior
			onColumnHeaderClick={(_params, e) => {
				e.defaultMuiPrevented = true;
			}}
			rowHeight={80}
			rows={rows}
			slots={{
				// Display message when there are no bookmarks
				noRowsOverlay: NoBookmarksMessage,
			}}
			sx={{
				'&, [class^=MuiDataGrid]': {
					border: 'none',
					padding: 0,

					// Style rows as Paper elevation={1}
					'& .MuiDataGrid-cell': {
						border: '1px solid rgba(0, 0, 0, 0.12)',
						boxShadow: 1,
						marginY: 'auto',
					},

					// Recolor column header focus outline
					'& .MuiDataGrid-columnHeader:focus': {
						outline: '#fff',
					},

					// Move sort button to the right side
					'& .MuiDataGrid-columnHeaderTitleContainer': {
						justifyContent: 'end',
					},

					// Hide column dividers and sort icon
					'& .MuiDataGrid-columnSeparator, & .MuiDataGrid-iconButtonContainer':
						{
							display: 'none',
						},

					// Simulate box shadow for last row (bottom of row container)
					'& .MuiDataGrid-main': {
						borderBottom: `${
							bookmarks.length > 0 && '2px solid #b5b5b5'
						}`,
						marginBottom: '6rem',
					},
				},
			}}
		/>
	);
}

interface ColumnHeaderProps {
	bookmarks: boolean;
	sort: () => void;
}

const ColumnHeader = ({ bookmarks, sort }: ColumnHeaderProps) => {
	// Change icon to reflect sort method (null --> asc --> desc)
	const [iconState, setIconState] = useState(0);
	const sortIcons = [
		<Sort key={'SortByAlpha'} />,
		<ArrowUpward key={'ArrowUpward'} />,
		<ArrowDownward key={'ArrowDownward'} />,
	];

	const handleClick = () => {
		sort();
		setIconState((iconState + 1) % sortIcons.length);
	};

	return bookmarks ? (
		<Box
			onClick={handleClick}
			sx={{
				alignItems: 'center',
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<Typography sx={{ paddingRight: '0.25rem' }} variant={'subtitle1'}>
				Sort
			</Typography>

			{sortIcons[iconState]}
		</Box>
	) : // Hide header when there are no bookmarks
	null;
};

// Display message when there are no bookmarks
const NoBookmarksMessage = () => {
	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				height: '100%',
				width: '100%',
			}}
		>
			<Typography
				sx={{
					padding: '1rem',
					textAlign: 'center',
					textWrap: 'pretty',
				}}
				variant={'h6'}
			>
				Bookmark your favorite recipes for later. Click
				<BookmarkAdd
					color={'primary'}
					fontSize={'small'}
					sx={{ marginBottom: '0.25rem', marginX: '0.25rem' }}
				/>
				on any recipe to get started.
			</Typography>
		</Box>
	);
};

interface RowDataProps {
	id: string;
	removeBookmark: (p: string) => void;
	setDrawerOpen: (p: boolean) => void;
	title: string;
}

const RowData = ({
	id,
	removeBookmark,
	setDrawerOpen,
	title,
}: RowDataProps) => {
	return (
		<Box
			sx={{
				alignItems: 'center',
				display: 'flex',
				height: '100%',
				justifyContent: 'space-between',
				paddingLeft: '1rem',
				paddingY: '0.5rem',
				width: '100%',
			}}
		>
			{/* Render title column */}
			<Typography
				component={NextLink}
				href={`/recipe/${id}`}
				onClick={() => setDrawerOpen(false)}
				sx={{
					// Display as a block rather than '-webkit-box' and 'WebkitLineClamp: 2'. This avoids a display bug in Safari where text does not overflow to a second line
					display: 'block',
					height: '100%',
					lineHeight: '1.5rem',
					marginY: 'auto',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					textWrap: 'pretty',
					width: '100%',
				}}
				variant={'h6'}
			>
				{title}
			</Typography>

			{/* Render delete icon column */}
			<Box sx={{ height: '100%', paddingX: '0.5rem' }}>
				<IconButton
					onClick={() => removeBookmark(id)}
					sx={{
						color: 'rgb(238, 36, 36, 0.2)',
						height: '4rem',
						padding: 0,
						width: '3rem',
					}}
				>
					<Delete />
				</IconButton>
			</Box>
		</Box>
	);
};

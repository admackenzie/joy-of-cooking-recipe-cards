'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

import { Box, IconButton, Paper, Typography } from '@mui/material';

import { UnfoldMore } from '@mui/icons-material';

import {
	BookmarkList,
	ChapterList,
	Search,
	MobileNavDrawer,
} from '@/app/ui/index';

import { chapters, Recipe, undoSlugifyChapter } from '@/app/lib/definitions';

interface Props {
	bookmarks: Recipe[];
	data: Recipe[];
	removeBookmark: any;
}

export default function MobileNav({ bookmarks, data, removeBookmark }: Props) {
	const numRecipes = (data ?? []).length.toLocaleString('en-US');
	const params = useParams<{ id: string; slug: string }>();
	const searchParams = useSearchParams().get('search')?.toString() ?? '';

	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<Paper
			elevation={3}
			sx={{
				bottom: 0,
				display: { xs: 'block', md: 'none' },
				height: '2.5rem',
				position: 'fixed',
				width: '100%',
			}}
		>
			<Box sx={{}}>
				<IconButton
					component={'div'}
					onClick={() => setDrawerOpen(true)}
					sx={{
						borderRadius: 0,
						// color: 'secondary.main',
						display: 'flex',
						justifyContent: 'start',
						maxHeight: '2.5rem',
						paddingX: '1rem',
						paddingY: 'auto',
						width: '100%',
					}}
				>
					<UnfoldMore
						sx={{ color: 'secondary.main', marginRight: '1rem' }}
					/>

					{/* Display message with no URL parameters*/}
					{!params.id && !params.slug && !searchParams && (
						<Typography variant={'subtitle1'}>
							View bookmarks, chapters, and more
						</Typography>
					)}

					{/* Display single recipe message */}
					{params.id && (
						<Typography variant={'subtitle1'}>
							View bookmarks, chapters, and more
						</Typography>
					)}

					{/* Display chapter message */}
					{params.slug && (
						<Typography
							sx={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}
							variant={'subtitle1'}
						>
							Viewing {numRecipes} recipes in
							{` "${undoSlugifyChapter(params.slug)}"`}
						</Typography>
					)}

					{/* Display search results */}
					{searchParams && (
						<Typography
							sx={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}
							variant={'subtitle1'}
						>
							Viewing {numRecipes} recipes with
							{` "${searchParams}"`}
						</Typography>
					)}
				</IconButton>
			</Box>

			<MobileNavDrawer
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
			/>
		</Paper>
	);
}

'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Container,
	Button,
	Drawer,
	Fade,
	IconButton,
	Paper,
	Tab,
	Tabs,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {
	Bookmarks,
	BorderTop,
	KeyboardArrowUp,
	MenuBook,
	Search as SearchIcon,
	Settings,
	UnfoldMore,
} from '@mui/icons-material';

import { BookmarkList, ChapterList, Search } from '@/app/ui/index';

import { chapters, Recipe, undoSlugifyChapter } from '@/app/lib/definitions';

import { grey } from '@mui/material/colors';

interface Props {
	bookmarks: Recipe[];
	data: Recipe[];
	removeBookmark: any;
	// setSearchFocus: any;
}

export default function MobileNav({
	bookmarks,
	data,
	removeBookmark,
}: // setSearchFocus,
Props) {
	const numRecipes = (data ?? []).length.toLocaleString('en-US');
	const params = useParams<{ id: string; slug: string }>();
	const searchParams = useSearchParams().get('search')?.toString() ?? '';

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(0);

	const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	// const handleSearch = () => {
	// 	setOpen(false);
	// 	setSearchFocus(true);
	// };

	return (
		<>
			<Box sx={{}}>
				<IconButton
					component={'div'}
					onClick={() => setOpen(true)}
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

			<Drawer
				anchor={'bottom'}
				open={open}
				onClose={() => setOpen(false)}
				PaperProps={{
					square: false,
					sx: {
						marginX: { xs: '0.5rem', sm: '0.75rem' },
					},
				}}
			>
				{' '}
				<Container sx={{ paddingY: '1rem' }}>
					{/* Display drawer heading */}
					<Box sx={{ display: 'flex' }}>
						{/* <Typography variant={'subtitle1'}>
						Found 1500 recipes
					</Typography> */}
					</Box>

					{/* Display tab headings */}
					<Tabs
						onChange={handleChange}
						sx={{
							'& button': { textTransform: 'none' },
						}}
						value={value}
						variant={'fullWidth'}
					>
						<Tab icon={<Bookmarks />} label={'Bookmarks'} />
						<Tab icon={<MenuBook />} label={'Chapters'} />
						{/* <Tab
							icon={<SearchIcon />}
							onClick={handleSearch}
							label={'Search'}
						/> */}

						{/* <Tab disabled icon={<Settings />} label={'Settings'} /> */}
					</Tabs>

					{/* Display tab content */}

					<TabPanel index={0} value={value}>
						<BookmarkList
							bookmarks={bookmarks}
							removeBookmark={removeBookmark}
						/>
					</TabPanel>

					<TabPanel index={1} value={value}>
						<ChapterList />
					</TabPanel>

					{/* <TabPanel index={2} value={value} /> */}

					{/* <TabPanel index={3} value={value}>
						Settings
					</TabPanel> */}
				</Container>
			</Drawer>
		</>
	);
}

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel({ children, index, value }: TabPanelProps) {
	return (
		<Box hidden={value !== index} sx={{ height: '50svh' }}>
			{value === index && <Box>{children}</Box>}
		</Box>
	);
}

'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { ReactElement, useEffect, useState } from 'react';

import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
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
	KeyboardArrowUp,
	MenuBook,
	Search as SearchIcon,
	Settings,
	UnfoldMore,
} from '@mui/icons-material';

import { BookmarkList, ChapterList, DrawerWrapper } from '@/app/ui/index';

import { chapters, Recipe, undoSlugifyChapter } from '@/app/lib/definitions';

import { grey } from '@mui/material/colors';

interface Props {
	bookmarks: Recipe[];
	removeBookmark: any;
}

export default function MobileNav({ bookmarks, removeBookmark }: Props) {
	const params = useParams<{ id: string; slug: string }>();
	const searchParams = useSearchParams().get('search')?.toString() ?? '';

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(0);

	const handleChange = (_e: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{}}>
				<IconButton
					onClick={() => setOpen(true)}
					sx={{
						display: 'flex',
						justifyContent: 'start',
						maxHeight: '2.5rem',
						paddingX: '1rem',
						paddingY: 'auto',
						width: '100%',
					}}
				>
					<UnfoldMore sx={{ marginRight: '1rem' }} />

					{/* TODO: message for home screen (no params) */}

					{/* Display single recipe message */}
					{params.id && (
						<Typography variant={'subtitle1'}>
							More options
						</Typography>
					)}

					{/* Display chapter message */}
					{params.slug && (
						<Typography
							sx={{
								alignItems: 'center',
								display: 'flex',
								maxHeight: '100%',
							}}
							variant={'subtitle1'}
						>
							<Box sx={{ flexShrink: 0 }}>
								Viewing 5858 recipes in &ldquo;
							</Box>
							{/* <Box
								sx={{
									maxHeight: '2.5rem',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									// whiteSpace: 'nowrap',
								}}
							>
								
							</Box> */}
							&ldquo;
						</Typography>
					)}

					{/* Display search results */}
					{searchParams && (
						<Typography
							sx={{
								alignItems: 'center',
								display: 'flex',
							}}
							variant={'subtitle1'}
						>
							<Box sx={{ flexShrink: 0 }}>
								{/* FIXME: add recipe number */}
								Viewing x recipes with the term &ldquo;
							</Box>
							<Box
								sx={{
									overflow: 'clip',
									textOverflow: 'ellipsis',
								}}
							>
								{searchParams}
							</Box>
							&ldquo;
						</Typography>
					)}
				</IconButton>

				{/* <Button onClick={() => setOpen(true)} sx={{ width: '100%' }}>
					^
				</Button> */}
			</Box>

			<Drawer
				anchor={'bottom'}
				open={open}
				onClose={() => setOpen(false)}
			>
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
					{/* <Tab icon={<SearchIcon />} label={'Search'} /> */}
					<Tab disabled icon={<Settings />} label={'Settings'} />
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

				{/* <TabPanel index={2} value={value}>
					// TODO: search
				</TabPanel> */}

				<TabPanel index={3} value={value}>
					{/* Settings page */}
				</TabPanel>
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
// return (
// 	<>
// 		<Fade in={visible}>
// 			{/* BUG: this paper is not showing elevation shadows */}
// 			<Paper
// 				elevation={6}
// 				// sx={{ display: `${!visible && 'none'}` }}
// 			>
// 				<BottomNavigation
// 					onChange={(_e, newValue) => {
// 						setValue(newValue);
// 					}}
// 					showLabels
// 					sx={{
// 						bottom: 0,
// 						height: '4.5rem',
// 						paddingBottom: '0.5rem',
// 						position: 'fixed',
// 						width: '100%',
// 					}}
// 					value={value}
// 				>
// 					<BottomNavigationAction
// 						onClick={() => setChaptersOpen(true)}
// 						label="Chapters"
// 						icon={<MenuBook />}
// 					/>

// 					<BottomNavigationAction
// 						onClick={() => setBookmarksOpen(true)}
// 						label="Bookmarks"
// 						icon={<Bookmarks />}
// 					/>

// 					<BottomNavigationAction
// 						label="Search"
// 						icon={<SearchIcon />}
// 					/>

// 					<BottomNavigationAction
// 						label="Settings"
// 						icon={<Settings />}
// 					/>
// 				</BottomNavigation>
// 			</Paper>
// 		</Fade>

// 		{/* Display chapters drawer */}
// 		<DrawerWrapper
// 			anchor={'bottom'}
// 			close={setChaptersOpen}
// 			open={chaptersOpen}
// 		>
// 			<Grid container spacing={2}>
// 				{chapters.map((chapter, i) => {
// 					return (
// 						<Grid
// 							key={i}
// 							xs={6}
// 							sm={4}
// 							sx={{
// 								// border: '1px solid',
// 								textAlign: 'center',
// 							}}
// 						>
// 							<Typography variant={'h5'}>
// 								{chapter.abbrev}
// 							</Typography>
// 						</Grid>
// 					);
// 				})}
// 			</Grid>
// 		</DrawerWrapper>

// 		{/* Display bookmarks drawer */}
// 		<DrawerWrapper
// 			anchor={'bottom'}
// 			close={setBookmarksOpen}
// 			open={bookmarksOpen}
// 		>
// 			<BookmarkList
// 				bookmarks={bookmarks}
// 				removeBookmark={removeBookmark}
// 			/>
// 		</DrawerWrapper>
// 	</>
// );

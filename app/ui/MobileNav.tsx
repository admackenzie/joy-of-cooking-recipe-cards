'use client';

import { ReactElement, useState } from 'react';

import {
	Box,
	BottomNavigation,
	BottomNavigationAction,
	Paper,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {
	Bookmarks,
	MenuBook,
	Search as SearchIcon,
	Settings,
} from '@mui/icons-material';

import { BookmarkList, ChapterList, DrawerWrapper } from '@/app/ui/index';

import { chapters, Recipe } from '../lib/definitions';

interface Props {
	bookmarks: Recipe[];
	removeBookmark: any;
}

export default function MobileNav({ bookmarks, removeBookmark }: Props) {
	// Highlight icons on bottom nav
	const [value, setValue] = useState(2);

	const [bookmarksOpen, setBookmarksOpen] = useState(false);
	const [chaptersOpen, setChaptersOpen] = useState(false);

	return (
		<>
			<Paper elevation={6}>
				<BottomNavigation
					onChange={(_e, newValue) => {
						setValue(newValue);
					}}
					showLabels
					sx={{
						bottom: 0,
						position: 'fixed',
						width: '100%',
					}}
					value={value}
				>
					<BottomNavigationAction
						onClick={() => setChaptersOpen(true)}
						label="Chapters"
						icon={<MenuBook />}
					/>

					<BottomNavigationAction
						onClick={() => setBookmarksOpen(true)}
						label="Bookmarks"
						icon={<Bookmarks />}
					/>

					<BottomNavigationAction
						label="Search"
						icon={<SearchIcon />}
					/>

					<BottomNavigationAction
						label="Settings"
						icon={<Settings />}
					/>
				</BottomNavigation>
			</Paper>

			{/* Display chapters drawer */}
			<DrawerWrapper
				anchor={'bottom'}
				close={setChaptersOpen}
				open={chaptersOpen}
			>
				<Grid container spacing={2}>
					{chapters.map((chapter, i) => {
						return (
							<Grid
								key={i}
								xs={6}
								sm={4}
								sx={{
									// border: '1px solid',
									textAlign: 'center',
								}}
							>
								<Typography variant={'h5'}>
									{chapter.abbrev}
								</Typography>
							</Grid>
						);
					})}
				</Grid>
			</DrawerWrapper>

			{/* Display bookmarks drawer */}
			<DrawerWrapper
				anchor={'bottom'}
				close={setBookmarksOpen}
				open={bookmarksOpen}
			>
				<BookmarkList
					bookmarks={bookmarks}
					removeBookmark={removeBookmark}
				/>
			</DrawerWrapper>
		</>
	);
}

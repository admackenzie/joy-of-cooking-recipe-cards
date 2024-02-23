'use client';

import { useEffect, useState } from 'react';

import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Container,
} from '@mui/material';

import {
	Bookmarks,
	MenuBook,
	Search as SearchIcon,
	Settings,
} from '@mui/icons-material';

import {
	AppBarWithSearch,
	BookmarkList,
	CardDeck,
	ChapterList,
} from '@/app/ui/index';

import { Recipe } from '../lib/definitions';

// Pixel width of the sidebars
const leftWidth = 225;
const rightWidth = 300;

// Sidebar breakpoints
const leftBP = 'md'; // 900px
const rightBP = 'lg'; // 1200px

// XL breakpoint
const maxWidth = 1536;

interface Props {
	data: Recipe[];
	// leftCol: React.ReactElement;
	// main: React.ReactElement;
	// rightCol: React.ReactElement;
}

export default function Layout({ data }: Props) {
	const [bookmarks, setBookmarks] = useState<Recipe[]>([]);

	// Initialize bookmarks from localStorage
	useEffect(() => {
		const storage = Object.keys(localStorage)
			.filter(key => key.startsWith('joc-'))
			.map(key => JSON.parse(localStorage.getItem(key) ?? ''));

		setBookmarks(storage);
	}, []);

	const addBookmark = (data: Recipe) => {
		setBookmarks([...bookmarks, data]);

		localStorage.setItem(`joc-${data.id}`, JSON.stringify(data));
	};

	const removeBookmark = (id: string) => {
		setBookmarks(bookmarks.filter(recipe => recipe.id !== id));

		localStorage.removeItem(`joc-${id}`);
	};

	// main.props = {
	// 	...main.props,
	// 	addBookmark: addBookmark,
	// 	removeBookmark: removeBookmark,
	// };
	// rightCol.props = { ...rightCol.props, bookmarks: bookmarks };

	// Highlight icons on bottom nav
	const [value, setValue] = useState(0);

	return (
		<Box className={'flex-col mx-auto'} maxWidth={'xl'}>
			<AppBarWithSearch />

			{/* TODO: these three containers are very similar, put them into a map function and split into new component */}
			<Box className={'flex'}>
				{/* Left sidebar */}
				<Container
					className={'max-h-screen overflow-y-auto'}
					sx={{
						display: { xs: 'none', [`${leftBP}`]: 'block' },
						width: { [`${leftBP}`]: leftWidth },
						flexShrink: { [`${leftBP}`]: 0 },
					}}
				>
					<ChapterList />
				</Container>

				{/* Body */}
				<Container className={'max-h-screen overflow-y-auto'}>
					<CardDeck
						addBookmark={addBookmark}
						data={data}
						removeBookmark={removeBookmark}
					/>
				</Container>

				{/* Right sidebar */}
				<Container
					className={'max-h-screen overflow-y-auto'}
					sx={{
						display: { xs: 'none', [`${rightBP}`]: 'block' },
						width: { [`${rightBP}`]: rightWidth },
						flexShrink: { [`${rightBP}`]: 0 },
					}}
				>
					<BookmarkList bookmarks={bookmarks} />
				</Container>

				{/* Bottom navigation */}
				<Container
					sx={{
						display: { sm: 'none' },
						position: 'fixed',
						top: 'auto',
						bottom: 0,
						width: '100%',
						maxWidth: {
							[`${leftBP}`]: `calc(100% - ${leftWidth}px)`,
							[`${rightBP}`]: `calc(100% - ${
								leftWidth + rightWidth
							}px)`,
							xl: `calc(${maxWidth}px - ${
								leftWidth + rightWidth
							}px)`,
						},
						ml: { [`${leftBP}`]: `${leftWidth}px` },
					}}
				>
					<BottomNavigation
						showLabels
						value={value}
						onChange={(_e, newValue) => {
							setValue(newValue);
						}}
					>
						<BottomNavigationAction
							label="Chapters"
							icon={<MenuBook />}
							sx={{ display: { [`${leftBP}`]: 'none' } }}
						/>

						<BottomNavigationAction
							label="Bookmarks"
							icon={<Bookmarks />}
							sx={{ display: { [`${rightBP}`]: 'none' } }}
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
				</Container>
			</Box>
		</Box>
	);
}

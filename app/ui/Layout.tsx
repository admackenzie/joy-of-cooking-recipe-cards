'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
	Box,
	Container,
	Drawer,
	Button,
	BottomNavigationAction,
	BottomNavigation,
	Paper,
	Typography,
	Toolbar,
} from '@mui/material';
import { MenuBook } from '@mui/icons-material';
import {
	AppBarWithSearch,
	BookmarkList,
	CardDeck,
	ChapterList,
	MobileNav,
	Sidebar,
} from '@/app/ui/index';

import { Recipe } from '../lib/definitions';

import Landing from './Landing';

interface Props {
	data: Recipe[];
}

export default function Layout({ data }: Props) {
	const preview = !useParams<{ id: string }>().id ?? true;

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

	const [open, setOpen] = useState(false);

	return (
		<Box
			maxWidth={'xl'}
			sx={{
				height: '100vh',
				marginX: 'auto',
				overflowX: 'hidden',
				// Disable vertical scrolling in desktop viewports
				overflowY: { lg: 'hidden' },
			}}
		>
			{/* Header */}
			<AppBarWithSearch />

			{/* Body */}
			{/* BUG: Putting display: flex on this Box component causes the screen to be swipeable left and right on mobile. Find another way to align the sidebars */}
			<Box sx={{ display: 'flex' }}>
				{/* Left */}
				<Sidebar bp={'md'} width={225}>
					<ChapterList />
				</Sidebar>

				{/* Center */}
				<Box
					// Allow independent column scrolling in desktop viewports
					sx={{
						height: ' 100vh',
						overflowY: { lg: 'auto' },
						width: '100%',
					}}
				>
					{/* Card container */}
					<Container
						sx={{ pb: '2rem', pt: { xs: '1rem', sm: '1.5rem' } }}
					>
						{/* <Landing /> */}

						<CardDeck
							addBookmark={addBookmark}
							bookmarks={bookmarks}
							data={data}
							preview={preview}
							removeBookmark={removeBookmark}
						/>
					</Container>

					{/* Bottom navigation */}
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
						<MobileNav
							bookmarks={bookmarks}
							data={data}
							removeBookmark={removeBookmark}
						/>
					</Paper>
				</Box>

				{/* Right */}
				<Sidebar bp={'lg'} width={300}>
					<BookmarkList
						bookmarks={bookmarks}
						removeBookmark={removeBookmark}
					/>
				</Sidebar>
			</Box>
		</Box>
	);
}

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Box, Container } from '@mui/material';

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

	return (
		<Box
			maxWidth={'xl'}
			sx={{
				height: '100dvh',
				mx: 'auto',
				// Disable vertical scrolling in desktop viewports
				overflowY: { lg: 'hidden' },
			}}
		>
			{/* Header */}
			<AppBarWithSearch />

			{/* Body */}
			<Box sx={{ display: 'flex', height: '100dvh' }}>
				{/* FIXME: TSidebars need a refactor. On mobile browsers, it makes the screen swipeable  from left to right. OverflowX cannot be used here because it prevents the browser from automatically hiding it's top and bottom navigation bars on scroll */}
				{/* Left sidebar */}
				{/* <Box
					sx={{
						display: { xs: 'none', md: 'block' },
						flexShrink: 0,
						overflowY: 'auto',
						width: '14rem',
					}}
				>
					<ChapterList />
				</Box> */}

				{/* Center */}
				<Box
					// Allow independent column scrolling in desktop viewports
					sx={{ overflowY: { lg: 'auto' } }}
				>
					{/* Card container */}
					<Container
						sx={{ pb: '8rem', pt: { xs: '1rem', sm: '1.5rem' } }}
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
					<Container
						disableGutters
						sx={{
							bottom: 0,
							display: { md: 'none' },
							position: 'fixed',
							top: 'auto',
							width: '100%',
						}}
					>
						<MobileNav
							bookmarks={bookmarks}
							removeBookmark={removeBookmark}
						/>
					</Container>
				</Box>

				{/* Right sidebar*/}
				{/* <Box
					sx={{
						display: { xs: 'none', lg: 'block' },
						flexShrink: 0,
						overflowY: 'auto',
						width: '18rem',
					}}
				>
					<BookmarkList
						bookmarks={bookmarks}
						removeBookmark={removeBookmark}
					/>
				</Box> */}
			</Box>
		</Box>
	);
}

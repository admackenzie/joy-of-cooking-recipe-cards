'use client';

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

interface Props {
	data: Recipe[];
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

	return (
		<Box
			// Disable vertical scrolling for the page
			className={'h-screen mx-auto overflow-hidden w-full'}
			maxWidth={'xl'}
		>
			{/* Header */}
			<AppBarWithSearch />

			{/* TODO: these three containers are very similar, put them into a map function and split into new component */}
			{/* Body */}
			<Box className={'flex h-screen'}>
				{/* Left */}
				<Sidebar bp={'md'} width={225}>
					<ChapterList />
				</Sidebar>

				{/* Center */}
				<Container className={'h-full overflow-y-auto'} disableGutters>
					{/* Card container */}
					<Container sx={{ pt: { xs: '1rem', sm: '1.5rem' } }}>
						<CardDeck
							addBookmark={addBookmark}
							data={data}
							removeBookmark={removeBookmark}
						/>
					</Container>

					{/* Bottom navigation */}
					<Box
						className={'bottom-0 fixed top-auto w-full'}
						sx={{ display: { md: 'none' } }}
					>
						<MobileNav />
					</Box>
				</Container>

				{/* Right */}
				<Sidebar bp={'lg'} width={300}>
					<BookmarkList bookmarks={bookmarks} />
				</Sidebar>
			</Box>
		</Box>
	);
}

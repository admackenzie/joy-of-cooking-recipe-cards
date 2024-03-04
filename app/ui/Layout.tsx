'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Box, Container, SwipeableDrawer } from '@mui/material';

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
	const iOS =
		typeof navigator !== 'undefined' &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<Box
			maxWidth={'xl'}
			sx={{
				height: '100svh',
				// Disable vertical scrolling in desktop viewports
				overflowY: { lg: 'hidden' },
			}}
		>
			{/* Header */}
			<AppBarWithSearch />

			{/* Body */}
			{/* BUG: Putting display: flex on this Box component causes the screen to be swipeable left and right on mobile. Find another way to align the sidebars */}
			<Box sx={{}}>
				{/* Left */}
				<Sidebar bp={'md'} width={225}>
					<ChapterList />
				</Sidebar>

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
					{/* <Container
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
					</Container> */}
					<Box
						sx={{
							position: 'fixed',
							bottom: 0,
							top: 'auto',
							width: '100%',
							height: '100px',
							backgroundColor: 'blue',
						}}
					>
						<SwipeableDrawer
							disableBackdropTransition={!iOS}
							disableDiscovery={iOS}
							anchor={'bottom'}
							open={open}
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							sx={{}}
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Eos dicta debitis molestias nemo fuga maiores
							itaque ullam iste consequatur neque quasi ut illum
							unde ratione sunt et odio explicabo, autem cumque?
							Rem vitae fugit atque quia cum aliquam ratione odio!
							Ex, ratione quaerat neque porro ad, dignissimos
							exercitationem maiores cumque pariatur obcaecati
							voluptatibus totam quae eligendi ipsa cum
							consequatur consectetur odio nihil optio deserunt
							accusamus labore eos ducimus. Tempora distinctio
							error assumenda ea itaque odio ipsum officia natus!
							Numquam autem iusto, unde, recusandae eos
							exercitationem laborum accusamus illo voluptatem sit
							earum consequuntur commodi labore. Ipsam eum eius
							quaerat maxime quo.
						</SwipeableDrawer>
					</Box>
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

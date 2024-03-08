'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
	Box,
	Container,
	Drawer,
	Button,
	ButtonBase,
	BottomNavigationAction,
	BottomNavigation,
	Fab,
	Paper,
	Slide,
	Typography,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
	useTheme,
} from '@mui/material';
import { MenuBook, Search as SearchIcon } from '@mui/icons-material';

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

import SearchFAB from './SearchFAB';

interface Props {
	data: Recipe[];
}

export default function Layout({ data }: Props) {
	const preview = !useParams<{ id: string }>().id ?? true;

	const [bookmarks, setBookmarks] = useState<Recipe[]>([]);

	const [searchFocus, setSearchFocus] = useState(false);

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

	// Assign viewport breakpoints for style behavior
	const { breakpoints } = useTheme();
	const mobileVP = useMediaQuery(breakpoints.down('md'));
	const desktopVP = useMediaQuery(breakpoints.up('md'));

	const trigger = useScrollTrigger();

	const handleOpenKeyboard = () => {
		const search = document.getElementById('search');

		setSearchFocus(!searchFocus);

		searchFocus ? search?.focus() : search?.blur();
	};

	return (
		<Box
			maxWidth={'xl'}
			sx={{
				height: '100vh',
				marginX: 'auto',
				// BUG: overflow X makes scroll triggers not work
				// overflowX: 'hidden',
				// Disable vertical scrolling in desktop viewports
				overflowY: { lg: 'hidden' },
				position: 'relative',
			}}
		>
			{/* Display header */}
			<AppBarWithSearch
				searchFocus={searchFocus}
				setSearchFocus={setSearchFocus}
			/>

			{/* 'Bounce' body component below the app bar */}
			<Toolbar sx={{ height: '5rem' }} />

			{/* Display body */}
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
						sx={{
							paddingTop: { xs: '1rem', sm: '1.5rem' },
						}}
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

					{/* Hide bottom navigation when mobile browser UI is open */}
					{mobileVP && (
						<Slide
							appear={false}
							direction={'up'}
							in={!trigger}
							style={{ transitionDelay: '500ms' }}
						>
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
						</Slide>
					)}
				</Box>

				{/* Right */}
				<Sidebar bp={'lg'} width={300}>
					<BookmarkList
						bookmarks={bookmarks}
						removeBookmark={removeBookmark}
					/>
				</Sidebar>
			</Box>

			{/* Display FAB only on mobile viewports */}
			{/* BUG: this button sometimes requires double taps to work in the browser. Try disabling all hover effects */}
			{mobileVP && (
				<Box
					sx={{
						backgroundColor: 'primary.main',
						borderRadius: '50%',
						bottom: '6rem',
						color: 'white',

						position: 'fixed',
						right: '2rem',
					}}
				>
					<SearchFAB onOpenKeyboard={handleOpenKeyboard} />
				</Box>

				// <Box
				// 	autoFocus
				// 	component={'button'}
				// 	onTouchStart={() => setSearchFocus(!searchFocus)}
				// 	sx={{
				// 		backgroundColor: 'primary.main',
				// 		borderRadius: '50%',
				// 		bottom: '6rem',
				// 		color: 'white',
				// 		height: '3rem',
				// 		position: 'fixed',
				// 		right: '2rem',
				// 		width: '3rem',
				// 	}}
				// >
				// 	<SearchIcon />
				// </Box>
				// <Fab
				// 	// disableTouchRipple
				// 	component={'div'}
				// 	onClick={() => setSearchFocus(!searchFocus)}
				// 	size={'medium'}
				// 	sx={{
				// 		backgroundColor: 'primary.main',
				// 		color: 'white',

				// 		position: 'fixed',
				// 		bottom: '6rem',
				// 		right: '2rem',

				// 		'&:hover': {
				// 			backgroundColor: 'primary.main',
				// 		},
				// 	}}
				// >
				// 	<SearchIcon />
				// </Fab>
			)}
		</Box>
	);
}

'use client';

import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
	Box,
	Container,
	Fab,
	Fade,
	Slide,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
	useTheme,
} from '@mui/material';
import { KeyboardArrowUp, Search as SearchIcon } from '@mui/icons-material';

import {
	AppBarWithSearch,
	BookmarkList,
	CardDeck,
	ChapterList,
	MobileNav,
	Sidebar,
} from '@/app/ui/index';

import { Recipe } from '../lib/definitions';

import { debounce } from '../lib/utils';

interface Props {
	data: Recipe[];
}

export default function Layout({ data }: Props) {
	const params = useParams<{ id: string; slug: string }>();
	const preview = !params.id ?? true;
	const searchParams = useSearchParams().get('search');

	const [bookmarks, setBookmarks] = useState<Recipe[]>([]);

	const [searchFocus, setSearchFocus] = useState(false);

	// Initialize page
	useEffect(() => {
		// Retrieve bookmarks from localStorage
		const storage = Object.keys(localStorage)
			.filter(key => key.startsWith('joc-'))
			.map(key => JSON.parse(localStorage.getItem(key) ?? ''));

		setBookmarks(storage);
	}, [setBookmarks]);

	const addBookmark = (data: Recipe) => {
		setBookmarks([...bookmarks, data]);

		localStorage.setItem(`joc-${data.id}`, JSON.stringify(data));
	};

	const removeBookmark = (id: string) => {
		setBookmarks(bookmarks.filter(recipe => recipe.id !== id));

		localStorage.removeItem(`joc-${id}`);
	};

	const handleOpenKeyboard = () => {
		const search = document.getElementById('search');

		setSearchFocus(true);

		searchFocus ? search?.focus() : search?.blur();
	};

	// Assign viewport breakpoints for style behavior
	const { breakpoints } = useTheme();
	const mobileVP = useMediaQuery(breakpoints.down('md'));
	const desktopVP = useMediaQuery(breakpoints.up('md'));

	const trigger = useScrollTrigger();

	// Hide component when scrolling upward
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [scrollable, setScrollable] = useState(false);

	const handleScroll = debounce(() => {
		const currentScrollPos = window.scrollY;

		// Trigger show/hide behavior at this distance in pixels from the top or bottom
		const threshold = 100;

		const maxY =
			document.body.scrollHeight - threshold <=
			currentScrollPos + window.innerHeight;

		const minY = currentScrollPos <= threshold;

		// Show nav when the user scrolls up and at the top of the content
		setVisible(currentScrollPos <= prevScrollPos || minY);
		setPrevScrollPos(currentScrollPos);

		// Hide nav at the bottom of the content to prevent 'bouncing' when scrolling down in mobile browsers
		maxY && setVisible(false);

		// Show scroll FAB only when the page has a vertical scroll bar and the page is at the bottom of the content
		setScrollable(maxY && document.body.scrollHeight > window.innerHeight);
	}, 50);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<Box
			maxWidth={'xl'}
			sx={{
				// height: '100vh',
				marginX: 'auto',
				// BUG: overflow X makes scroll triggers not work
				// overflowX: 'hidden',
				// Disable vertical scrolling in desktop viewports
				overflowY: { lg: 'hidden' },
				position: 'relative',
			}}
		>
			{/* Display header */}

			{(params.id || params.slug || searchParams) && (
				<AppBarWithSearch
					searchFocus={searchFocus}
					setSearchFocus={setSearchFocus}
				/>
			)}

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
						height: { xs: '100%', lg: '100vh' },
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
						<CardDeck
							addBookmark={addBookmark}
							bookmarks={bookmarks}
							data={data}
							preview={preview}
							removeBookmark={removeBookmark}
							setSearchFocus={setSearchFocus}
						/>
					</Container>

					{/* Hide bottom navigation when mobile browser UI is open */}
					{mobileVP && (
						<Slide
							appear={false}
							direction={'up'}
							// Display component when scrolling up or on a /id/* route
							in={visible}
							// style={{
							// 	transitionDelay: `${visible ? '500ms' : 0}`,
							// }}
						>
							{/* Add span component for Slide ForwardRef */}
							<span>
								<MobileNav
									bookmarks={bookmarks}
									data={data}
									removeBookmark={removeBookmark}
								/>
							</span>
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
			{mobileVP &&
				(params.id ? (
					<Fade
						// Hide FAB when content is too short to scroll
						in={scrollable}
					>
						<Fab
							component={'div'}
							onClick={() => scrollTo(0, 0)}
							size={'small'}
							sx={{
								backgroundColor: '#fff',
								bottom: '6rem',
								color: 'secondary.main',

								position: 'fixed',
								right: '2rem',
								'&:hover': { backgroundColor: '#fff' },
							}}
						>
							<KeyboardArrowUp />
						</Fab>
					</Fade>
				) : (
					searchParams && (
						<Fab
							component={'div'}
							disabled={searchFocus}
							onClick={handleOpenKeyboard}
							size={'medium'}
							sx={{
								backgroundColor: 'primary.main',
								bottom: '6rem',
								color: '#fff',
								position: 'fixed',
								right: '2rem',
								'&:hover': { backgroundColor: 'primary.main' },
								'&.Mui-disabled': {
									// backdropFilter: 'blur(5px)',
									// backgroundColor: 'rgb(238, 36, 36, 0.2)',
									// border: '1px solid rgb(238, 36, 36)',
									backgroundColor: 'primary.main',
									color: '#fff',
								},
							}}
						>
							<SearchIcon />
						</Fab>
					)
				))}
		</Box>
	);
}

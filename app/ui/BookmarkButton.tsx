'use client';

import { useContext, useEffect, useState } from 'react';

import { Fade, IconButton, useMediaQuery } from '@mui/material';
import { Bookmark, BookmarkAdd, BookmarkRemove } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	addBookmark: any;
	bookmarks: Recipe[];
	recipe: Recipe;
	removeBookmark: any;
}

export default function BookmarkButton({
	addBookmark,
	bookmarks,
	recipe,
	removeBookmark,
}: Props) {
	const [bookmarked, setBookmarked] = useState(false);
	const [hover, setHover] = useState(false);

	const { id } = recipe;

	const animationTimeout = 1000;

	// Assign viewport breakpoints for style behavior
	const { breakpoints } = useTheme();
	const mobileVP = useMediaQuery(breakpoints.down('md'));
	const desktopVP = useMediaQuery(breakpoints.up('md'));

	// Toggle on bookmark icon if recipe.id exists in localStorage
	useEffect(() => {
		localStorage.getItem(`joc-${id}`) && setBookmarked(true);
		!localStorage.getItem(`joc-${id}`) && setBookmarked(false);
	}, [bookmarks, id]);

	const handleAddBookmark = () => {
		setBookmarked(true);
		addBookmark(recipe);
	};

	const handleRemoveBookmark = () => {
		setBookmarked(false);
		removeBookmark(id);
	};

	// FIXME: add delay for hover states
	return (
		// Animate toggle between bookmarked and un-bookmarked states
		<>
			{bookmarked ? (
				<IconButton
					color={'primary'}
					onClick={handleRemoveBookmark}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					sx={{
						// Disable hover effects for mobile viewports
						[breakpoints.up('md')]: {
							'&:hover': {
								color: 'primary.main',
							},
						},
					}}
				>
					{mobileVP && (
						<Fade in={bookmarked} timeout={animationTimeout}>
							<Bookmark />
						</Fade>
					)}

					{/* Show remove bookmark icon on hover */}
					{desktopVP && (
						<Fade in={bookmarked} timeout={animationTimeout}>
							{hover ? <BookmarkRemove /> : <Bookmark />}
						</Fade>
					)}
				</IconButton>
			) : null}

			{!bookmarked ? (
				<IconButton
					color={'primary'}
					onClick={handleAddBookmark}
					sx={{
						color: 'rgb(238, 36, 36, 0.2)',
						// Disable hover effects for mobile viewports
						[breakpoints.up('md')]: {
							'&:hover': {
								backgroundColor: 'rgb(238, 36, 36, 0.05)',
								color: 'primary.main',
							},
						},
					}}
				>
					<Fade in={!bookmarked} timeout={animationTimeout}>
						<BookmarkAdd />
					</Fade>
				</IconButton>
			) : null}
		</>
	);
}

'use client';

import { useEffect, useState } from 'react';

import { Fade, IconButton } from '@mui/material';
import { Bookmark, BookmarkAdd, BookmarkRemove } from '@mui/icons-material';

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

	const animationTimeout = 1000;

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
						'&:hover': {
							color: 'primary.main',
						},
					}}
				>
					<Fade in={bookmarked} timeout={animationTimeout}>
						{hover ? <BookmarkRemove /> : <Bookmark />}
					</Fade>
				</IconButton>
			) : null}

			{!bookmarked ? (
				<IconButton
					color={'primary'}
					onClick={handleAddBookmark}
					sx={{
						color: 'rgb(238, 36, 36, 0.2)',
						'&:hover': {
							backgroundColor: 'rgb(238, 36, 36, 0.05)',
							color: 'primary.main',
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

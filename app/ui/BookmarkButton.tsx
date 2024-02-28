'use client';

import { useEffect, useState } from 'react';

import { Fade, IconButton } from '@mui/material';
import { Bookmark, BookmarkAdd } from '@mui/icons-material';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	addBookmark: any;
	recipe: Recipe;
	removeBookmark: any;
}

export default function BookmarkButton({
	addBookmark,
	recipe,
	removeBookmark,
}: Props) {
	const [bookmarked, setBookmarked] = useState(false);
	const { id } = recipe;

	// Toggle on bookmark icon if recipe.id exists in localStorage
	useEffect(() => {
		localStorage.getItem(`joc-${id}`) && setBookmarked(true);
	}, [id]);

	const handleAddBookmark = () => {
		setBookmarked(true);
		addBookmark(recipe);
	};

	const handleRemoveBookmark = () => {
		setBookmarked(false);
		removeBookmark(id);
	};

	const animationTimeout = 1000;

	return (
		// Animate toggle between bookmarked and un-bookmarked states
		<>
			{bookmarked ? (
				<IconButton color={'primary'} onClick={handleRemoveBookmark}>
					<Fade in={bookmarked} timeout={animationTimeout}>
						<Bookmark />
					</Fade>
				</IconButton>
			) : null}

			{!bookmarked ? (
				<IconButton
					color={'primary'}
					onClick={handleAddBookmark}
					sx={{ opacity: 0.2 }}
				>
					<Fade in={!bookmarked} timeout={animationTimeout}>
						<BookmarkAdd />
					</Fade>
				</IconButton>
			) : null}
		</>
	);
}

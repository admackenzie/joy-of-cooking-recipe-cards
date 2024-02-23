'use client';

import { useEffect, useState } from 'react';

import { Box, Fade, IconButton, Tooltip } from '@mui/material';
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

	// const [tooltipOpen, setTooltipOpen] = useState(false);

	/* 	const handleBookmark = () => {
		// setTooltipOpen(true);

		setBookmarked(!bookmarked);

		// setTimeout(() => {
		// 	setTooltipOpen(false);
		// }, 1000);
	}; */

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
					className={'opacity-20'}
					color={'primary'}
					onClick={handleAddBookmark}
				>
					<Fade in={!bookmarked} timeout={animationTimeout}>
						<BookmarkAdd />
					</Fade>
				</IconButton>
			) : null}
		</>
	);
}

// const BookmarkWrapper = ({ ...props }) => {
// 	return (
// 		<Fade in={true} timeout={1000}>
// 			<Tooltip
// 				arrow={true}
// 				className={'border-t-2'}
// 				disableFocusListener
// 				disableHoverListener
// 				disableTouchListener
// 				open={props.open}
// 				placement={'top-end'}
// 				title={props.title}
// 			>
// 				<IconButton color={'primary'}>{props.children}</IconButton>
// 			</Tooltip>
// 		</Fade>
// 	);
// };

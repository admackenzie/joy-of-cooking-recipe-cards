'use client';

import { useState } from 'react';

import { Fade, IconButton, Tooltip } from '@mui/material';
import { Bookmark, BookmarkAdd } from '@mui/icons-material';

export default function BookmarkButton() {
	const [bookmarked, setBookmarked] = useState(false);
	// const [tooltipOpen, setTooltipOpen] = useState(false);

	const handleBookmark = () => {
		// setTooltipOpen(true);

		setBookmarked(!bookmarked);

		// setTimeout(() => {
		// 	setTooltipOpen(false);
		// }, 1000);
	};

	return (
		<IconButton
			className={`${!bookmarked && 'opacity-20'}`}
			color={'primary'}
			onClick={handleBookmark}
		>
			{/* Animate toggle between bookmarked and un-bookmarked states*/}
			{bookmarked ? (
				<Fade in={bookmarked} timeout={1000}>
					<Bookmark />
				</Fade>
			) : null}

			{!bookmarked ? (
				<Fade in={!bookmarked} timeout={1000}>
					<BookmarkAdd />
				</Fade>
			) : null}
		</IconButton>
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

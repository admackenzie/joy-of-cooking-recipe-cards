'use client';

import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import {
	Bookmarks,
	MenuBook,
	Search as SearchIcon,
	Settings,
} from '@mui/icons-material';

export default function MobileNav() {
	// Highlight icons on bottom nav
	const [value, setValue] = useState(2);

	return (
		<Paper elevation={6}>
			<BottomNavigation
				onChange={(_e, newValue) => {
					setValue(newValue);
				}}
				showLabels
				// sx={{ borderTop: `2px solid ${borderGrey}` }}
				value={value}
			>
				<BottomNavigationAction label="Chapters" icon={<MenuBook />} />

				<BottomNavigationAction
					label="Bookmarks"
					icon={<Bookmarks />}
				/>

				<BottomNavigationAction label="Search" icon={<SearchIcon />} />

				<BottomNavigationAction label="Settings" icon={<Settings />} />
			</BottomNavigation>
		</Paper>
	);
}

/* // Pixel width of the sidebars
const leftWidth = 225;
const rightWidth = 300;

// Sidebar breakpoints
const leftBP = 'md'; // 900px
const rightBP = 'lg'; // 1200px

// XL breakpoint
const maxWidth = 1536;

sx={{
				maxWidth: {
					// [`${leftBP}`]: `calc(100% - ${leftWidth}px)`,
					[`${rightBP}`]: `calc(100% - ${leftWidth + rightWidth}px)`,
					xl: `calc(${maxWidth}px - ${leftWidth + rightWidth}px)`,
				},
			}} */

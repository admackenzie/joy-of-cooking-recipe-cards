'use client';

import { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

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
		<BottomNavigation
			className={' bg-lime-400'}
			showLabels
			value={value}
			onChange={(_e, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction label="Chapters" icon={<MenuBook />} />

			<BottomNavigationAction label="Bookmarks" icon={<Bookmarks />} />

			<BottomNavigationAction label="Search" icon={<SearchIcon />} />

			<BottomNavigationAction label="Settings" icon={<Settings />} />
		</BottomNavigation>
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

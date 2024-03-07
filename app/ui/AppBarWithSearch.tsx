'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
	AppBar,
	Box,
	Fab,
	Fade,
	Slide,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {
	MenuBook,
	Bookmarks,
	Search as SearchIcon,
	Settings,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { PopoverMenu, Search } from '@/app/ui/index';

import { debounce } from '@/app/lib/utils';

interface Props {
	searchFocus: boolean;
	setSearchFocus: any;
}

export default function AppBarWithSearch({
	searchFocus,
	setSearchFocus,
}: Props) {
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction={'down'} in={!trigger || searchFocus}>
			<AppBar
				elevation={3}
				sx={{
					backgroundColor: '#fff',
					// position: 'fixed',
				}}
			>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						// Remove right gutter when icons are present
						pr: { md: 0 },
						py: '0.5rem',
					}}
				>
					{/* Display logo */}
					<Box
						sx={{
							flexShrink: 0,
							mr: '3rem',
						}}
					>
						<Link href={'/'}>
							{/* Use Box component to allow image switching based on breakpoint with the content attribute */}
							<Box
								alt="logo"
								component="img"
								sx={{
									content: {
										xs: 'url(/images/header-small-variant-0.jpg)',
										sm: 'url(/images/header-large.jpg)',
									},
									height: '3rem',
									mt: { sm: '0.25rem' },
								}}
							/>
						</Link>
					</Box>

					<Box sx={{ display: 'flex' }}>
						{/* Display search input */}
						<Search
							searchFocus={searchFocus}
							setSearchFocus={setSearchFocus}
						/>

						{/* Display menu icons */}
						<Box
							sx={{
								display: { xs: 'none', md: 'block' },
								my: 'auto',
							}}
						>
							<PopoverMenu />
						</Box>
					</Box>

					{/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					<BottomNavigation showLabels>
						<BottomNavigationAction
							label="Bookmarks"
							icon={<Bookmarks />}
							sx={{ display: { lg: 'none' } }}
						/>

						<BottomNavigationAction
							label="Chapters"
							icon={<MenuBook />}
							sx={{ display: { md: 'none' } }}
						/>

						<BottomNavigationAction
							label="Settings"
							icon={<Settings />}
						/>
					</BottomNavigation>
				</Box> */}
				</Toolbar>
			</AppBar>
		</Slide>
	);
}

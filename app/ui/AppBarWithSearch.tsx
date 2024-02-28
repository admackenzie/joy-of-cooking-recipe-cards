'use client';

import Link from 'next/link';

import { AppBar, Box, Toolbar } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { MenuBook, Bookmarks, Settings } from '@mui/icons-material';

import { PopoverMenu, Search } from '@/app/ui/index';

export default function AppBarWithSearch() {
	return (
		<AppBar
			elevation={3}
			sx={{
				backgroundColor: '#fff',
				position: 'sticky',
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
					<Search />

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
	);
}

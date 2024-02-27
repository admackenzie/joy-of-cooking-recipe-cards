'use client';

import {
	AppBar,
	Box,
	InputAdornment,
	TextField,
	Fade,
	Toolbar,
} from '@mui/material';
import Link from 'next/link';
import { Search as SearchIcon } from '@mui/icons-material';
import { PopoverMenu } from '@/app/ui/index';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { MenuBook, Bookmarks, Settings } from '@mui/icons-material';

import { Search } from '@/app/ui/index';

export default function AppBarWithSearch() {
	return (
		<AppBar className={'bg-white sticky'}>
			<Toolbar className={'justify-between'} sx={{ pr: { md: 0 } }}>
				{/* Logo -- using a Box with sx attributes allows for easy image swapping based on breakpoints*/}
				<Link href={'/'}>
					<Box
						alt="logo"
						className={'h-12 mr-8 my-auto'}
						component="img"
						sx={{
							content: {
								xs: 'url(/images/header-small-variant-0.jpg)',
								sm: 'url(/images/header-large.jpg)',
							},
						}}
					/>
				</Link>

				{/* <Box className={'mr-8 my-auto relative'}>
					<Box
						className={'h-12 min-w-16'}
						sx={{ display: { xs: 'block', sm: 'none' } }}
					>
						<Image
							alt={'logo'}
							fill={true}
							priority={true}
							src={logoSmall}
						/>
					</Box>

					<Box
						className={'h-12  min-w-56'}
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						<Image
							alt={'logo'}
							fill={true}
							priority={true}
							src={logoLarge}
						/>
					</Box>
				</Box> */}

				{/* Search input */}
				<Box className={'flex shrink py-2'}>
					{/* <Box sx={{ mr: { xs: '1rem', sm: '2rem', md: 0 } }}> */}
					<Search />
					{/* </Box> */}

					{/* Hamburger menu */}
					<Box
						className={'my-auto'}
						sx={{ display: { xs: 'none', md: 'block' } }}
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

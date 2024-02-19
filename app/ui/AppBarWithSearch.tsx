'use client';

import { AppBar, Box, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { PopoverMenu } from '@/app/ui/index';

import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { MenuBook, Bookmarks, Settings } from '@mui/icons-material';

export default function AppBarWithSearch() {
	return (
		<AppBar className={'flex-row justify-between mb-6 static bg-white'}>
			{/* Logo -- using a Box with sx attributes allows for easy image swapping based on breakpoints*/}
			<Box
				alt="logo"
				className={'h-14 p-3 w-auto'}
				component="img"
				sx={{
					content: {
						xs: 'url(/images/header-small-variant-0.jpg)',
						sm: 'url(/images/header-large.jpg)',
					},
				}}
			/>

			<Box className={'flex'}>
				{/* Search input */}
				<TextField
					sx={{ mr: { xs: '16px', sm: 0 } }}
					className={'w-full max-w-xs'}
					variant={'outlined'}
					placeholder={'Search recipes'}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>

				{/* Hamburger menu */}
				<Box
					className={'my-auto'}
					sx={{ display: { xs: 'none', sm: 'block' } }}
				>
					<PopoverMenu />
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
			</Box>
		</AppBar>
	);
}

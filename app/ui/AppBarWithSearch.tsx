'use client';

import Link from 'next/link';
import { useState } from 'react';

import {
	AppBar,
	Box,
	IconButton,
	Slide,
	Toolbar,
	useMediaQuery,
	useScrollTrigger,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

import { MobileNavDrawer, Search } from '@/app/ui/index';

interface Props {
	searchFocus: boolean;
	setSearchFocus: any;
}

export default function AppBarWithSearch({
	searchFocus,
	setSearchFocus,
}: Props) {
	// Display the bar only at the top of the screen
	const trigger = useScrollTrigger({ disableHysteresis: true });

	// Assign viewport breakpoints for style behavior
	const { breakpoints } = useTheme();
	const mobileVP = useMediaQuery(breakpoints.down('md'));
	const desktopVP = useMediaQuery(breakpoints.up('md'));

	const [drawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<Slide
				// appear={false}
				direction={'down'}
				in={mobileVP ? searchFocus || !trigger : true}
			>
				<AppBar
					elevation={3}
					sx={{
						backgroundColor: '#fff',
						position: 'fixed',
					}}
				>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
							paddingY: '0.5rem',
						}}
					>
						{/* Display logo */}
						<Box
							sx={{
								flexShrink: 0,
								marginRight: '2rem',
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

						{/* Display search input and menu icon */}
						<Box sx={{ alignItems: 'center', display: 'flex' }}>
							<Search
								searchFocus={searchFocus}
								setSearchFocus={setSearchFocus}
							/>

							<IconButton
								onClick={() => setDrawerOpen(true)}
								sx={{ paddingLeft: '1rem', paddingRight: 0 }}
							>
								<Menu />
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</Slide>

			<MobileNavDrawer
				drawerOpen={drawerOpen}
				setDrawerOpen={setDrawerOpen}
			/>
		</>
	);
}

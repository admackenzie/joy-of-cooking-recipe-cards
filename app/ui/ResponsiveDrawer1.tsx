'use client';

import { useState } from 'react';

import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Container,
	Drawer,
	Slide,
	useScrollTrigger,
} from '@mui/material';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Search } from '@/app/ui/index';

// Pixel width of the drawers (default 240)
const drawerWidth = 300;

// Drawer breakpoints
const leftBP = 'md'; // 900px
const rightBP = 'lg'; // 1200px
// XL breakpoint
const maxWidth = 1536;

// Horizontal padding from Container component
const gutter = 24;

export default function ResponsiveDrawer() {
	// Drawer toggle states
	const [leftOpen, setLeftOpen] = useState(false);
	const [rightOpen, setRightOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);

	// Highlight els on bottom nav
	const [value, setValue] = useState(0);

	const handleDrawerClose = (direction: string) => {
		setIsClosing(true);

		direction === 'left' ? setLeftOpen(false) : setRightOpen(false);
	};

	const handleDrawerTransitionEnd = () => setIsClosing(false);

	const handleDrawerToggle = (direction: string) => {
		if (!isClosing) {
			direction === 'left'
				? setLeftOpen(!leftOpen)
				: setRightOpen(!rightOpen);
		}
	};

	const leftDrawer = (
		<Container>
			<h1>Chapters here</h1>
		</Container>
	);

	const rightDrawer = (
		<Container>
			<h1>Favorites here</h1>
		</Container>
	);

	return (
		<>
			<Container className={'flex'} maxWidth={'xl'}>
				{/* Left drawer*/}
				<Box
					component="nav"
					sx={{
						width: { [`${leftBP}`]: drawerWidth },
						flexShrink: { [`${leftBP}`]: 0 },
					}}
				>
					{/* Small view drawer */}
					<Drawer
						variant="temporary"
						open={leftOpen}
						onTransitionEnd={handleDrawerTransitionEnd}
						onClose={() => handleDrawerClose('left')}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', [`${leftBP}`]: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						{leftDrawer}
					</Drawer>

					{/* Large view drawer */}
					{/* <Drawer
					anchor="left"
					variant="permanent"
					sx={{
						display: { xs: 'none', [`${leftBP}`]: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{leftDrawer}
				</Drawer> */}

					{/* Large drawer parent */}
					<Box
						className={'h-full'}
						sx={{
							display: { xs: 'none', [`${leftBP}`]: 'block' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
							border: '1px solid',
						}}
					>
						{leftDrawer}
					</Box>
				</Box>

				{/* Body */}
				<Container>
					<Box
						// className={'flex '}
						component="main"
						sx={{
							backgroundColor: 'red',
							width: '100%',
							// flexGrow: 1,
							// p: 3,
							// width: {
							// 	sm: `calc(100% - ${drawerWidth}px)`,
							// 	lg: `calc(100% - ${2 * drawerWidth}px)`,
							// },
						}}
					>
						<>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Doloremque, vitae tempore culpa, accusantium
							soluta, recusandae sit veniam quas sunt distinctio
							architecto. In voluptatibus dolore ut cum minima
							voluptatum, possimus quidem neque illo explicabo
							autem deleniti cumque maxime nulla quam provident
							assumenda pariatur? Ipsam saepe beatae provident
							blanditiis laborum ea doloribus veritatis, itaque,
							vero perferendis exercitationem eligendi temporibus
							velit culpa dolores magnam ullam cum soluta incidunt
							molestias tempora illum maiores obcaecati quaerat.
							Ullam non facere, eum dolorem tempore accusantium
							ab! Accusamus vel molestias natus, maxime amet quos
							perferendis alias delectus asperiores eum facere
							omnis maiores magnam aliquid voluptate animi, ipsam
							ipsa et mollitia tenetur! Excepturi officiis minus
							sequi temporibus deserunt quae error debitis dicta.
							Consectetur ipsam voluptatem debitis quis quod
							molestiae deserunt eius quisquam nobis ex eveniet
							aliquid voluptatum sapiente suscipit, porro, illo
							vero placeat. Aperiam cum soluta necessitatibus quo
							doloribus molestias debitis, corporis rerum,
							possimus ex, explicabo rem quod nam! Quia eum
							maiores quisquam nemo laudantium quae blanditiis
							pariatur voluptate placeat quidem. Dolore, nihil
							debitis. Voluptas autem cumque dignissimos
							consequuntur exercitationem deserunt corporis
							architecto sit, ad temporibus placeat eligendi
							perspiciatis. Dignissimos mollitia eaque vero
							explicabo dolorem, itaque modi natus autem in,
							inventore nesciunt voluptates perferendis, doloribus
							ea cum architecto sunt provident iste cumque
							obcaecati quam! Autem voluptas praesentium suscipit
							illo, quae quo, distinctio repellendus ex corrupti
							harum alias perspiciatis saepe. Quae culpa odio quia
							inventore repellendus dolore maxime, laborum harum,
							reprehenderit at quis officiis quod illo non
							quibusdam enim. Doloribus error at fugiat temporibus
							quis, dolore voluptatibus doloremque ipsum, hic odit
							vero ipsam quas accusantium cumque quos quidem? Eos
							dolores excepturi quo commodi ullam voluptate earum
							molestiae neque ut culpa vero quod quidem omnis
							facere a recusandae perspiciatis, cum qui sint
							assumenda ea illo? Officiis minus molestiae ipsum
							laboriosam commodi in? Modi dolores ad corporis
							tempora vero eum explicabo impedit nemo eaque ipsa
							soluta eius, at magnam saepe quo commodi iste
							laudantium quidem corrupti. Enim, cum impedit? Porro
							minima voluptatem enim omnis! Reiciendis iusto
							cumque quam earum facilis, tempora dolor nam tempore
							perspiciatis libero quisquam neque, quibusdam ab?
							Sunt, unde! Esse quo eveniet vitae, nesciunt at
							laboriosam voluptatibus non numquam beatae dolores
							aut necessitatibus animi aspernatur deserunt! Quos
							blanditiis dolor sit distinctio quas error impedit
							non nisi inventore optio qui tenetur soluta vero,
							libero nostrum voluptatem eveniet. Ipsa cupiditate
							aut ratione alias iusto voluptatibus error voluptas
							itaque hic voluptatem unde distinctio magni
							doloribus ullam qui pariatur labore dolore,
							laudantium animi. Soluta sint nihil aliquam quia
							itaque molestias voluptas fugit placeat fugiat
							dolorum. Eum natus dolores corrupti quaerat
							quibusdam beatae cumque aut dolor similique eveniet,
							facere architecto quos accusamus consequuntur
							reiciendis incidunt magni unde adipisci totam sequi,
							vero, eaque ipsa cupiditate fuga? Aliquid, repellat
							explicabo ab a beatae illum praesentium, consequatur
							harum, pariatur numquam architecto vitae! Amet in
							architecto quae facere repudiandae dicta! Nesciunt
							similique ipsam, a harum illo accusantium libero
							cumque excepturi placeat blanditiis ipsum vel labore
							facilis dolor corrupti molestias ipsa dolores
							aspernatur nobis vero pariatur id ea! Soluta maxime
							accusamus rem eaque est eligendi sunt quibusdam amet
							odio.
						</>
					</Box>
				</Container>

				{/* Right drawer */}
				<Box
					component="nav"
					sx={{
						width: { [`${rightBP}`]: drawerWidth },
						flexShrink: { [`${rightBP}`]: 0 },
					}}
				>
					{/* Small view drawer */}
					<Drawer
						variant="temporary"
						open={rightOpen}
						onTransitionEnd={handleDrawerTransitionEnd}
						onClose={() => handleDrawerClose('right')}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: 'block', [`${rightBP}`]: 'none' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
						}}
					>
						{rightDrawer}
					</Drawer>

					{/* Large view drawer */}
					{/* <Drawer
					anchor="right"
					variant="permanent"
					sx={{
						display: { xs: 'none', [`${rightBP}`]: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{rightDrawer}
				</Drawer> */}

					{/* Large right drawer parent */}
					<Box
						className={'h-full'}
						sx={{
							display: { xs: 'none', [`${rightBP}`]: 'block' },
							'& .MuiDrawer-paper': {
								boxSizing: 'border-box',
								width: drawerWidth,
							},
							border: '1px solid',
						}}
					>
						{rightDrawer}
					</Box>
				</Box>
			</Container>

			{/* Navigation */}
			{/* FIXME: hide this after both drawers are on screen */}

			<Slide appear={false} direction="up" in={!useScrollTrigger()}>
				<BottomNavigation
					sx={{
						position: 'fixed',
						top: 'auto',
						bottom: 0,
						width: '100%',
						maxWidth: {
							// Calculate width with one drawer open
							[`${leftBP}`]: `calc(100% - ${
								drawerWidth + 2 * gutter
							}px)`,
							// Calculate width with two drawers open
							[`${rightBP}`]: `calc(100% - ${
								2 * (drawerWidth + gutter)
							}px)`,
							// Calculate width with both drawers open and the viewport exceeding content maxWidth
							xl: `calc(${maxWidth}px - ${
								2 * (drawerWidth + gutter)
							}px)`,
						},
						ml: {
							// Calculate margin with one or both drawers open
							[`${leftBP}`]: `${drawerWidth + gutter}px`,
							// Calculate margin with both drawers open and the viewport exeeding content maxWidth
							xl: `calc(0.5 * (100% - ${maxWidth}px) + ${
								drawerWidth + gutter
							}px )`,
						},
					}}
					showLabels
					value={value}
					onChange={(_e, newValue) => {
						setValue(newValue);
					}}
				>
					<BottomNavigationAction
						label="Search"
						icon={<RestoreIcon />}
					/>

					{/* <Search /> */}
					<BottomNavigationAction
						label="Chapters"
						icon={<FavoriteIcon />}
						onClick={() => handleDrawerToggle('left')}
					/>
					<BottomNavigationAction
						label="Bookmarks"
						icon={<LocationOnIcon />}
						onClick={() => handleDrawerToggle('right')}
					/>
				</BottomNavigation>
			</Slide>
			{/* </Container> */}
		</>
	);
	{
		/* Header */
	}
	{
		/* <AppBar
				position="fixed"
				sx={{
					width: {
						sm: `calc(100% - ${drawerWidth}px)`,
						lg: `calc(100% - ${2 * drawerWidth}px)`,
					},
					ml: { sm: `${drawerWidth}px` },
					mr: { lg: `${drawerWidth}px` },
					top: 'auto',
					bottom: 0,
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>

					<Typography variant="h6" noWrap component="div">
						Responsive drawer
					</Typography>

					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={handleDrawerToggle}
						sx={{ ml: 2, display: { lg: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar> */
	}
}

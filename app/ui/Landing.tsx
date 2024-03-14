'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
	Box,
	Card,
	CardActionArea,
	Collapse,
	Typography,
	Paper,
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import { MobileChapters, Search } from '@/app/ui/index';

interface Props {
	setSearchFocus: any;
}

export default function Landing({ setSearchFocus }: Props) {
	const [chaptersOpen, setChaptersOpen] = useState(false);

	const handleChaptersOpen = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLElement;

		setChaptersOpen(!chaptersOpen);

		setTimeout(() => {
			target.scrollIntoView({
				behavior: 'smooth',
			});
		}, 200);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				// marginTop: '10svh',
				// height: `${chaptersOpen ? '100%' : '100svh'}`,
			}}
		>
			<Image
				alt={'cover'}
				src={'/images/cover-variant-1.jpg'}
				width={1000}
				height={1000}
				priority
			/>

			<Box sx={{ marginX: 'auto' }}>
				<Search searchFocus={true} setSearchFocus={setSearchFocus} />
			</Box>

			{/* <Paper
				sx={{
					width: '120px',
					height: '240px',
					backgroundColor: '#f0f0f0',
					position: 'relative',
					border: '1px solid #ccc',
					borderRadius: '10px',

					'&:before': {
						content: '""',
						position: 'absolute',
						width: 0,
						height: 0,
						borderStyle: 'solid',

						borderWidth: '0 60px 120px 60px',
						borderColor:
							'transparent transparent #f0f0f0 transparent',
						top: '-60px',
						left: 0,
					},
					'&:after': {
						content: '""',
						position: 'absolute',
						width: 0,
						height: 0,
						borderStyle: 'solid',

						borderWidth: '0 60px 120px 60px',
						borderColor: 'transparent transparent #ccc transparent',
						top: '-61px',
						left: '-1px',
					},
				}}
			></Paper> */}

			<Paper
				elevation={chaptersOpen ? 0 : 1}
				sx={{
					// Accommodate mobile browser UI
					// marginBottom: '4rem',
					marginTop: '40%',
					marginX: 'auto',
					maxWidth: `${chaptersOpen ? '100%' : '20rem'}`,
				}}
			>
				<CardActionArea
					onClick={handleChaptersOpen}
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',

						width: '100%',
					}}
				>
					<Typography
						sx={{ paddingY: '1rem', textAlign: 'center' }}
						variant={'h5'}
					>
						Browse by chapter
					</Typography>

					<KeyboardArrowDown
						sx={{
							fontSize: '2rem',
							marginLeft: '4rem',
							transform: `rotate(${chaptersOpen && 180}deg)`,
							transition: `transform 200ms ease-in`,
						}}
					/>
				</CardActionArea>

				<Collapse in={chaptersOpen}>
					<Box sx={{ paddingTop: '1rem' }}>
						<MobileChapters bottomFunc={handleChaptersOpen} />
					</Box>
				</Collapse>
			</Paper>
		</Box>
	);
}

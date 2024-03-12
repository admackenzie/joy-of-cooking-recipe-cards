'use client';

import Image from 'next/image';
import { useState } from 'react';

import { Box, Card, CardActionArea, Collapse, Typography } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import { MobileChapters, Search } from '@/app/ui/index';

interface Props {
	setSearchFocus: any;
}

export default function Landing({ setSearchFocus }: Props) {
	const [open, setOpen] = useState(false);

	const handleOpen = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLElement;

		setOpen(!open);

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
				marginTop: '20%',
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

			<Card
				sx={{
					marginTop: '60%',
					marginX: 'auto',
					maxWidth: `${open ? '100%' : '20rem'}`,
				}}
			>
				<CardActionArea
					onClick={handleOpen}
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
							transform: `rotate(${open && 180}deg)`,
							transition: `transform 200ms ease-in`,
						}}
					/>
				</CardActionArea>

				<Collapse in={open}>
					<Box sx={{ paddingTop: '1rem' }}>
						<MobileChapters bottomFunc={handleOpen} />
					</Box>
				</Collapse>
			</Card>
		</Box>
	);
}

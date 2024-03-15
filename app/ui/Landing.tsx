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
import { Bookmarks, KeyboardArrowDown } from '@mui/icons-material';

import { MobileChapters, MobileNavDrawer, Search } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	bookmarks: Recipe[];
	removeBookmark: (e: React.SyntheticEvent) => void;
	setSearchFocus: (p: boolean) => void;
}

export default function Landing({
	bookmarks,
	removeBookmark,
	setSearchFocus,
}: Props) {
	const [chaptersOpen, setChaptersOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleChaptersOpen = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLElement;

		setChaptersOpen(!chaptersOpen);

		setTimeout(() => {
			target.scrollIntoView({
				behavior: 'smooth',
			});
		}, 200);
	};

	const numBookmarks = bookmarks.length;

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Image
					alt={'cover'}
					src={'/images/cover-variant-1.jpg'}
					width={1000}
					height={1000}
					priority
				/>
				{/* Display search bar */}
				<Box sx={{ marginX: 'auto' }}>
					<Search
						searchFocus={true}
						setSearchFocus={setSearchFocus}
					/>
				</Box>

				<Box sx={{ marginTop: '40%' }}>
					{/* Display bookmarks */}
					{/* {numBookmarks > 0 && (
						<Paper
							sx={{
								height: '4rem',
								marginBottom: '1rem',
								marginX: 'auto',
								width: '20rem',
							}}
						>
							<CardActionArea
								// onClick={handleChaptersOpen}
								sx={{
									display: 'flex',
									height: '100%',
									justifyContent: 'space-between',
									paddingX: '1.5rem',
									width: '100%',
								}}
							>
								<Typography variant={'h5'}>
									Browse{' '}
									{numBookmarks.toLocaleString('en-US')}{' '}
									bookmark
									{numBookmarks === 1 ? '' : 's'}
								</Typography>

								<Bookmarks color={'primary'} />
							</CardActionArea>
						</Paper>
					)} */}

					{/* Display chapters dropdown */}
					<Paper
						elevation={chaptersOpen ? 0 : 1}
						sx={{
							height: '4rem',
							marginX: 'auto',
							width: `${chaptersOpen ? '100%' : '20rem'}`,
						}}
					>
						<CardActionArea
							onClick={handleChaptersOpen}
							sx={{
								display: 'flex',
								height: '100%',
								justifyContent: 'space-between',
								paddingX: '1.5rem',
								width: '100%',
							}}
						>
							<Typography
								sx={{
									// Maintain text alignment with dropdown open
									paddingLeft: `${chaptersOpen && '2.5rem'}`,
									paddingY: '1rem',
								}}
								variant={'h5'}
							>
								Browse by chapter
							</Typography>

							<KeyboardArrowDown
								sx={{
									fontSize: '2rem',
									// marginLeft: '4rem',
									transform: `rotate(${
										chaptersOpen && 180
									}deg)`,
									transition: `transform 200ms ease-in`,
								}}
							/>
						</CardActionArea>

						<Collapse in={chaptersOpen}>
							<Box sx={{ paddingTop: '1rem' }}>
								<MobileChapters
									bottomFunc={handleChaptersOpen}
								/>
							</Box>
						</Collapse>
					</Paper>
				</Box>
			</Box>

			{/* <MobileNavDrawer
				bookmarks={bookmarks}
				drawerOpen={drawerOpen}
				removeBookmark={removeBookmark}
				setDrawerOpen={setDrawerOpen}
			/> */}
		</>
	);
}

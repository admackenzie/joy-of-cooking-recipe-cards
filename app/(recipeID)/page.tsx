import Grid from '@mui/material/Unstable_Grid2';

import { CardDeck, Chapters, Search } from '@/app/ui/index';

import { findBySearch } from '@/app/lib/CRUD';

import { TEMP_DATA } from '@/app/lib/definitions';

import Layout from '@/app/ui/Layout';

import { chapters, fileNames } from '@/app/lib/definitions';
import Link from 'next/link';
import { Box, Divider, Paper } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import Image from 'next/image';
import {
	CardHeader,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default async function main({ ...props }: Props) {
	const { search: query } = props.searchParams || '';

	const chapterList = (
		<>
			{/* <Typography variant={'h4'}>Chapters</Typography> */}
			{/* <Divider /> */}

			<List>
				{Array(fileNames.length)
					.fill('')
					.map((_el, i) => {
						return (
							<Box key={i}>
								<Link href={''}>
									<ListItem>
										<Typography variant={'h6'}>
											{chapters[i]?.abbrev}
										</Typography>
									</ListItem>
								</Link>

								{[1, 5, 10, 15, 19, 26].includes(i) && (
									<Divider
										component={'li'}
										// sx={{ bgcolor: '#cc802a' }}
										variant={'middle'}
									/>
								)}
							</Box>
						);
					})}
			</List>
		</>
	);

	return (
		<>
			<Layout
				leftCol={chapterList}
				main={<CardDeck data={TEMP_DATA} />}
			/>
		</>
		// <Grid className={'p-4'} container spacing={2}>
		// 	{/* Search bar */}
		// 	<Grid>
		// 		<Search />
		// 	</Grid>

		// 	{/* Recipe cards */}
		// 	<Grid>
		// 		{/*
		// 		---- Add optional loading element here ----
		// 		import { Suspense } from 'react';
		// 		import { Skeleton } from '/index';
		// 		<Suspense
		// 			key={query}
		// 			fallback={< Skeleton />}
		// 		></Suspense>
		// 		*/}

		// 		<CardDeck data={TEMP_DATA} />
		// 	</Grid>

		// 	{/* Chapters element */}
		// 	<Grid>
		// 		<Chapters />
		// 	</Grid>
		// </Grid>
	);
}

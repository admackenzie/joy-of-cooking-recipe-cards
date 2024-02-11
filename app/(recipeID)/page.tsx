import Grid from '@mui/material/Unstable_Grid2';

import { CardDeck, Chapters, Search } from '@/app/ui/index';

import { findBySearch } from '@/app/lib/CRUD';

import { TEMP_DATA } from '@/app/lib/definitions';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default async function main({ ...props }: Props) {
	const { search: query } = props.searchParams || '';

	return (
		<Grid className={'p-4'} container spacing={2}>
			{/* Search bar */}
			<Grid>
				<Search />
			</Grid>

			{/* Recipe cards */}
			<Grid>
				{/* 
				---- Add optional loading element here ----
				import { Suspense } from 'react';
				import { Skeleton } from '/index';
				<Suspense
					key={query}
					fallback={< Skeleton />}
				></Suspense> 
				*/}

				<CardDeck data={TEMP_DATA} />
			</Grid>

			{/* Chapters element */}
			<Grid>
				<Chapters />
			</Grid>
		</Grid>
	);
}

import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { Chapters, RecipeCard, Search } from '@/app/ui/index';

import { findBySearch } from '@/app/lib/CRUD';

import { TEMP_DATA } from '@/app/lib/definitions';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default async function main({ searchParams }: Props) {
	const query = searchParams?.search || '';

	if (query) {
		const recipes = await findBySearch(query);
	}

	return (
		<Container>
			<section>
				<Search />
			</section>

			<section>
				{/* 
				---- Add optional loading element here ----
				import { Suspense } from 'react';
				import { Skeleton } from '/index';
				<Suspense
					key={query}
					fallback={< Skeleton />}
				></Suspense> 
				*/}

				{(TEMP_DATA ?? []).map(recipe => {
					return <RecipeCard data={recipe} key={recipe.id} />;
				})}
			</section>

			<section>
				<Chapters />
			</section>
		</Container>
	);
}

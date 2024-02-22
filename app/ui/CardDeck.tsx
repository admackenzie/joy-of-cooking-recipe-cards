'use client';

import { useRouter } from 'next/navigation';

import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { BookmarkButton, RecipeCard } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

import { findBySearch } from '../lib/CRUD';

interface Props {
	addBookmark: any;
	recipes: Recipe[];
	removeBookmark: any;
}

export default function CardDeck({
	addBookmark,
	recipes,
	removeBookmark,
}: Props) {
	const router = useRouter();

	// Remove 'preview card' styling when only one record is returned
	const singleRecord = recipes.length === 1;

	return (
		<Grid container columnSpacing={2}>
			{(recipes ?? []).map(recipe => {
				const { id } = recipe;

				return (
					<Grid
						// Clip recipe cards to preview size
						className={`relative ${
							!singleRecord && 'max-h-[33vh] overflow-clip'
						}`}
						key={id}
						sx={{
							// Fade the bottom of the cards
							mask: `${
								!singleRecord &&
								'linear-gradient(to bottom, rgb(0, 0, 0, 1) 50%, rgb(0, 0, 0, 0) 100%)'
							}`,
						}}
						xs={12}
						sm={singleRecord ? 12 : 6}
					>
						<Box
							// Use router to access Next's routing functionality (prefetching, no page reload, etc). This is less verbose than configuring the <Link> component to accept functional components as children
							onClick={() => router.push(`/recipe/${id}`)}
						>
							<RecipeCard data={recipe} />
						</Box>

						<Box className={'absolute right-4 top-4'}>
							<BookmarkButton
								data={recipe}
								addBookmark={addBookmark}
								removeBookmark={removeBookmark}
							/>
						</Box>
					</Grid>
				);
			})}

			{/* TODO: end card: need more search results? */}
		</Grid>
	);
}

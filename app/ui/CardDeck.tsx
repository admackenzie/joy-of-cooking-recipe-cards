'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { Box, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { BookmarkButton, RecipeCard } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	addBookmark: any;
	data: Recipe[];
	removeBookmark: any;
}

export default function CardDeck({ ...props }: Props) {
	const router = useRouter();

	const { data: recipes } = props;
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
							<RecipeCard recipe={recipe} {...props} />
						</Box>

						<Box className={'absolute right-4 top-4'}>
							<BookmarkButton
								recipe={recipe}
								addBookmark={props.addBookmark}
								removeBookmark={props.removeBookmark}
							/>
						</Box>
					</Grid>
				);
			})}

			{/* TODO: end card: need more search results? */}
		</Grid>
	);
}

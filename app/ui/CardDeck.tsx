'use client';

import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { BookmarkButton, RecipeCard } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	data: Recipe[];
}

export default function CardDeck({ ...props }: Props) {
	return (
		<Grid container columnSpacing={2}>
			{(props.data ?? []).map(recipe => {
				return (
					<Grid
						// Clip recipe cards to preview size
						className={'max-h-[33vh] overflow-clip relative'}
						key={recipe.id}
						sx={{
							// Fade the bottom of the cards
							mask: 'linear-gradient(to bottom, rgb(0, 0, 0, 1) 50%, rgb(0, 0, 0, 0) 100%)',
						}}
						xs={12}
						sm={6}
					>
						<RecipeCard data={recipe} />

						{/* Display as absolute to position the button over the CardActionArea that encompasses all of RecipeCard */}
						<Box className={'absolute right-4 top-4'}>
							<BookmarkButton />
						</Box>
					</Grid>
				);
			})}
		</Grid>
	);
}

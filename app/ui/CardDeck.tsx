import Link from 'next/link';

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
	const { data: recipes } = props;

	// Remove 'preview card' styling when only one record is returned
	// const singleRecord = recipes.length === 1;

	return (
		<Grid container columnSpacing={2}>
			{(recipes ?? []).map(recipe => {
				const { id } = recipe;

				return (
					<Grid
						// Clip recipe cards to preview size
						className={'relative'}
						key={id}
						sx={{
							// Fade the bottom of the cards
							mask: `${
								// !singleRecord &&
								'linear-gradient(to bottom, rgb(0, 0, 0, 1) 70%, rgb(0, 0, 0, 0) 100%)'
							}`,
						}}
						xs={12}
						// sm={singleRecord ? 12 : 6}
						sm={6}
					>
						<CardActionArea>
							<Link href={`/recipe/${id}`}>
								<RecipeCard preview={true} recipe={recipe} />
							</Link>
						</CardActionArea>

						{/* Render bookmark button with absolute positioning to overlay the Link component around RecipeCard */}
						<Box className={'absolute right-4 top-4'}>
							<BookmarkButton
								addBookmark={props.addBookmark}
								recipe={recipe}
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

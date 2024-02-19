'use client';
import { useState } from 'react';

import { Recipe } from '@/app/lib/definitions';

import { RecipeCard } from '@/app/ui/index';

import Grid from '@mui/material/Unstable_Grid2';

import Link from 'next/link';

import RecipePreview from './RecipePreview';

import { Box, CardContent } from '@mui/material';

interface Props {
	data: Recipe[];
}

export default function CardDeck({ ...props }: Props) {
	const [cardCount, setCardCount] = useState(props.data.length);

	const handleCardCount = () => setCardCount(Math.max(0, cardCount - 1));

	// TODO: final 'card' to fill gap when there are odd numbered recipes
	return (
		<>
			{/* TODO: Error element here */}
			{cardCount === 0 && <p>No recipes found</p>}

			<Grid container columnSpacing={2}>
				{(props.data ?? []).map(recipe => {
					return (
						<RecipePreview
							data={recipe}
							handleCardCount={handleCardCount}
							key={recipe.id}
						/>
					);
				})}
			</Grid>
		</>
	);
}

'use client';
import { useState } from 'react';

import { Recipe } from '@/app/lib/definitions';

import { RecipeCard } from '@/app/ui/index';

import Grid from '@mui/material/Unstable_Grid2';

import Link from 'next/link';

interface Props {
	data: Recipe[];
}

export default function CardDeck({ ...props }: Props) {
	const [cardCount, setCardCount] = useState(props.data.length);

	const removeCard = () => setCardCount(Math.max(0, cardCount - 1));

	return (
		<>
			{/* TODO: Error element here */}
			{cardCount === 0 && <p>No recipes found</p>}

			<Grid container spacing={{ xs: 2, md: 3 }}>
				{(props.data ?? []).map(recipe => {
					return (
						<Grid key={recipe.id} xs={12} sm={6} md={4} lg={3}>
							<Link href={`/recipe/${recipe.id}`}>
								MODAL TEST
							</Link>

							<RecipeCard
								data={recipe}
								key={recipe.id}
								removeCard={removeCard}
							/>
						</Grid>
					);
				})}
			</Grid>
		</>
	);
}

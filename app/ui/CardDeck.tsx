'use client';
import { useState } from 'react';

import { Recipe } from '@/app/lib/definitions';

import { RecipeCard } from '@/app/ui/index';

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

			{(props.data ?? []).map(recipe => {
				return (
					<RecipeCard
						data={recipe}
						key={recipe.id}
						removeCard={removeCard}
					/>
				);
			})}
		</>
	);
}

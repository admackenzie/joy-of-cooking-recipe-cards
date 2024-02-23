import { Box, Container, Dialog } from '@mui/material';

import { RecipeCard } from '@/app/ui/index';

import { findByID } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

import RecipeModal from '@/app/ui/RecipeModal';

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params }: Props) {
	const { id } = params || 'NO ID';

	try {
		const recipe: Recipe = await findByID(id);

		return <RecipeModal recipe={recipe} />;
	} catch (err) {
		// FIXME: error handling
		console.log(err);
	}
}

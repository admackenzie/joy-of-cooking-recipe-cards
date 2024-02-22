import { Box, Container } from '@mui/material';

import { RecipeCard } from '@/app/ui/index';

import { findByID } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params }: Props) {
	const { id } = params || 'NO ID';

	try {
		const recipe: Recipe | null = await findByID(id);

		return (
			<Container className={'py-4'}>
				<RecipeCard data={recipe} />
			</Container>
		);
	} catch (err) {
		// FIXME: error handling
		console.log(err);
	}
}

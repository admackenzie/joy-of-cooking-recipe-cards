import { Container } from '@mui/material';

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
		// FIXME: there should be a way to pass the Recipe object from CardDeck to this url. The database is already queried to populate the preview cards so it would be better to somehow receive that data directly instead of querying the db again here
		const recipe: Recipe | null = await findByID(id);

		if (recipe) {
			return (
				<Container className={'py-4'} maxWidth={'sm'}>
					<RecipeCard recipe={recipe} />
				</Container>
			);
		}
	} catch (err) {
		// FIXME: error handling
		console.log(err);
	}
}

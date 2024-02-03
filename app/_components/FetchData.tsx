import prisma from '../../prisma/instantiate';

import { RecipeCard } from './index';

export default async function FetchData(queryProp: {
	[query: string]: string;
}) {
	const { queryProp: query } = queryProp;

	const khachapuri = {
		id: 'part19_sub019_10',
		title: 'KHACHAPURI (GEORGIAN CHEESE-FILLED BREAD)',
		section: 'Breads and Coffee Cakes',
		page: '613',
		servings: '1 large khachapuri or 4 servings',
		body: {
			text: [
				{
					embed: {
						startText: '1 large ',
						linkText: 'khachapuri',
						endText: ' or 4 servings',
						href: 'part19_sub020_01',
					},
				},
				'This boat-shaped bread is a version of the many different types of khachapuri found across Georgia. Common to all of them is an ample quantity of cheese.',
				'Prepare:',
				{ list: ['½ recipe Pizza Dough'] },
				'Once the dough has risen, preheat the oven to 375°F. Line a large baking sheet with parchment paper.',
				'On a lightly floured surface, shape the dough into a ball. Roll the dough into a 12-inch round. Cover and let rest for 10 minutes.',
				'Meanwhile, mix together in a medium bowl:',
				{
					list: [
						'1 cup shredded mozzarella (4 oz or 115g)',
						'½ cup crumbled feta cheese (2 oz or 55g)',
						'1 large egg',
						'1 tablespoon (15g) butter, softened',
					],
				},
				'Transfer the dough to the lined baking sheet. Sprinkle the cheese filling over the dough, spreading the filling to within 1 inch of the edge. Tightly roll one side of the dough round one-third of the way toward the center, then roll the opposite side of the dough round one-third of the way toward the center. Gently form the bread into a boat-like shape that is open in the middle and joined at both ends. At each end, pinch the joined dough together to prevent it from unrolling and twist each end gently. Brush the dough with:',
				{ list: ['1 egg yolk, well beaten'] },
				'Bake until the cheese is bubbling and browned, about 25 minutes. Remove from the oven and crack into the center of the bread:',
				{ list: ['1 large egg'] },
				'Return to the oven until the white is set but the yolk is still runny, 4 to 6 minutes. As soon as the bread comes out of the oven, place on top of the egg:',
				{ list: ['1 tablespoon butter, softened'] },
				'To eat, stir the runny yolk and butter into the melted cheese. Tear off pieces of the bread and dip them in the molten cheesy mixture.',
			],
			links: [
				{
					name: 'Pizza Dough',
					href: 'part19_sub020_01',
					idx: { lineIdx: 3, charIdx: 9, listIdx: 0 },
				},
			],
		},
	};

	interface Link {
		name: string;
		href: string;
		idx: {
			lineIdx: string | number;
			charIdx: string | number;
			listIdx?: string | number;
		};
	}

	interface Recipe {
		id: string;
		title: string;
		section: string;
		page?: string | number;
		servings?: string;
		body: {
			text: Array<string | { list: string[] }>;
			links?: Link[];
		};
	}

	if (query) {
		// FIXME: This is commented out to prevent multiple queries to the database during testing
		/* 	const recipes = await prisma.recipes.findMany({
			where: {
				// id: 'part02_sub002_06',
				title: {
					contains: query,
					// Searches without case sensitivity
					mode: 'insensitive',
				},
			},
		});
		return (recipes ?? []).map(recipe => {
			// For each query result, display RecipeCard
			return <RecipeCard data={recipe} key={recipe.id} />;

		
		}); */

		// ---- TEST ELEMENT ----
		// if (khachapuri.body.links) {
		// 	buildLinks(khachapuri.body);
		// }
		return <RecipeCard data={khachapuri} key={khachapuri.id} />;
	}

	// recipes.length > 0 ? (
	// 	<ul className="notes-list">
	// 		{recipes.map(note => (
	// 			<li key={note.id}>
	// 				<p>{note}</p>
	// 			</li>
	// 		))}
	// 	</ul>
	// ) : (
	// 	<div className="notes-empty">
	// 		{searchText
	// 			? `Couldn't find any notes titled "${searchText}".`
	// 			: 'No notes created yet!'}{' '}
	// 	</div>
	// );
}

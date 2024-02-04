import prisma from '../../prisma/instantiate';

import { RecipeCard } from '@/app/components/index';

interface Props {
	query: string;
}

export default async function FetchData({ query }: Props) {
	const recipes = [
		{
			id: 'part01_sub003_07',
			title: 'ICED COFFEE',
			section: 'Beverages',
			body: 'I. This quick method requires no special equipment. Prepare brewed coffee any way you wish, 4–5, using for each serving:\nAbout 4 tablespoons coffee (¾ ounce or 24 grams) for every ¾ cup (6 ounces) water\nPour this double-strength coffee directly over ice in a metal pitcher or small pot and stir it for 15 seconds. Strain the cooled coffee into tall glasses filled with more ice.\nYou may sweeten it with:\n(Sugar or Simple Syrup, to taste)\nIf desired, stir in:\n(Milk or cream to taste)\nII. For each serving, pour over ice in a tall glass:\n2 ounces espresso or Cold-Brew Coffee\nTop up the glass with:\n4 ounces or more cold water\nIf desired, add sweetener and cream as in I.',
			servings: null,
			page: null,
			html: {
				head: '<h3 class="h3rec" id="part01_sub003_07">ICED COFFEE</h3>',
				body: '<p class="noindent"><b>I.</b> This quick method requires no special equipment. Prepare brewed coffee any way you wish, 4–5, using for each serving:</p><ul class="ingredients-list">\r\n<li class="r-item">About 4 tablespoons coffee (¾ ounce or 24 grams) for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Pour this double-strength coffee directly over ice in a metal pitcher or small pot and stir it for 15 seconds. Strain the cooled coffee into tall glasses filled with more ice.</p><p class="noindent">You may sweeten it with:</p><ul class="ingredients-list">\r\n<li class="r-item">(Sugar or <a href="part01.xhtml#part01_sub017_01">Simple Syrup</a>, to taste)</li>\r\n</ul><p class="noindent">If desired, stir in:</p><ul class="ingredients-list">\r\n<li class="r-item">(Milk or cream to taste)</li>\r\n</ul><p class="noindent"><b>II.</b> For each serving, pour over ice in a tall glass:</p><ul class="ingredients-list">\r\n<li class="r-item">2 ounces <a href="part01.xhtml#part01_sub004">espresso</a> or <a href="part01.xhtml#part01_sub003_06">Cold-Brew Coffee</a></li>\r\n</ul><p class="noindent">Top up the glass with:</p><ul class="ingredients-list">\r\n<li class="r-item">4 ounces or more cold water</li>\r\n</ul><p class="noindent">If desired, add sweetener and cream as in <b><a href="part01.xhtml#part01_sub003_07">I</a>.</b></p>',
			},
		},
	];

	if (query) {
		// FIXME: This is commented out to prevent multiple queries to the database during testing

		/* 		const recipes = await prisma.recipes.findMany({
			where: {
				// id: 'part02_sub002_06',
				title: {
					contains: query,
					// Searches without case sensitivity
					mode: 'insensitive',
				},
			},
		}); */

		return (recipes ?? []).map(recipe => {
			// For each query result, display RecipeCard
			return <RecipeCard data={recipe} key={recipe.id} />;
		});
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

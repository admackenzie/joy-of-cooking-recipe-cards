import prisma from '../../prisma/instantiate';

import { RecipeCard } from '@/app/components/index';

interface Props {
	query: string;
}

export default async function FetchData({ query }: Props) {
	const recipes = [
		{
			id: 'part01_sub003_02',
			title: 'STEEPED COFFEE',
			section: 'Beverages',
			bodyText:
				'This method is for steeping in a French press or a camp coffeepot or kettle. If using a French press, prime it with hot water before brewing and wrap in a kitchen towel while it steeps to keep it warm.Place in a French press or have ready:About 2 tablespoons (⅜ ounce or 12 grams) coarse-grind coffee for every ¾ cup (6 ounces) waterBring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Pour the water over the coffee in the French press, or add the coffee to the camp coffeepot or kettle, and stir well. Cover and let steep for 5 minutes.For a French press, slowly push the plunger all the way down after the brewing time has elapsed, forcing the coffee grounds to the bottom of the pot.For camp, cowboy, or river coffee, open the kettle after the brewing time is up and add a splash of cold water to encourage the grounds to settle to the bottom. To be doubly sure that you are not serving excessive amounts of coffee grounds to yourself and your camping companions, pour the coffee through a metal strainer before doling it out.',
			servings: null,
			page: null,
			html: '<h3 class="h3rec" id="part01_sub003_02">STEEPED COFFEE</h3> <p class="noindent">This method is for steeping in a French press or a camp coffeepot or kettle. If using a French press, prime it with hot water before brewing and wrap in a kitchen towel while it steeps to keep it warm.</p><p class="noindent">Place in a French press or have ready:</p><ul class="ingredients-list">\r\n<li class="r-item">About 2 tablespoons (⅜ ounce or 12 grams) coarse-grind coffee for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Bring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Pour the water over the coffee in the French press, or add the coffee to the camp coffeepot or kettle, and stir well. Cover and let steep for 5 minutes.</p><p class="noindent"><b><i>For a French press,</i></b> slowly push the plunger all the way down after the brewing time has elapsed, forcing the coffee grounds to the bottom of the pot.</p><p class="noindent"><b><i>For camp, cowboy, or river coffee,</i></b> open the kettle after the brewing time is up and add a splash of cold water to encourage the grounds to settle to the bottom. To be doubly sure that you are not serving excessive amounts of coffee grounds to yourself and your camping companions, pour the coffee through a metal strainer before doling it out.</p>',
		},
		{
			id: 'part23_sub010_13',
			title: 'COWBOY COOKIES',
			section: 'Cookies and Bars',
			bodyText:
				'We like to improvise with this recipe depending on the ingredients we have on hand. Crushed pretzels, crisp cereal, dried cranberries, white chocolate or peanut butter chips, and bourbon-soaked raisins are all good substitutions for the chocolate, pecans, and/or coconut.Prepare Oatmeal Raisin Cookies, omitting the nutmeg, substituting for the raisins 1 cup semisweet chocolate chips, decreasing the oats to 1 ½ cups (150g), and adding 1 cup pecans, toasted and chopped, and 1 cup shredded or flaked sweetened coconut.',
			servings: 'About forty 3-inch cookies',
			page: '771',
			html: '<h3 class="h3rec" id="part23_sub010_13">COWBOY COOKIES</h3><p class="r-serve">About forty 3-inch cookies</p> <p class="r-noind">We like to improvise with this recipe depending on the ingredients we have on hand. Crushed pretzels, crisp cereal, dried cranberries, white chocolate or peanut butter chips, and bourbon-soaked raisins are all good substitutions for the chocolate, pecans, and/or coconut.</p><p class="r-noind">Prepare <b><a href="part23.xhtml#part23_sub010_12">Oatmeal Raisin Cookies</a>,</b> omitting the nutmeg, substituting for the raisins <b>1 cup semisweet chocolate chips,</b> decreasing the oats to 1 ½ cups (150g), and adding <b>1 cup pecans, <a href="part33a.xhtml#page_1005">toasted</a> and chopped,</b> and <b>1 cup shredded or flaked sweetened coconut.</b></p>',
		},
		{
			id: 'part01_sub003_07',
			title: 'ICED COFFEE',
			section: 'Beverages',
			bodyText:
				'I. This quick method requires no special equipment. Prepare brewed coffee any way you wish, 4–5, using for each serving:About 4 tablespoons coffee (¾ ounce or 24 grams) for every ¾ cup (6 ounces) waterPour this double-strength coffee directly over ice in a metal pitcher or small pot and stir it for 15 seconds. Strain the cooled coffee into tall glasses filled with more ice.You may sweeten it with:(Sugar or Simple Syrup, to taste)If desired, stir in:(Milk or cream to taste)II. For each serving, pour over ice in a tall glass:2 ounces espresso or Cold-Brew CoffeeTop up the glass with:4 ounces or more cold waterIf desired, add sweetener and cream as in I.',
			servings: null,
			page: null,
			html: '<h3 class="h3rec" id="part01_sub003_07">ICED COFFEE</h3> <p class="noindent"><b>I.</b> This quick method requires no special equipment. Prepare brewed coffee any way you wish, 4–5, using for each serving:</p><ul class="ingredients-list">\r\n<li class="r-item">About 4 tablespoons coffee (¾ ounce or 24 grams) for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Pour this double-strength coffee directly over ice in a metal pitcher or small pot and stir it for 15 seconds. Strain the cooled coffee into tall glasses filled with more ice.</p><p class="noindent">You may sweeten it with:</p><ul class="ingredients-list">\r\n<li class="r-item">(Sugar or <a href="part01.xhtml#part01_sub017_01">Simple Syrup</a>, to taste)</li>\r\n</ul><p class="noindent">If desired, stir in:</p><ul class="ingredients-list">\r\n<li class="r-item">(Milk or cream to taste)</li>\r\n</ul><p class="noindent"><b>II.</b> For each serving, pour over ice in a tall glass:</p><ul class="ingredients-list">\r\n<li class="r-item">2 ounces <a href="part01.xhtml#part01_sub004">espresso</a> or <a href="part01.xhtml#part01_sub003_06">Cold-Brew Coffee</a></li>\r\n</ul><p class="noindent">Top up the glass with:</p><ul class="ingredients-list">\r\n<li class="r-item">4 ounces or more cold water</li>\r\n</ul><p class="noindent">If desired, add sweetener and cream as in <b><a href="part01.xhtml#part01_sub003_07">I</a>.</b></p>',
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

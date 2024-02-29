import { Layout } from '@/app/ui/index';

import { findBySearch } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default async function Main({ searchParams }: Props) {
	// FIXME: try/catch here
	const { search: query } = searchParams || '';

	let data: Recipe[] = [];

	// ---- TEST RECIPE DATA ----
	data = temp as unknown as Recipe[];

	if (query) {
		data = (await findBySearch(query)) as Recipe[];
	}

	return <Layout data={data} />;
}

const temp = [
	{
		id: '0100301',
		title: 'DRIP COFFEE',
		chapter: 'Beverages',
		bodyText:
			'This is the basic method for pour-over brewers, Chemex pots, and the like. If you have an electric drip coffeemaker, follow the manufacturer’s directions, using the water-to-coffee proportions listed here.Place in a drip filter:About 2 tablespoons (⅜ ounce or 12 grams) medium- to fine-grind coffee for every ¾ cup (6 ounces) waterBring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Slowly pour just enough water over the ground coffee to moisten it thoroughly. Wait another 30 seconds or so, allowing the coffee to “bloom,” and gradually pour in the water, making sure all of the grounds stay saturated throughout brewing. When the drip process is complete, serve coffee at once or keep warm in a thermal carafe.',
		servings: null,
		page: null,
		html: '<h3 class="h3rec" id="part01_sub003_01">DRIP COFFEE</h3> <p class="noindent">This is the basic method for pour-over brewers, Chemex pots, and the like. If you have an electric drip coffeemaker, follow the manufacturer’s directions, using the water-to-coffee proportions listed here.</p><p class="noindent">Place in a drip filter:</p><ul class="ingredients-list">\r\n<li class="r-item">About 2 tablespoons (⅜ ounce or 12 grams) medium- to fine-grind coffee for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Bring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Slowly pour just enough water over the ground coffee to moisten it thoroughly. Wait another 30 seconds or so, allowing the coffee to “bloom,” and gradually pour in the water, making sure all of the grounds stay saturated throughout brewing. When the drip process is complete, serve coffee at once or keep warm in a thermal carafe.</p>',
	},
	{
		id: '0100302',
		title: 'STEEPED COFFEE',
		chapter: 'Beverages',
		bodyText:
			'This method is for steeping in a French press or a camp coffeepot or kettle. If using a French press, prime it with hot water before brewing and wrap in a kitchen towel while it steeps to keep it warm.Place in a French press or have ready:About 2 tablespoons (⅜ ounce or 12 grams) coarse-grind coffee for every ¾ cup (6 ounces) waterBring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Pour the water over the coffee in the French press, or add the coffee to the camp coffeepot or kettle, and stir well. Cover and let steep for 5 minutes.For a French press, slowly push the plunger all the way down after the brewing time has elapsed, forcing the coffee grounds to the bottom of the pot.For camp, cowboy, or river coffee, open the kettle after the brewing time is up and add a splash of cold water to encourage the grounds to settle to the bottom. To be doubly sure that you are not serving excessive amounts of coffee grounds to yourself and your camping companions, pour the coffee through a metal strainer before doling it out.',
		servings: null,
		page: null,
		html: '<h3 class="h3rec" id="part01_sub003_02">STEEPED COFFEE</h3> <p class="noindent">This method is for steeping in a French press or a camp coffeepot or kettle. If using a French press, prime it with hot water before brewing and wrap in a kitchen towel while it steeps to keep it warm.</p><p class="noindent">Place in a French press or have ready:</p><ul class="ingredients-list">\r\n<li class="r-item">About 2 tablespoons (⅜ ounce or 12 grams) coarse-grind coffee for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Bring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Pour the water over the coffee in the French press, or add the coffee to the camp coffeepot or kettle, and stir well. Cover and let steep for 5 minutes.</p><p class="noindent"><b><i>For a French press,</i></b> slowly push the plunger all the way down after the brewing time has elapsed, forcing the coffee grounds to the bottom of the pot.</p><p class="noindent"><b><i>For camp, cowboy, or river coffee,</i></b> open the kettle after the brewing time is up and add a splash of cold water to encourage the grounds to settle to the bottom. To be doubly sure that you are not serving excessive amounts of coffee grounds to yourself and your camping companions, pour the coffee through a metal strainer before doling it out.</p>',
	},
	{
		id: '0100303',
		title: 'VACUUM-METHOD COFFEE',
		chapter: 'Beverages',
		bodyText:
			'Boiling water in the lower bowl of the vacuum coffeemaker is forced into the upper chamber, where it mixes with the coffee and then filters back into the lower bowl. If using an electric vacuum coffeemaker, follow the manufacturer’s directions, using the water-to-coffee proportions listed here. Allow for every serving:About 2 tablespoons (⅜ ounce or 12 grams) medium- to fine-grind coffee for every ¾ cup (6 ounces) waterMeasure water into the lower bowl. Place on the heat. Add the ground coffee to the upper bowl. (If your equipment has a vented stem—a small hole in the side of the tube above the hot water line—you can place the upper bowl on the coffeemaker and place the whole thing on the heat; if it does not have a vented stem, wait until the water is actively boiling before putting the upper bowl in place.) Insert the upper bowl into the lower one with a light twist to ensure a tight seal. When nearly all the water has risen into the upper bowl (some of it will always remain below), stir the water and coffee thoroughly. In 1 to 3 minutes (the finer the grind, the shorter the time), remove from the heat and allow the coffee to run back into the lower bowl.',
		servings: null,
		page: null,
		html: '<h3 class="h3rec" id="part01_sub003_03">VACUUM-METHOD COFFEE</h3> <p class="noindent">Boiling water in the lower bowl of the vacuum coffeemaker is forced into the upper chamber, where it mixes with the coffee and then filters back into the lower bowl. If using an electric vacuum coffeemaker, follow the manufacturer’s directions, using the water-to-coffee proportions listed here. Allow for every serving:</p><ul class="ingredients-list">\r\n<li class="r-item">About 2 tablespoons (⅜ ounce or 12 grams) medium- to fi<b>ne-grind</b> coffee for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Measure water into the lower bowl. Place on the heat. Add the ground coffee to the upper bowl. (If your equipment has a vented stem—a small hole in the side of the tube above the hot water line—you can place the upper bowl on the coffeemaker and place the whole thing on the heat; if it does not have a vented stem, wait until the water is actively boiling before putting the upper bowl in place.) Insert the upper bowl into the lower one with a light twist to ensure a tight seal. When nearly all the water has risen into the upper bowl (some of it will always remain below), stir the water and coffee thoroughly. In 1 to 3 minutes (the finer the grind, the shorter the time), remove from the heat and allow the coffee to run back into the lower bowl.</p>',
	},
	{
		id: '0100304',
		title: 'PERCOLATED COFFEE',
		chapter: 'Beverages',
		bodyText:
			'This is the method for stovetop percolators; if you have an electric machine, follow the manufacturer’s directions, using the water-to-coffee proportions listed here. This method will extract bitter notes from the coffee if it is left on. Turn off or remove from the heat promptly after the brewing time has elapsed.Fill the bottom of the percolator with water. Place in the percolator’s basket:About 2 tablespoons (⅜ ounce or 12 grams) medium-grind coffee for every ¾ cup (6 ounces) waterPlace the percolator over medium heat and bring the water to a boil. Allow the coffee to percolate slowly, 6 to 8 minutes. Remove from the heat and serve.',
		servings: null,
		page: null,
		html: '<h3 class="h3rec" id="part01_sub003_04">PERCOLATED COFFEE</h3> <p class="noindent">This is the method for stovetop percolators; if you have an electric machine, follow the manufacturer’s directions, using the water-to-coffee proportions listed here. This method will extract bitter notes from the coffee if it is left on. Turn off or remove from the heat promptly after the brewing time has elapsed.</p><p class="noindent">Fill the bottom of the percolator with water. Place in the percolator’s basket:</p><ul class="ingredients-list">\r\n<li class="r-item">About 2 tablespoons (⅜ ounce or 12 grams) medium-grind coffee for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Place the percolator over medium heat and bring the water to a boil. Allow the coffee to percolate slowly, 6 to 8 minutes. Remove from the heat and serve.</p>',
	},
	{
		id: '0100305',
		title: 'COFFEE IN QUANTITY',
		chapter: 'Beverages',
		bodyText:
			'For large percolators, follow the manufacturer’s directions. For large coffee urns, measure out:3 cups coarse-grind coffee (about 10 ounces) for every 1 gallon waterPut the ground coffee in a jelly bag, nut milk bag, or cotton pillowcase large enough to allow for double expansion and securely tie it off. Bring the water to a low boil and take it off the heat. When the water has cooled to 200° to 205°F, pour into the coffee urn. Place the coffee-filled bag in it. Let stand, covered, for 5 minutes. Agitate the bag several times during this period. Remove the bag, cover the urn, and serve at once.',
		servings: null,
		page: '4–5',
		html: '<h3 class="h3rec" id="part01_sub003_05">COFFEE IN QUANTITY</h3> <p class="noindent">For large percolators, follow the manufacturer’s directions. For large coffee urns, measure out:</p><ul class="ingredients-list">\r\n<li class="r-item">3 cups coarse-grind coffee (about 10 ounces) for every 1 gallon water</li>\r\n</ul><p class="noindent">Put the ground coffee in a jelly bag, nut milk bag, or cotton pillowcase large enough to allow for double expansion and securely tie it off. Bring the water to a low boil and take it off the heat. When the water has cooled to 200° to 205°F, pour into the coffee urn. Place <span aria-label="5" epub:type="pagebreak" id="page_5" role="doc-pagebreak" title="5"></span>the coffee-filled bag in it. Let stand, covered, for 5 minutes. Agitate the bag several times during this period. Remove the bag, cover the urn, and serve at once.</p>',
	},
	{
		id: '0100306',
		title: 'COLD-BREW COFFEE',
		chapter: 'Beverages',
		bodyText:
			'This overnight method for making coffee results in a highly concentrated but extremely smooth brew. You can buy all kinds of filters and gadgets to make cold brew, but all you really need is a jar, a lined sieve, and patience. We prefer to line the sieve with a thin cotton kitchen towel, but any thin, finely woven natural fabric will work (the cheesecloth sold at supermarkets is too gauzy to filter out coffee grounds).Place in a 2-quart container:2 cups coarse-grind coffee (about 7 ounces)Stir in:4 cups room-temperature waterMake sure all the coffee grounds are thoroughly wet. Cover and let stand at room temperature for at least 12 hours, but no more than 24. Strain the coffee through a sieve lined with a piece of clean, thin kitchen towel or other natural fabric. Transfer to a quart-sized jar and store in the refrigerator for up to 2 weeks. To serve, dilute to taste with hot water, or dilute with cold water and serve on ice. For an 8-ounce cup of hot coffee, we use 2 ounces cold-brew concentrate and 6 ounces hot water. For an iced 12-ounce beverage, we use 2 ounces cold-brew concentrate, 4 ounces cold water, and ice cubes to fill the glass.',
		servings: 'About 14 servings',
		page: null,
		html: '<h3 class="h3rec" id="part01_sub003_06">COLD-BREW COFFEE</h3><p class="noindentl">About 14 servings</p> <p class="noindent">This overnight method for making coffee results in a highly concentrated but extremely smooth brew. You can buy all kinds of filters and gadgets to make cold brew, but all you really need is a jar, a lined sieve, and patience. We prefer to line the sieve with a thin cotton kitchen towel, but any thin, finely woven natural fabric will work (the cheesecloth sold at supermarkets is too gauzy to filter out coffee grounds).</p><p class="noindent">Place in a 2-quart container:</p><ul class="ingredients-list">\r\n<li class="r-item">2 cups coarse-grind coffee (about 7 ounces)</li>\r\n</ul><p class="noindent">Stir in:</p><ul class="ingredients-list">\r\n<li class="r-item">4 cups room-temperature water</li>\r\n</ul><p class="noindent" id="pg5">Make sure all the coffee grounds are thoroughly wet. Cover and let stand at room temperature for at least 12 hours, but no more than 24. Strain the coffee through a sieve lined with a piece of clean, thin kitchen towel or other natural fabric. Transfer to a quart-sized jar and store in the refrigerator for up to 2 weeks. To serve, dilute to taste with hot water, or dilute with cold water and serve on ice. For an 8-ounce cup of hot coffee, we use 2 ounces cold-brew concentrate and 6 ounces hot water. For an iced 12-ounce beverage, we use 2 ounces cold-brew concentrate, 4 ounces cold water, and ice cubes to fill the glass.</p>',
	},
	{
		id: '0100307',
		title: 'ICED COFFEE',
		chapter: 'Beverages',
		bodyText:
			'I. This quick method requires no special equipment. Prepare brewed coffee any way you wish, 4–5, using for each serving:About 4 tablespoons coffee (¾ ounce or 24 grams) for every ¾ cup (6 ounces) waterPour this double-strength coffee directly over ice in a metal pitcher or small pot and stir it for 15 seconds. Strain the cooled coffee into tall glasses filled with more ice.You may sweeten it with:(Sugar or Simple Syrup, to taste)If desired, stir in:(Milk or cream to taste)II. For each serving, pour over ice in a tall glass:2 ounces espresso or Cold-Brew CoffeeTop up the glass with:4 ounces or more cold waterIf desired, add sweetener and cream as in I.',
		servings: null,
		page: null,
		html: '<h3 class="h3rec" id="part01_sub003_07">ICED COFFEE</h3> <p class="noindent"><b>I.</b> This quick method requires no special equipment. Prepare brewed coffee any way you wish, 4–5, using for each serving:</p><ul class="ingredients-list">\r\n<li class="r-item">About 4 tablespoons coffee (¾ ounce or 24 grams) for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Pour this double-strength coffee directly over ice in a metal pitcher or small pot and stir it for 15 seconds. Strain the cooled coffee into tall glasses filled with more ice.</p><p class="noindent">You may sweeten it with:</p><ul class="ingredients-list">\r\n<li class="r-item">(Sugar or <a href="part01.xhtml#part01_sub017_01">Simple Syrup</a>, to taste)</li>\r\n</ul><p class="noindent">If desired, stir in:</p><ul class="ingredients-list">\r\n<li class="r-item">(Milk or cream to taste)</li>\r\n</ul><p class="noindent"><b>II.</b> For each serving, pour over ice in a tall glass:</p><ul class="ingredients-list">\r\n<li class="r-item">2 ounces <a href="part01.xhtml#part01_sub004">espresso</a> or <a href="part01.xhtml#part01_sub003_06">Cold-Brew Coffee</a></li>\r\n</ul><p class="noindent">Top up the glass with:</p><ul class="ingredients-list">\r\n<li class="r-item">4 ounces or more cold water</li>\r\n</ul><p class="noindent">If desired, add sweetener and cream as in <b><a href="part01.xhtml#part01_sub003_07">I</a>.</b></p>',
	},
	{
		id: '0100701',
		title: 'VIETNAMESE COFFEE',
		chapter: 'Beverages',
		bodyText:
			'This is delicious hot or iced. If you do not have a Vietnamese coffee filter, or phin, make Café Bombón, a similar drink popular in Spain, by pouring the condensed milk into a small tumbler and adding 2 ounces brewed espresso on top. You can also make this in quantity with a French press. Prepare a small cup of strong coffee per person and pour over the condensed milk in individual cups.Add to a glass tumbler:2 tablespoons sweetened condensed milkPlace a Vietnamese coffee filter over the tumbler and add to the filter:2 tablespoons fine-grind dark-roast coffee or coffee with chicoryPour over the grounds to moisten:2 tablespoons hot waterPlace the top filter over them and press or screw down lightly. Fill the filter with hot, not boiling water (200° to 205°F) and cover with the metal lid. Allow the coffee to drip into the glass. This should take 3 to 5 minutes (if it is faster than 3 minutes, either the coffee is too coarse or the filter is not pressed tight enough; if it is slower than 5 minutes, either the coffee is too fine or the filter is pressed too tight). Serve hot with a small spoon for stirring the dark and white layers together. To serve cold, stir the condensed milk into the coffee and pour into a glass filled with ice.',
		servings: '1 serving',
		page: null,
		html: '<h3 class="h3rec" id="part01_sub007_01">VIETNAMESE COFFEE</h3><p class="noindentl">1 serving</p> <p class="noindent">This is delicious hot or iced. If you do not have a <a href="part01.xhtml#pg2a">Vietnamese coffee filter, or phin</a>, make <b>Café Bombón,</b> a similar drink popular in Spain, by pouring the condensed milk into a small tumbler and adding <b>2 ounces <a href="part01.xhtml#part01_sub004">brewed espresso</a></b> on top. You can also make this in quantity with a French press. Prepare a small cup of strong coffee per person and pour over the condensed milk in individual cups.</p><p class="noindent">Add to a glass tumbler:</p><ul class="ingredients-list">\r\n<li class="r-item">2 tablespoons sweetened condensed milk</li>\r\n</ul><p class="noindent">Place a Vietnamese coffee filter over the tumbler and add to the filter:</p><ul class="ingredients-list">\r\n<li class="r-item">2 tablespoons fine-grind dark-roast coffee or coffee with chicory</li>\r\n</ul><p class="noindent">Pour over the grounds to moisten:</p><ul class="ingredients-list">\r\n<li class="r-item">2 tablespoons hot water</li>\r\n</ul><p class="noindent">Place the top filter over them and press or screw down lightly. Fill the filter with hot, not boiling water (200° to 205°F) and cover with the metal lid. Allow the coffee to drip into the glass. This should take 3 to 5 minutes (if it is faster than 3 minutes, either the coffee is too coarse or the filter is not pressed tight enough; if it is slower than 5 minutes, either the coffee is too fine or the filter is pressed too tight). Serve hot with a small spoon for stirring the dark and white layers together. To serve cold, stir the condensed milk into the coffee and pour into a glass filled with ice.</p>',
	},
	{
		id: '0100702',
		title: 'CUBAN COFFEE',
		chapter: 'Beverages',
		bodyText:
			'Cuban coffee is very dark, very strong, and sweet. Its most notable feature is the layer of foam on top, which is created by frothing sugar with some of the brewed coffee. This is traditionally made with Cuban, preground coffee brewed with a moka pot, but feel free to make the espresso in any of the ways mentioned in Brewing Espresso.Prepare:1 cup brewed espressoMeanwhile, add to a small measuring cup or heatproof pitcher with a pouring spout:3 tablespoons sugarAdd a teaspoon or so of the brewed coffee to the sugar in the pitcher. Stir the sugar vigorously with a spoon until it is very frothy and appears to foam. Pour in the remaining coffee and stir gently until the sugar is completely dissolved. Pour into cups. There should be a layer of dark brown foam, or espuma, on the top of each cup.',
		servings: '4 small but potent servings',
		page: null,
		html: '<h3 class="h3rec" id="part01_sub007_02">CUBAN COFFEE</h3><p class="noindentl">4 small but potent servings</p> <p class="noindent">Cuban coffee is very dark, very strong, and sweet. Its most notable feature is the layer of foam on top, which is created by frothing sugar with some of the brewed coffee. This is traditionally made with Cuban, preground coffee brewed with a moka pot, but feel free to make the espresso in any of the ways mentioned in <a href="part01.xhtml#part01_sub004">Brewing Espresso</a>.</p><p class="noindent">Prepare:</p><ul class="ingredients-list">\r\n<li class="r-item">1 cup brewed espresso</li>\r\n</ul><p class="noindent">Meanwhile, add to a small measuring cup or heatproof pitcher with a pouring spout:</p><ul class="ingredients-list">\r\n<li class="r-item">3 tablespoons sugar</li>\r\n</ul><p class="noindent">Add a teaspoon or so of the brewed coffee to the sugar in the pitcher. Stir the sugar vigorously with a spoon until it is very frothy and appears to foam. Pour in the remaining coffee and stir gently until the sugar is completely dissolved. Pour into cups. There should be a layer of dark brown foam, or <i>espuma</i>, on the top of each cup.</p>',
	},
	{
		id: '0100703',
		title: 'FROZEN COFFEE',
		chapter: 'Beverages',
		bodyText:
			'Place in a blender:¼ cup double-strength coffee as for Iced Coffee, cold-brew concentrate, or brewed espresso\r\n1 cup whole milk\r\n2 tablespoons sugar or sweetened condensed milk\r\n(2 ounces rum)Add:10 ice cubesBlend thoroughly. Serve in chilled glasses.',
		servings: '2 servings',
		page: null,
		html: '<h3 class="h3rec" id="part01_sub007_03">FROZEN COFFEE</h3><p class="noindentl">2 servings</p> <p class="noindent">Place in a blender:</p><ul class="ingredients-list">\r\n<li class="r-item">¼ cup double-strength coffee as for <a href="part01.xhtml#part01_sub003_07">Iced Coffee</a>, <a href="part01.xhtml#pg5">cold-brew concentrate</a>, or <a href="part01.xhtml#pg5a">brewed espresso</a></li>\r\n<li class="r-item">1 cup whole milk</li>\r\n<li class="r-item">2 tablespoons sugar or sweetened condensed milk</li>\r\n<li class="r-item">(2 ounces rum)</li>\r\n</ul><p class="noindent">Add:</p><ul class="ingredients-list">\r\n<li class="r-item">10 ice cubes</li>\r\n</ul><p class="noindent">Blend thoroughly. Serve in chilled glasses.</p>',
	},
	{
		id: '0101001',
		title: 'COLD-BREWED TEA',
		chapter: 'Beverages',
		bodyText:
			'This recipe works well with teas of all kinds, including herbal teas. The resulting tea will not have the bitterness that hot brewed teas have, and the flavor will not be as intense. Use the smaller amount of tea if it is fine, such as rooibos. Use the larger amount if the tea leaves are “fluffier” (like white tea).Add to a glass container or pitcher:2 to 3 tablespoons any loose-leaf teaFill the container with:8 cups cold waterRefrigerate and let sit 8 hours or overnight. Strain out the leaves and serve the tea over ice.',
		servings: '8 servings',
		page: null,
		html: '<h3 class="h3rec" id="part01_sub010_01">COLD-BREWED TEA</h3><p class="noindentl">8 servings</p> <p class="noindent">This recipe works well with teas of all kinds, including herbal teas. The resulting tea will not have the bitterness that hot brewed teas have, and the flavor will not be as intense. Use the smaller amount of tea if it is fine, such as rooibos. Use the larger amount if the tea leaves are “fluffier” (like white tea).</p><p class="noindent">Add to a glass container or pitcher:</p><ul class="nonlist">\r\n<li class="r-item">2 to 3 tablespoons any loose-leaf tea</li>\r\n</ul><p class="noindent">Fill the container with:</p><ul class="nonlist">\r\n<li class="r-item">8 cups cold water</li>\r\n</ul><p class="noindent">Refrigerate and let sit 8 hours or overnight. Strain out the leaves and serve the tea over ice.</p>',
	},
	{
		id: '0101002',
		title: 'MASALA CHAI',
		chapter: 'Beverages',
		bodyText:
			'This sweet and creamy Indian drink with an enticing combination of spices is popular the world over. Be sure to use a strong black tea, such as Assam—the flavor of lighter teas will be lost among the spices and milk.Bring just to a boil in a medium saucepan:3 cups water\r\n1 ½ cups milk\r\n½ cup sugar, or to taste\r\n2 cinnamon sticks\r\n16 green cardamom pods, crushed\r\n1 teaspoon whole cloves\r\n½-inch piece ginger, thinly sliced\r\n½ teaspoon black peppercornsRemove from the heat, cover, and let stand for 20 minutes. Return to a simmer, then remove from the heat and stir in:2 tablespoons black tea leavesCover and let stand 2 minutes. Strain and serve at once. Or let cool and serve over ice.',
		servings: '4 to 5 servings',
		page: '8',
		html: '<h3 class="h3rec" id="part01_sub010_02">MASALA CHAI</h3><p class="noindentl">4 to 5 servings</p> <p class="noindent">This sweet and creamy Indian drink with an enticing combination of spices is popular the world over. Be sure to use a strong black tea, such as Assam—the flavor of lighter teas will be lost among the spices and milk.</p><p class="noindent">Bring just to a boil in a medium saucepan:</p><ul class="nonlist">\r\n<li class="r-item">3 cups water</li>\r\n<li class="r-item">1 ½ cups milk</li>\r\n<li class="r-item">½ cup sugar, or to taste</li>\r\n<li class="r-item"><span aria-label="8" epub:type="pagebreak" id="page_8" role="doc-pagebreak" title="8"></span>2 cinnamon sticks</li>\r\n<li class="r-item">16 green cardamom pods, crushed</li>\r\n<li class="r-item">1 teaspoon whole cloves</li>\r\n<li class="r-item">½-inch piece ginger, thinly sliced</li>\r\n<li class="r-item">½ teaspoon black peppercorns</li>\r\n</ul><p class="noindent">Remove from the heat, cover, and let stand for 20 minutes. Return to a simmer, then remove from the heat and stir in:</p><ul class="nonlist">\r\n<li class="r-item">2 tablespoons black tea leaves</li>\r\n</ul><p class="noindent">Cover and let stand 2 minutes. Strain and serve at once. Or let cool and serve over ice.</p>',
	},
	{
		id: '0101003',
		title: 'ICED TEA',
		chapter: 'Beverages',
		bodyText:
			'This beverage originated in our family’s native town, St. Louis. The inventor was actually an Englishman who arrived at the concoction as an act of desperation, when the general public showed indifference to his hot tea offerings in the sweltering midwestern heat. Try adding mint, lemon zest strips, or dried hibiscus flowers to the tea as it brews. Flavored syrups, 15–16, and fruit juices can be added to taste. Or, mix half tea with half Lemonade to make an Arnold Palmer.Prepare tea, using the chart on 7, doubling the quantity of leaves (but not the water). Stir, strain, and pour over ice. Serve with:Lemon slices\r\n(Sprigs of mint)\r\n(Sugar or Simple Syrup, to taste)',
		servings: null,
		page: '8',
		html: '<h3 class="h3rec" id="part01_sub010_03">ICED TEA</h3> <p class="noindent">This beverage originated in our family’s native town, St. Louis. The inventor was actually an Englishman who arrived at the concoction as an act of desperation, when the general public showed indifference to his hot tea offerings in the sweltering midwestern heat. Try adding mint, lemon zest strips, or dried hibiscus flowers to the tea as it brews. Flavored syrups, 15–16, and fruit juices can be added to taste. Or, mix half tea with half <a href="part01.xhtml#pg13">Lemonade</a> to make an <b>Arnold Palmer.</b></p><p class="noindent">Prepare tea, using the chart on 7, doubling the quantity of leaves (but not the water). Stir, strain, and pour over ice. Serve with:</p><ul class="nonlist">\r\n<li class="r-item">Lemon slices</li>\r\n<li class="r-item">(Sprigs of mint)</li>\r\n<li class="r-item">(Sugar or <a href="part01.xhtml#part01_sub017_01">Simple Syrup</a>, to taste)</li>\r\n</ul>',
	},
	{
		id: '0101004',
		title: 'SWEET SOUTHERN ICED TEA',
		chapter: 'Beverages',
		bodyText:
			'In the South, iced tea is sweet and strong—too dark to read the newspaper through.Brew tea using:4 cups water\r\n6 to 7 bags black tea (or 8 teaspoons black tea leaves)Steep for 5 to 10 minutes. Remove the tea bags (or strain) and stir in while hot:1 cup sugar, or to tasteTransfer to a large pitcher and add:2 to 4 cups water, depending on the desired strength of the teaChill. Serve over ice. If desired, garnish with:(Lemon slices)',
		servings: '6 to 8 servings',
		page: '8',
		html: '<h3 class="h3rec" id="part01_sub010_04">SWEET SOUTHERN ICED TEA</h3><p class="noindentl">6 to 8 servings</p> <p class="noindent">In the South, iced tea is sweet and strong—too dark to read the newspaper through.</p><p class="noindent"><a href="part01.xhtml#part01_sub010">Brew tea</a> using:</p><ul class="nonlist">\r\n<li class="r-item">4 cups water</li>\r\n<li class="r-item">6 to 7 bags black tea (or 8 teaspoons black tea leaves)</li>\r\n</ul><p class="noindent">Steep for 5 to 10 minutes. Remove the tea bags (or strain) and stir in while hot:</p><ul class="nonlist">\r\n<li class="r-item">1 cup sugar, or to taste</li>\r\n</ul><p class="noindent">Transfer to a large pitcher and add:</p><ul class="nonlist">\r\n<li class="r-item">2 to 4 cups water, depending on the desired strength of the tea</li>\r\n</ul><p class="noindent">Chill. Serve over ice. If desired, garnish with:</p><ul class="nonlist">\r\n<li class="r-item">(Lemon slices)</li>\r\n</ul>',
	},
	{
		id: '0101005',
		title: 'THAI ICED TEA',
		chapter: 'Beverages',
		bodyText:
			'Thai iced tea is typically made only with black tea, but to achieve its characteristic (usually artificial) color, we add rooibos as well. For Thai iced tea that is closer to the restaurant version in sweetness, use the larger amount of sugar.In a medium saucepan bring to a boil:5 cups water\r\n½ to ¾ cup packed brown sugar or palm sugarRemove from the heat and add:2 tablespoons rooibos tea\r\n1 tablespoon black tea leaves\r\n2 green cardamom pods, crushed\r\n1 whole star anise\r\nSeeds scraped from 1 vanilla bean or 1 teaspoon vanilla extract or vanilla bean pasteSteep for 20 minutes. Strain. Fill 4 tall glasses with ice and divide the tea among the glasses. Pour over the top of each:2 tablespoons half-and-half or sweetened condensed milk (½ cup total)',
		servings: '4 servings',
		page: '8–9',
		html: '<h3 class="h3rec" id="part01_sub010_05">THAI ICED TEA</h3><p class="noindentl">4 servings</p> <p class="noindent">Thai iced tea is typically made only with black tea, but to achieve its characteristic (usually artificial) color, we add rooibos as well. For Thai iced tea that is closer to the restaurant version in sweetness, use the larger amount of sugar.</p><p class="noindent">In a medium saucepan bring to a boil:</p><ul class="nonlist">\r\n<li class="r-item">5 cups water</li>\r\n<li class="r-item">½ to ¾ cup packed brown sugar or palm sugar</li>\r\n</ul><p class="noindent">Remove from the heat and add:</p><ul class="nonlist">\r\n<li class="r-item">2 tablespoons rooibos tea</li>\r\n<li class="r-item">1 tablespoon black tea leaves</li>\r\n<li class="r-item"><span aria-label="9" epub:type="pagebreak" id="page_9" role="doc-pagebreak" title="9"></span>2 green cardamom pods, crushed</li>\r\n<li class="r-item">1 whole star anise</li>\r\n<li class="r-item">Seeds scraped from 1 vanilla bean or 1 teaspoon vanilla extract or vanilla bean paste</li>\r\n</ul><p class="noindent">Steep for 20 minutes. Strain. Fill 4 tall glasses with ice and divide the tea among the glasses. Pour over the top of each:</p><ul class="nonlist">\r\n<li class="r-item">2 tablespoons half-and-half or sweetened condensed milk (½ cup total)</li>\r\n</ul>',
	},
];

export type Recipe = {
	id: string;
	title: string;
	chapter: string;
	bodyText: string;
	servings: string | null;
	page: string | null;
	html: string;
};

export const chapters = [
	{
		name: 'Beverages',
		abbrev: 'Beverages',
	},
	{
		name: 'Cocktails, Wine, and Beer',
		abbrev: 'Cocktails',
	},
	{
		name: `Appetizers and Hors D'Oeuvre`,
		abbrev: 'Appetizers',
	},
	{
		name: 'Stocks and Soups',
		abbrev: 'Soups',
	},
	{
		name: 'Salads',
		abbrev: 'Salads',
	},
	{
		name: 'Sandwiches, Tacos, and Burritos',
		abbrev: 'Sandwiches',
	},
	{
		name: 'Egg Dishes',
		abbrev: 'Egg Dishes',
	},
	{
		name: 'Fruits',
		abbrev: 'Fruits',
	},
	{
		name: 'Vegetables',
		abbrev: 'Vegetables',
	},
	{
		name: 'Pasta, Noodles, and Dumplings',
		abbrev: 'Pasta',
	},
	{
		name: 'Grains',
		abbrev: 'Grains',
	},
	{
		name: 'Shellfish',
		abbrev: 'Shellfish',
	},
	{
		name: 'Fish',
		abbrev: 'Fish',
	},
	{
		name: 'Poultry and Wildfowl',
		abbrev: 'Poultry',
	},
	{
		name: 'Meat',
		abbrev: 'Meat',
	},
	{
		name: 'Game and Exotic Meats',
		abbrev: 'Exotic Meats',
	},
	{
		name: 'Stuffings and Casseroles',
		abbrev: 'Casseroles',
	},
	{
		name: 'Savory Sauces, Salad Dressings, Marinades, and Seasoning Blends',
		abbrev: 'Sauces',
	},
	{
		name: 'Breads and Coffee Cakes',
		abbrev: 'Breads',
	},
	{
		name: 'Pancakes, Waffles, Doughnuts, and Fritters',
		abbrev: 'Batters',
	},
	{
		name: 'Pies and Pastries',
		abbrev: 'Pies',
	},
	{
		name: 'Cakes and Cupcakes',
		abbrev: 'Cakes',
	},
	{
		name: 'Cookies and Bars',
		abbrev: 'Cookies',
	},
	{
		name: 'Icings, Fillings, Frostings, and Sweet Sauces',
		abbrev: 'Icing',
	},
	{
		name: 'Desserts',
		abbrev: 'Desserts',
	},
	{
		name: 'Ice Cream and Frozen Desserts',
		abbrev: 'Ice Cream',
	},
	{
		name: 'Candies and Confections',
		abbrev: 'Candies',
	},

	{
		name: 'Jams, Jellies, and Preserves',
		abbrev: 'Jams',
	},
	{
		name: 'Pickles',
		abbrev: 'Pickles',
	},
	{
		name: 'Salting, Drying, and Fermenting',
		abbrev: 'Preserves',
	},
	{
		name: 'Know Your Ingredients',
		abbrev: 'Other',
	},
];

// FIXME: need a better way to do this
export const fileNames = [
	'chapter-0-beverages.jpg',
	'chapter-1-cocktails.jpg',
	'chapter-2-appetizers.jpg',
	'chapter-3-soups.jpg',
	'chapter-4-salads.jpg',
	'chapter-5-sandwiches.jpg',
	'chapter-6-egg-dishes.jpg',
	'chapter-7-fruits.jpg',
	'chapter-8-vegetables.jpg',
	'chapter-9-pasta.jpg',
	'chapter-10-grains.jpg',
	'chapter-11-shellfish.jpg',
	'chapter-12-fish.jpg',
	'chapter-13-poultry.jpg',
	'chapter-14-meat.jpg',
	'chapter-15-exotic-meats.jpg',
	'chapter-16-casseroles.jpg',
	'chapter-17-sauces.jpg',
	'chapter-18-breads.jpg',
	'chapter-19-batters.jpg',
	'chapter-20-pies.jpg',
	'chapter-21-cakes.jpg',
	'chapter-22-cookies.jpg',
	'chapter-23-icing.jpg',
	'chapter-24-desserts.jpg',
	'chapter-25-ice-cream.jpg',
	'chapter-26-candies.jpg',
	'chapter-27-jams.jpg',
	'chapter-28-pickles.jpg',
	'chapter-29-preserves.jpg',
	'chapter-30-misc.jpg',
];

export const TEMP_DATA = [
	{
		id: '0100302',
		title: 'KJLJHLJHKLJHJKHLKJHJKHLKJHKLJHLJKHLKJHLKHKLHLJKHLJHLJHLKJHLKJHLJH',
		chapter: 'Beverages',
		bodyText:
			'This method is for steeping in a French press or a camp coffeepot or kettle. If using a French press, prime it with hot water before brewing and wrap in a kitchen towel while it steeps to keep it warm.Place in a French press or have ready:About 2 tablespoons (⅜ ounce or 12 grams) coarse-grind coffee for every ¾ cup (6 ounces) waterBring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Pour the water over the coffee in the French press, or add the coffee to the camp coffeepot or kettle, and stir well. Cover and let steep for 5 minutes.For a French press, slowly push the plunger all the way down after the brewing time has elapsed, forcing the coffee grounds to the bottom of the pot.For camp, cowboy, or river coffee, open the kettle after the brewing time is up and add a splash of cold water to encourage the grounds to settle to the bottom. To be doubly sure that you are not serving excessive amounts of coffee grounds to yourself and your camping companions, pour the coffee through a metal strainer before doling it out.',
		servings: null,
		page: null,
		html: '<h3 class="h3rec" id="part01_sub003_02">STEEPED COFFEE</h3> <p class="noindent">This method is for steeping in a French press or a camp coffeepot or kettle. If using a French press, prime it with hot water before brewing and wrap in a kitchen towel while it steeps to keep it warm.</p><p class="noindent">Place in a French press or have ready:</p><ul class="ingredients-list">\r\n<li class="r-item">About 2 tablespoons (⅜ ounce or 12 grams) coarse-grind coffee for every ¾ cup (6 ounces) water</li>\r\n</ul><p class="noindent">Bring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Pour the water over the coffee in the French press, or add the coffee to the camp coffeepot or kettle, and stir well. Cover and let steep for 5 minutes.</p><p class="noindent"><b><i>For a French press,</i></b> slowly push the plunger all the way down after the brewing time has elapsed, forcing the coffee grounds to the bottom of the pot.</p><p class="noindent"><b><i>For camp, cowboy, or river coffee,</i></b> open the kettle after the brewing time is up and add a splash of cold water to encourage the grounds to settle to the bottom. To be doubly sure that you are not serving excessive amounts of coffee grounds to yourself and your camping companions, pour the coffee through a metal strainer before doling it out.</p>',
	},
	{
		id: '2301013',
		title: 'COWBOY COOKIES',
		chapter: 'Cookies and Bars',
		bodyText:
			'We like to improvise with this recipe depending on the ingredients we have on hand. Crushed pretzels, crisp cereal, dried cranberries, white chocolate or peanut butter chips, and bourbon-soaked raisins are all good substitutions for the chocolate, pecans, and/or coconut.Prepare Oatmeal Raisin Cookies, omitting the nutmeg, substituting for the raisins 1 cup semisweet chocolate chips, decreasing the oats to 1 ½ cups (150g), and adding 1 cup pecans, toasted and chopped, and 1 cup shredded or flaked sweetened coconut.',
		servings: 'About forty 3-inch cookies',
		page: '771',
		html: '<h3 class="h3rec" id="part23_sub010_13">COWBOY COOKIES</h3><p class="r-serve">About forty 3-inch cookies</p> <p class="r-noind">We like to improvise with this recipe depending on the ingredients we have on hand. Crushed pretzels, crisp cereal, dried cranberries, white chocolate or peanut butter chips, and bourbon-soaked raisins are all good substitutions for the chocolate, pecans, and/or coconut.</p><p class="r-noind">Prepare <b><a href="part23.xhtml#part23_sub010_12">Oatmeal Raisin Cookies</a>,</b> omitting the nutmeg, substituting for the raisins <b>1 cup semisweet chocolate chips,</b> decreasing the oats to 1 ½ cups (150g), and adding <b>1 cup pecans, <a href="part33a.xhtml#page_1005">toasted</a> and chopped,</b> and <b>1 cup shredded or flaked sweetened coconut.</b></p>',
	},
	{
		id: '2301014',
		title: 'ANZAC BISCUITS',
		chapter: 'Cookies and Bars',
		bodyText:
			'ANZAC is an acronym for the Australian and New Zealand Army Corps, and these biscuits were sent to soldiers abroad during World War I. They can be soft or crunchy. For soft cookies, bake them for the shorter amount of time. These cookies were designed to hold up well over a long period of time, so you can store them in an airtight container for up to 1 month.Preheat the oven to 350°F. Line 2 baking sheets or cookie sheets with parchment paper.Stir together in a large bowl:2 cups (250g) all-purpose flour\r\n2 cups (200g) old-fashioned rolled oats\r\n1 cup (200g) sugar\r\n1 cup shredded sweetened coconut\r\n½ cup packed (115g) light brown sugar\r\n½ teaspoon saltMelt in a small saucepan over medium heat:1 ½ sticks (6 oz or 170g) unsalted butter\r\n2 tablespoons (40g) honey or golden syrupStir together in a small bowl until dissolved:1 teaspoon baking soda\r\n6 tablespoons (90g) boiling waterStir the baking soda mixture into the butter mixture. Add the butter mixture to the dry ingredients and stir to combine. Scoop the dough by the rounded tablespoon onto the prepared baking sheets about 2 inches apart and flatten them with a glass. Bake until golden brown and dry to the touch, 15 to 20 minutes, switching oven racks and rotating the sheets halfway through. Let cool on the sheets for 2 to 3 minutes, then transfer to a wire rack to cool completely.',
		servings: 'About 45 biscuits',
		page: '771–72',
		html: '<h3 class="h3rec" id="part23_sub010_14">ANZAC BISCUITS</h3><p class="r-serve">About 45 biscuits</p> <p class="r-noind">ANZAC is an acronym for the Australian and New Zealand Army Corps, and these biscuits were sent to soldiers abroad during World War I. They can be soft or crunchy. For soft cookies, bake them for the shorter amount of time. These cookies were designed to hold up well over a long period of time, so you can store them in an airtight container for up to 1 month.</p><p class="r-noind">Preheat the oven to 350°F. Line 2 baking sheets or cookie sheets with parchment paper.</p><p class="r-noind">Stir together in a large bowl:</p><ul class="ingredients-list">\r\n<li class="r-item">2 cups (250g) all-purpose flour</li>\r\n<li class="r-item">2 cups (200g) old-fashioned rolled oats</li>\r\n<li class="r-item">1 cup (200g) sugar</li>\r\n<li class="r-item">1 cup shredded sweetened coconut</li>\r\n<li class="r-item">½ cup packed (115g) light brown sugar</li>\r\n<li class="r-item">½ teaspoon salt</li>\r\n</ul><p class="r-noind">Melt in a small saucepan over medium heat:</p><ul class="ingredients-list">\r\n<li class="r-item">1 ½ sticks (6 oz or 170g) unsalted butter</li>\r\n<li class="r-item">2 tablespoons (40g) honey or golden syrup</li>\r\n</ul><p class="r-noind">Stir together in a small bowl until dissolved:</p><ul class="ingredients-list">\r\n<li class="r-item">1 teaspoon baking soda</li>\r\n<li class="r-item">6 tablespoons (90g) boiling water</li>\r\n</ul><p class="r-noind"><span aria-label="772" epub:type="pagebreak" id="page_772" role="doc-pagebreak" title="772"></span>Stir the baking soda mixture into the butter mixture. Add the butter mixture to the dry ingredients and stir to combine. Scoop the dough by the rounded tablespoon onto the prepared baking sheets about 2 inches apart and <a href="part23.xhtml#flatdrop">flatten them with a glass</a>. Bake until golden brown and dry to the touch, 15 to 20 minutes, switching oven racks and rotating the sheets halfway through. Let cool on the sheets for 2 to 3 minutes, then transfer to a wire rack to cool completely.</p>',
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
		id: '1800601',
		title: 'BASIC PAN GRAVY',
		chapter:
			'Savory Sauces, Salad Dressings, Marinades, and Seasoning Blends',
		bodyText:
			'A roux-based gravy suitable for poultry, beef, pork, and milder lamb and venison. If desired, you may strain the drippings first and remove excess fat, then return some of the fat to the pan to make the roux. To use a thickener other than flour, please see About Thickeners for Sauces for the correct amount to add for the amount of liquid below. This method works best for smaller cuts cooked in a skillet such as steaks, chops, or chicken parts. If the meat has been cooked in a roasting pan, see About Gravies and Pan Sauces for the easiest way to proceed.Remove the meat or poultry from the pan, place it on a platter, and keep warm. Pour off all the pan juices, leaving behind or adding:Fat from the pan drippings or butter to make 2 tablespoonsPlace the pan over medium-low heat (melt the butter, if using). Gradually whisk in:1 to 2 tablespoons all-purpose flour (the larger amount for a thicker sauce)Cook, whisking constantly, until the roux is smooth and the flour is nutty and fragrant, about 5 minutes. Gradually whisk in:The degreased pan juices plus enough stock, wine, beer, cream, milk, or water to make 1 cupSimmer gently until thickened, up to 10 minutes. Season to taste with:Salt and black pepper\r\n(Minced fresh or crumbled dried herbs, such as thyme, rosemary, or sage)\r\n(Finely grated lemon zest or lemon juice)Strain the gravy, if desired, and reheat before serving.',
		servings: 'About 1 cup',
		page: null,
		html: '<h3 class="h3rec" id="part18_sub006_01">BASIC PAN GRAVY</h3><p class="r-serve">About 1 cup</p> <p class="r-noind">A roux-based gravy suitable for poultry, beef, pork, and milder lamb and venison. If desired, you may strain the drippings first and remove excess fat, then return some of the fat to the pan to make the roux. To use a thickener other than flour, please see <a href="part18.xhtml#part18_sub004">About Thickeners for Sauces</a> for the correct amount to add for the amount of liquid below. This method works best for smaller cuts cooked in a skillet such as steaks, chops, or chicken parts. If the meat has been cooked in a roasting pan, see <a href="part18.xhtml#part18_sub006">About Gravies and Pan Sauces</a> for the easiest way to proceed.</p><p class="r-noind">Remove the meat or poultry from the pan, place it on a platter, and keep warm. Pour off all the pan juices, leaving behind or adding:</p><ul class="ingredients-list">\r\n<li class="r-item">Fat from the pan drippings or butter to make 2 tablespoons</li>\r\n</ul><p class="r-noind">Place the pan over medium-low heat (melt the butter, if using). Gradually whisk in:</p><ul class="ingredients-list">\r\n<li class="r-item">1 to 2 tablespoons all-purpose flour (the larger amount for a thicker sauce)</li>\r\n</ul><p class="r-noind">Cook, whisking constantly, until the roux is smooth and the flour is nutty and fragrant, about 5 minutes. Gradually whisk in:</p><ul class="ingredients-list">\r\n<li class="r-item">The degreased pan juices plus enough stock, wine, beer, cream, milk, or water to make 1 cup</li>\r\n</ul><p class="r-noind">Simmer gently until thickened, up to 10 minutes. Season to taste with:</p><ul class="ingredients-list">\r\n<li class="r-item">Salt and black pepper</li>\r\n<li class="r-item">(Minced fresh or crumbled dried herbs, such as thyme, rosemary, or sage)</li>\r\n<li class="r-item">(Finely grated lemon zest or lemon juice)</li>\r\n</ul><p class="r-noind">Strain the gravy, if desired, and reheat before serving.</p>',
	},
];

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

export type Recipe = {
	id: string;
	title: string;
	category: string;
	bodyText: string;
	servings: string | null;
	page: string | null;
	html: string;
};

export const categories = [
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
		abbrev: 'Pancakes',
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
		abbrev: 'Frostings',
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
		abbrev: 'Preserved',
	},
	{
		name: 'Know Your Ingredients',
		abbrev: 'Misc.',
	},
];

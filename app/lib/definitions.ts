/* 'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material';

// Return boolean representing maxWidth < 900px
export const Viewport = () => {
	const [viewport, setViewport] = useState<boolean>(false);
	const { breakpoints } = useTheme();

	useEffect(() => {
		// Create media query list that matches mobile viewport sizes
		const mql = window.matchMedia(
			`(max-width: ${breakpoints.values['md']}px)`
		);

		setViewport(mql.matches);
	}, [breakpoints, setViewport]);

	return viewport;
}; */

export type Recipe = {
	id: string;
	title: string;
	chapter: string;
	body_text: string;
	servings: string | null;
	page: string | null;
	html: string;
};

export const slugifyChapter = (chapter: string) => {
	return chapters
		.find(obj => obj.name === chapter)
		?.abbrev.replace(/\s/g, '-')
		.toLowerCase();
};

export const undoSlugifyChapter = (slug: string) => {
	return chapters.find(
		obj => obj.abbrev.toLowerCase().split(' ').join('-') === slug
	)?.name;
};

export const chapters = [
	{
		abbrev: 'Beverages',
		name: 'Beverages',
	},
	{
		abbrev: 'Cocktails',
		name: 'Cocktails, Wine, and Beer',
	},
	{
		abbrev: 'Appetizers',
		name: 'Appetizers and Hors d’Oeuvre',
	},
	{
		abbrev: 'Soups',
		name: 'Stocks and Soups',
	},
	{
		abbrev: 'Salads',
		name: 'Salads',
	},
	{
		abbrev: 'Sandwiches',
		name: 'Sandwiches, Tacos, and Burritos',
	},
	{
		abbrev: 'Egg Dishes',
		name: 'Egg Dishes',
	},
	{
		abbrev: 'Fruits',
		name: 'Fruits',
	},
	{
		abbrev: 'Vegetables',
		name: 'Vegetables',
	},
	{
		abbrev: 'Pasta',
		name: 'Pasta, Noodles, and Dumplings',
	},
	{
		abbrev: 'Grains',
		name: 'Grains',
	},
	{
		abbrev: 'Shellfish',
		name: 'Shellfish',
	},
	{
		abbrev: 'Fish',
		name: 'Fish',
	},
	{
		abbrev: 'Poultry',
		name: 'Poultry and Wildfowl',
	},
	{
		abbrev: 'Meat',
		name: 'Meat',
	},
	{
		abbrev: 'Exotic Meats',
		name: 'Game and Exotic Meats',
	},
	{
		abbrev: 'Casseroles',
		name: 'Stuffings and Casseroles',
	},
	{
		abbrev: 'Sauces',
		name: 'Savory Sauces, Salad Dressings, Marinades, and Seasoning Blends',
	},
	{
		abbrev: 'Breads',
		name: 'Breads and Coffee Cakes',
	},
	{
		abbrev: 'Batters',
		name: 'Pancakes, Waffles, Doughnuts, and Fritters',
	},
	{
		abbrev: 'Pies',
		name: 'Pies and Pastries',
	},
	{
		abbrev: 'Cakes',
		name: 'Cakes and Cupcakes',
	},
	{
		abbrev: 'Cookies',
		name: 'Cookies and Bars',
	},
	{
		abbrev: 'Icing',
		name: 'Icings, Fillings, Frostings, and Sweet Sauces',
	},
	{
		abbrev: 'Desserts',
		name: 'Desserts',
	},
	{
		abbrev: 'Ice Cream',
		name: 'Ice Cream and Frozen Desserts',
	},
	{
		abbrev: 'Candies',
		name: 'Candies and Confections',
	},

	{
		abbrev: 'Jams',
		name: 'Jams, Jellies, and Preserves',
	},
	{
		abbrev: 'Pickles',
		name: 'Pickles',
	},
	{
		abbrev: 'Preserves',
		name: 'Salting, Drying, and Fermenting',
	},
	{
		abbrev: 'Other',
		name: 'Know Your Ingredients',
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

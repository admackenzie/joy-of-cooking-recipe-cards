import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	BakeryDining,
	DinnerDining,
	EggAlt,
	KebabDining,
	LocalBar,
	LunchDining,
	Restaurant,
	SoupKitchen,
	TakeoutDining,
	Tapas,
} from '@mui/icons-material';

import {
	faAppleWhole,
	faBacon,
	faBowlFood,
	faBreadSlice,
	faCakeCandles,
	faCandyCane,
	faCarrot,
	faCheese,
	faCookieBite,
	faDrumstickBite,
	faFishFins,
	faIceCream,
	faJar,
	faJarWheat,
	faLeaf,
	faMugHot,
	faPlateWheat,
	faShrimp,
	faSpoon,
	faStroopwafel,
	faWheatAwn,
} from '@fortawesome/free-solid-svg-icons';

export type Recipe = {
	id: string;
	title: string;
	chapter: string;
	body_text: string;
	servings: string | null;
	page: string | null;
	html: string;
};

export const undoSlug = (slug: string) => {
	return chapters.find(chapter => chapter.slug === slug)?.name;
};

export const chapters = [
	{
		abbrev: 'Beverages',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faMugHot} />,
		name: 'Beverages',
		slug: 'beverages',
	},
	{
		abbrev: 'Cocktails',
		icon: <LocalBar />,
		name: 'Cocktails, Wine, and Beer',
		slug: 'cocktails',
	},
	{
		abbrev: 'Appetizers',
		icon: <Tapas />,
		name: 'Appetizers and Hors d’Oeuvre',
		slug: 'appetizers',
	},
	{
		abbrev: 'Soups',
		icon: <SoupKitchen />,
		name: 'Stocks and Soups',
		slug: 'soups',
	},
	{
		abbrev: 'Salads',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faLeaf} />,
		name: 'Salads',
		slug: 'salads',
	},
	{
		abbrev: 'Sandwiches',
		icon: <LunchDining />,
		name: 'Sandwiches, Tacos, and Burritos',
		slug: 'sandwiches',
	},
	{
		abbrev: 'Egg Dishes',
		icon: <EggAlt />,
		name: 'Egg Dishes',
		slug: 'egg-dishes',
	},
	{
		abbrev: 'Fruits',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faAppleWhole} />,
		name: 'Fruits',
		slug: 'fruits',
	},
	{
		abbrev: 'Vegetables',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faCarrot} />,
		name: 'Vegetables',
		slug: 'vegetables',
	},
	{
		abbrev: 'Pasta',
		icon: <DinnerDining />,
		name: 'Pasta, Noodles, and Dumplings',
		slug: 'pasta',
	},
	{
		abbrev: 'Grains',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faWheatAwn} />,
		name: 'Grains',
		slug: 'grains',
	},
	{
		abbrev: 'Shellfish',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faShrimp} />,
		name: 'Shellfish',
		slug: 'shellfish',
	},
	{
		abbrev: 'Fish',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faFishFins} />,
		name: 'Fish',
		slug: 'fish',
	},
	{
		abbrev: 'Poultry',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faDrumstickBite} />,
		name: 'Poultry and Wildfowl',
		slug: 'poultry',
	},
	{
		abbrev: 'Meat',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faBacon} />,
		name: 'Meat',
		slug: 'meat',
	},
	{
		abbrev: 'Exotic Meats',
		icon: <KebabDining />,
		name: 'Game and Exotic Meats',
		slug: 'exotic-meats',
	},
	{
		abbrev: 'Casseroles',
		icon: <TakeoutDining />,
		name: 'Stuffings and Casseroles',
		slug: 'casseroles',
	},
	{
		abbrev: 'Sauces',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faSpoon} />,
		name: 'Savory Sauces, Salad Dressings, Marinades, and Seasoning Blends',
		slug: 'sauces',
	},
	{
		abbrev: 'Breads',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faBreadSlice} />,
		name: 'Breads and Coffee Cakes',
		slug: 'breads',
	},
	{
		abbrev: 'Batters',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faStroopwafel} />,
		name: 'Pancakes, Waffles, Doughnuts, and Fritters',
		slug: 'batters',
	},
	{
		abbrev: 'Pastries',
		icon: <BakeryDining sx={{ fontSize: '2rem' }} />,
		name: 'Pies and Pastries',
		slug: 'pastries',
	},
	{
		abbrev: 'Cakes',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faCakeCandles} />,
		name: 'Cakes and Cupcakes',
		slug: 'cakes',
	},
	{
		abbrev: 'Cookies',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faCookieBite} />,
		name: 'Cookies and Bars',
		slug: 'cookies',
	},
	{
		abbrev: 'Icing',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faBowlFood} />,
		name: 'Icings, Fillings, Frostings, and Sweet Sauces',
		slug: 'icing',
	},
	{
		abbrev: 'Desserts',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faCheese} />,
		name: 'Desserts',
		slug: 'desserts',
	},
	{
		abbrev: 'Ice Cream',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faIceCream} />,
		name: 'Ice Cream and Frozen Desserts',
		slug: 'ice-cream',
	},
	{
		abbrev: 'Candies',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faCandyCane} />,
		name: 'Candies and Confections',
		slug: 'candies',
	},

	{
		abbrev: 'Jams',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faJar} />,
		name: 'Jams, Jellies, and Preserves',
		slug: 'jams',
	},
	{
		abbrev: 'Pickles',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faJarWheat} />,
		name: 'Pickles',
		slug: 'pickles',
	},
	{
		abbrev: 'Preserves',
		icon: <FontAwesomeIcon fontSize={'1.5rem'} icon={faPlateWheat} />,
		name: 'Salting, Drying, and Fermenting',
		slug: 'preserves',
	},
	{
		abbrev: 'Other',
		icon: <Restaurant />,
		name: 'Know Your Ingredients',
		slug: 'other',
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

import { CardDeck, ChapterList, Layout } from '@/app/ui/index';

import BookmarkList from '../ui/BookmarkList';

import { findBySearch } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

import * as RECIPES from '@/app/lib/RECIPES.json';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default async function Main({ ...props }: Props) {
	// FIXME: try/catch here
	const { search: query } = props.searchParams || '';
	let recipes: Recipe[] = [];
	// const asyncLocalStorage = new AsyncLocalStorage();

	if (query) {
		recipes = await findBySearch(query);
	}

	return <Layout recipes={recipes} />;
}

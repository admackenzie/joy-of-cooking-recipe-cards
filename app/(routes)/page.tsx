import { redirect } from 'next/navigation';

import { Layout } from '@/app/ui/index';

import { findBySearch } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	searchParams?: {
		search?: string;
	};
}

/* TODO: by Friday, March 15
 - Bookmarks tab
 - Improve bookmarks appearance
 - Loading component
 - Pagination?
*/

export default async function Main({ searchParams }: Props) {
	// FIXME: try/catch here
	const { search: query } = searchParams || '';

	let data: Recipe[] = [];

	// ---- TEST RECIPE DATA ----
	// data = temp as unknown as Recipe[];

	if (query) {
		data = (await findBySearch(query)) as Recipe[];

		// Redirect to individual card page if there's only one search result
		if (data.length === 1) {
			const id = data.at(0)?.id;

			redirect(`/recipe/${id}`);
		}
	}

	return <Layout data={data} />;
}

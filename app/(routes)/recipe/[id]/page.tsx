import { Layout } from '@/app/ui/index';

import { findByID } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params: { id } }: Props) {
	// FIXME: try/catch here

	let data: Recipe[] = [];

	if (id) {
		const result = (await findByID(id)) as Recipe;
		data = [result];
	}

	return <Layout data={data} />;
}

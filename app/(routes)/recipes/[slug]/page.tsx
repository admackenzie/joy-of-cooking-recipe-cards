import { Layout } from '@/app/ui/index';

import { findByChapter } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	params: { slug: string };
}

export default async function Main({ params }: Props) {
	// FIXME: try/catch here

	const { slug: chapter } = params;

	let data: Recipe[] = [];

	if (chapter) {
		data = await findByChapter(chapter);
	}

	return <Layout data={data} />;
}

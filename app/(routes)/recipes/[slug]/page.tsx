import { Layout } from '@/app/ui/index';

import { findByChapter } from '@/app/lib/CRUD';

import { Recipe, undoSlugifyChapter } from '@/app/lib/definitions';

interface Props {
	params: { slug: string };
}

export default async function Main({ params: { slug } }: Props) {
	// FIXME: try/catch here

	const chapter = undoSlugifyChapter(slug);

	let data: Recipe[] = [];

	if (chapter) {
		data = await findByChapter(chapter);
	}

	return <Layout data={data} />;
}

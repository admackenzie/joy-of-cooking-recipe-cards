import { Layout } from '@/app/ui/index';

import { findByChapter } from '@/app/lib/CRUD';

import {
	Recipe,
	slugifyChapter,
	undoSlugifyChapter,
} from '@/app/lib/definitions';

import { chapters } from '@/app/lib/definitions';

interface Props {
	params: { slug: string };
}

export default async function Page({ params: { slug } }: Props) {
	// FIXME: try/catch here
	const chapter = undoSlugifyChapter(slug);

	let data: Recipe[] = [];

	if (chapter) {
		data = await findByChapter(chapter);
	}

	return <Layout data={data} />;
}

// Pre-render pages with /recipes/[slug] routes at build time
/* export const generateStaticParams = async () => {
	// Batch generate slugs
	const slugs = chapters.map(chapter =>
		chapter.abbrev.toLowerCase().split(' ').join('-')
	);

	return slugs.map(str => ({
		slug: str,
	}));
}; */

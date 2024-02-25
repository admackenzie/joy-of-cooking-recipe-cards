import prisma from '@/prisma/instantiate';

// FIXME: add search bodyText functionality
export async function findBySearch(query: any) {
	// Replace diacritics in query and use unaccent extension to make an accent insensitive database
	const sql = `%${query
		.normalize('NFD')
		.replace(/\p{Diacritic}/giu, '')
		.toUpperCase()}%`;

	// FIXME: make this also query body_text, then order by title => body_text
	const data =
		await prisma.$queryRaw`SELECT * FROM recipes WHERE unaccent(title) LIKE ${sql}LIMIT 5`;

	return data;
}

export async function findByID(query: any) {
	const data = await prisma.recipes.findUnique({
		where: {
			id: query,
		},
	});
	return data;
}

export async function deleteByID(query: any) {
	const data = await prisma.recipes.delete({
		where: {
			id: query,
		},
	});
	return data;
}

export async function findByChapter(query: string) {
	const data = await prisma.recipes.findMany({
		where: {
			chapter: {
				contains: query,
				// Search without case sensitivity
				mode: 'insensitive',
			},
		},
		// FIXME: (testing) Return max of five records
		take: 5,
	});
	return data;
}

export async function addToDB(data: any[]) {
	for (let i = 0; i < data.length; i++) {
		await prisma.recipes.create({
			data: {
				id: data[i].id,
				title: data[i].title,
				chapter: data[i].chapter,
				body_text: data[i].bodyText,
				servings: data[i].servings,
				page: data[i].page,
				html: data[i].html,
			},
		});
	}
}

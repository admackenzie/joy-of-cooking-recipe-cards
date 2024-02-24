import prisma from '@/prisma/instantiate';

// FIXME: add search bodyText functionality
export async function findBySearch(query: any) {
	const data = await prisma.recipes.findMany({
		where: {
			title: {
				contains: query,
				// Searches without case sensitivity
				mode: 'insensitive',
			},
		},
	});

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
				// Searches without case sensitivity
				mode: 'insensitive',
			},
		},
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
				bodyText: data[i].bodyText,
				servings: data[i].servings,
				page: data[i].page,
				html: data[i].html,
			},
		});
	}
}

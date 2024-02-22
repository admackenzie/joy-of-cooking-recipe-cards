import prisma from '@/prisma/instantiate';

export async function findBySearch(query: any) {
	const data = await prisma.recipes.findMany({
		where: {
			// id: 'part02_sub002_06',
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
	// const data = await prisma.recipes.findMany({
	// 	where: {
	// 		// id: 'part02_sub002_06',
	// 		chapter: {
	// 			contains: query,
	// 			// Searches without case sensitivity
	// 			mode: 'insensitive',
	// 		},
	// 	},
	// });
	// return data;
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

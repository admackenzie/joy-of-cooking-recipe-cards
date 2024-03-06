import prisma from '@/prisma/instantiate';

import { Recipe } from '@/app/lib/definitions';

/**
 * Find accent-insensitive, case-insensitive database records matching the user query
 * @param query - User-submitted string from Search
 * @returns - Array of Recipe objects, ordered by title matches first, then body_text matches
 */
export async function findBySearch(query: string) {
	// Replace diacritics in query
	const str = `%${query
		.normalize('NFD')
		.replace(/\p{Diacritic}/giu, '')
		.toLowerCase()}%`;

	// Use unaccent database extension to return accent-insensitive records
	const titles: Recipe[] =
		await prisma.$queryRaw`SELECT * FROM recipes WHERE LOWER(unaccent(title)) LIKE ${str}`;

	const bodyText: Recipe[] =
		await prisma.$queryRaw`SELECT * FROM recipes WHERE LOWER(unaccent(body_text)) LIKE ${str} AND LOWER(unaccent(title)) NOT LIKE ${str}`;

	return [...titles, ...bodyText];
}

export async function findByID(query: string) {
	const data = await prisma.recipes.findUnique({
		where: {
			id: query,
		},
	});
	return data;
}

export async function deleteByID(query: string) {
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

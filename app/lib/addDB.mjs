import RECIPE_DATA from './RECIPE_DATA.mjs';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(data) {
	for (let i = 0; i < data.length; i++) {
		await prisma.recipes.create({
			data: {
				id: data[i].id,
				title: data[i].title,
				section: data[i].section,
				body: data[i].body,
				servings: data[i].servings,
				page: data[i].page,
			},
		});
	}
}

// main(RECIPE_DATA);

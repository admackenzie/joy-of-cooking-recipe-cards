'use client';

import { Card, CardContent } from '@mui/material';

import { RecipeBody, RecipeFooter, RecipeHeader } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

import theme from '@/theme';

interface Props {
	preview: boolean;
	recipe: Recipe;
}

export default function RecipeCard({ preview, recipe }: Props) {
	const borderGrey = theme.palette.grey['300'];

	if (!recipe) {
		// TODO: Error
		return <h1>ERROR</h1>;
	} else {
		const { chapter, html, page, servings, title } = recipe;

		return (
			<Card
				// Clip cards to same height in 'preview' styling
				elevation={3}
				sx={{
					borderTop: `2px solid ${borderGrey}`,
					height: `${preview ? '33vh' : '100%'}`,
				}}
			>
				<CardContent>
					{/* ---- Header ---- */}
					<RecipeHeader
						preview={preview}
						servings={servings}
						title={title}
					/>
					{/* ---- Body ---- */}
					<RecipeBody html={html} />

					{/* ---- Footer ---- */}
					{/* Hide footer in 'preview' styling */}
					{!preview && <RecipeFooter chapter={chapter} page={page} />}
				</CardContent>
			</Card>
		);
	}
}

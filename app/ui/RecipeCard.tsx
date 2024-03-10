'use client';

import { useParams } from 'next/navigation';

import { Box, Card, CardContent } from '@mui/material';

import { RecipeBody, RecipeFooter, RecipeHeader } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

import { grey } from '@mui/material/colors';

interface Props {
	preview: boolean;
	recipe: Recipe;
}

export default function RecipeCard({ preview, recipe }: Props) {
	const params = useParams<{ id: string }>();

	if (!recipe) {
		// TODO: Error
		return <h1>ERROR</h1>;
	} else {
		const { chapter, html, page, servings, title } = recipe;

		return (
			<>
				<Card
					// Clip cards to same height in 'preview' styling
					elevation={3}
					sx={{
						borderTop: `2px solid ${grey['200']}`,
						height: `${preview ? '33vh' : '100%'}`,
						// Add spacer on /id* routes to accommodate mobile browser UI
						marginBottom: `${params.id && '4rem'}`,
					}}
				>
					<CardContent>
						<RecipeHeader
							preview={preview}
							servings={servings}
							title={title}
						/>

						<RecipeBody html={html} />

						{/* Hide footer in 'preview' styling */}
						{!preview && (
							<RecipeFooter chapter={chapter} page={page} />
						)}
					</CardContent>
				</Card>

				{/* <Box
					sx={{
						height: '3rem',
						width: '100%',
						// backgroundColor: 'red',
						// bottom: 0,
					}}
				/> */}
			</>
		);
	}
}

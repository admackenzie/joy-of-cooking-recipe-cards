'use client';

import { useState } from 'react';

import parse from 'node-html-parser';

import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	Collapse,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Close, Favorite } from '@mui/icons-material';

import { RecipeBody } from '@/app/ui/index';
import { Recipe } from '@/app/lib/definitions';

import { categories } from '@/app/lib/definitions';

interface Props {
	data: Recipe;
}

export default function RecipeCard({ ...props }: Props) {
	const [expanded, setExpanded] = useState(false);
	const [hidden, setHidden] = useState(false);
	const collapsedSize = 100;

	const handleExpand = () => setExpanded(!expanded);
	const handleHidden = () => setHidden(!hidden);

	if (props.data) {
		const { id, title, category, servings, page, html } = props.data;

		// Replace category with abbreviated name
		const abbrev =
			categories.find(({ name }) => name === category)?.abbrev ??
			category;

		// Isolate the 'body' part of the HTML string
		const bodyDOM = parse(html.split('\u2003').at(1)!);

		return (
			<Card className={`${hidden && 'hidden'} relative`} raised>
				<CardActionArea onClick={handleExpand}>
					<CardHeader subheader={servings} title={title} />

					{/* Body */}
					<Collapse in={expanded} collapsedSize={collapsedSize}>
						<CardContent>
							<Stack spacing={3}>
								<RecipeBody
									id={id}
									nodeList={bodyDOM.childNodes}
								/>

								{page && (
									<Box className={'flex justify-end'}>
										{/* TODO: add Typography element */}
										{`p. ${page}`}
									</Box>
								)}

								<Box>{`
								Category:
								${category} (See more)`}</Box>
							</Stack>
						</CardContent>
					</Collapse>

					{/* Section footer */}
					<CardContent className={'font-semibold flex justify-end'}>
						{/* TODO: add Typography element */}
						{abbrev}
					</CardContent>
				</CardActionArea>

				{/* TODO: add animation to make card disappearing look less jarring */}
				{/* Close card button */}
				<IconButton
					className={
						'absolute cursor-pointer items-center right-1 top-2'
					}
					onClick={handleHidden}
				>
					<Close />
				</IconButton>

				{/* Favorite button */}
				<IconButton
					className={'absolute bottom-1 left-1'}
					onClick={() => console.log('Favorite el clicked')}
				>
					<Favorite />
				</IconButton>
			</Card>
		);
	}
}

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

interface Props {
	data: Recipe;
}

interface Recipe {
	id: string;
	title: string;
	section: string;
	bodyText: string;
	servings: string | null;
	page: string | null;
	html: string;
}

export default function RecipeCard({ data }: Props) {
	const [expanded, setExpanded] = useState(false);
	const [hidden, setHidden] = useState(false);
	const collapsedSize = 100;

	const handleExpand = () => setExpanded(!expanded);
	const handleHidden = () => setHidden(!hidden);

	if (data) {
		let { id, title, section, servings, page, html } = data;

		// Shorten select section names
		const abbrev: { [key: string]: string } = {
			'Icings, Fillings, Frostings, and Sweet Sauces':
				'Icings, Fillings, etc.',
			'Pancakes, Waffles, Doughnuts, and Fritters':
				'Pancakes, Waffles, etc.',
			'Savory Sauces, Salad Dressings, Marinades, and Seasoning Blends':
				'Savory Sauces, Salad Dressings, etc.',
		};
		section = abbrev[section] ?? section;

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
							</Stack>
						</CardContent>
					</Collapse>

					{/* Section footer */}
					<CardContent
						className={'font-semibold flex justify-center'}
					>
						{/* TODO: add Typography element */}
						{section}
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

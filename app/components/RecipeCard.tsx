'use client';

import { useState } from 'react';

import parse from 'node-html-parser';

import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	Collapse,
	IconButton,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Favorite } from '@mui/icons-material';

import { RecipeBody } from '@/app/components/index';

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
	const collapsedSize = 50;

	const handleExpand = () => setExpanded(!expanded);

	if (data) {
		const { id, title, section, servings, page, html } = data;

		// Isolate the 'body' part of the HTML string
		const bodyDOM = parse(html.split('\u2003').at(1)!);

		return (
			<Card>
				{/* Enables clicking the whole card to expand */}
				<CardActionArea onClick={handleExpand}>
					<CardHeader subheader={servings} title={title}></CardHeader>

					<Collapse in={expanded} collapsedSize={collapsedSize}>
						<CardContent>
							<RecipeBody id={id} nodeList={bodyDOM.childNodes} />
						</CardContent>
					</Collapse>
				</CardActionArea>

				{/* Footer with favorite button */}
				<CardActions>
					<IconButton
						onClick={() => console.log('Favorite el clicked')}
					>
						<Favorite />
					</IconButton>

					<p>{page}</p>
					<p>{section}</p>
				</CardActions>
			</Card>
		);
	}
}

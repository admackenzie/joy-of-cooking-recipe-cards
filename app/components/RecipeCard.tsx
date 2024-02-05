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
import { Favorite } from '@mui/icons-material';

import { CardBody } from '@/app/components/index';

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
	const collapsedSize = 40;

	const handleExpand = () => setExpanded(!expanded);

	if (data) {
		const { id, title, section, servings, page, html } = data;

		const bodyDOM = parse(html.split('\u00a0').at(1)!);

		return (
			<Card>
				{/* Enables clicking the whole card to expand */}
				<CardActionArea onClick={handleExpand}>
					<CardHeader subheader={servings} title={title}></CardHeader>

					<Collapse in={expanded} collapsedSize={collapsedSize}>
						<CardContent>
							{/* -------- CUSTOM COMPONENT - rename?? ------------- */}
							<CardBody id={id} nodeList={bodyDOM.childNodes} />
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

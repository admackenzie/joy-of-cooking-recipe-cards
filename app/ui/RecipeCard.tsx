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
	Fade,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Close, Favorite } from '@mui/icons-material';

import { RecipeBody } from '@/app/ui/index';
import { Recipe } from '@/app/lib/definitions';

import { chapters } from '@/app/lib/definitions';

interface Props {
	data: Recipe;
}

export default function RecipeCard({ ...props }: Props) {
	const [expanded, setExpanded] = useState(false);
	const [faded, setFaded] = useState(false);
	const [hidden, setHidden] = useState(false);
	const collapsedSize = 70;
	const animationTimeout = 250;

	const handleExpand = () => setExpanded(!expanded);

	const handleClose = () => {
		setFaded(true);

		setTimeout(() => {
			setHidden(true);
		}, animationTimeout);
	};

	if (props.data) {
		const { id, title, chapter, servings, page, html } = props.data;

		// Replace chapter title with abbreviated name
		const abbrev =
			chapters.find(({ name }) => name === chapter)?.abbrev ?? chapter;

		// Isolate the 'body' part of the HTML string
		const bodyDOM = parse(html.split('\u2003').at(1)!);

		return (
			<Fade appear in={!faded} timeout={animationTimeout}>
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
								chapter:
								${chapter} (See more)`}</Box>
								</Stack>
							</CardContent>
						</Collapse>

						{/* Section footer */}
						<CardContent
							className={'font-semibold flex justify-end'}
						>
							{/* TODO: add Typography element */}
							{abbrev}
						</CardContent>
					</CardActionArea>

					{/* Close card button */}
					<IconButton
						className={
							'absolute cursor-pointer items-center right-1 top-2'
						}
						onClick={handleClose}
					>
						<Close />
					</IconButton>

					{/* Favorite button */}
					<IconButton
						className={'absolute bottom-1 left-1'}
						// TODO: Favorite functionality
						onClick={() => console.log('Favorite el clicked')}
					>
						<Favorite />
					</IconButton>
				</Card>
			</Fade>
		);
	}
}

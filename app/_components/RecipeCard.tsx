'use client';

import { useState } from 'react';

// FIXME: remove me
import LinkEmbed from './LinkEmbed';

import { RecipeContent } from './index';

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

// interface Link {
// 	name: string;
// 	href: string;
// 	idx: {
// 		lineIdx: string | number;
// 		charIdx: string | number;
// 		listIdx?: string | number;
// 	};
// }

// interface Recipe {
// 	id: string;
// 	title: string;
// 	section: string;
// 	page?: string | number;
// 	servings?: string;
// 	body: {
// 		text: Array<string | { list: string[] }>;
// 		links?: Link[];
// 	};
// }

export default function RecipeCard({ ...props }) {
	const [expanded, setExpanded] = useState(false);
	const collapsedSize = 40;

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// if body.text.links
	// format as list

	if (props.data) {
		// if (props.data.body.links) {
		// 	buildLinks(props.data.body);
		// }

		const {
			id,
			title,
			section,
			page,
			servings,
			body: { text, links },
		} = props.data;

		return (
			<Card>
				{/* Enables clicking the whole card to expand */}
				<CardActionArea onClick={handleExpandClick}>
					<CardHeader subheader={servings} title={title}></CardHeader>

					<Collapse in={expanded} collapsedSize={collapsedSize}>
						<CardContent>
							{text.map((line, i: number) => {
								// TODO: PUT NEW RecipeContent COMPONENT HERE, SEND 'LINE' AS PROPS. REMOVE BELOW UNTIL </CARDCONTENT>

								// Display ingredient lists
								if (line.list) {
									const list = line.list.map((li: string) => {
										return <li key={li}>{li}</li>;
									});

									return <ul key={line + i}>{list}</ul>;
								}
								// Display remaining text
								else {
									if (line.embed) {
										return (
											<LinkEmbed
												link={line.embed}
												key={line + i}
											/>
										);
									} else {
										return <p key={line + i}>{line}</p>;
									}
								}
							})}
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

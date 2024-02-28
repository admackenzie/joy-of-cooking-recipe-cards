'use client';

import { useState } from 'react';

import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { ExpandMore } from '@mui/icons-material';

import { findByChapter } from '@/app/lib/CRUD';

import { chapters, fileNames } from '@/app/lib/definitions';
export default function Chapters() {
	const [expanded, setExpanded] = useState(false);

	const handleExpand = () => setExpanded(!expanded);

	return (
		<Card>
			<CardActionArea onClick={handleExpand}>
				{/* TODO: add Typography */}
				{'Browse by chapter'}

				<ExpandMore className={`${expanded && 'rotate-180'}`} />
			</CardActionArea>

			<Collapse in={expanded} collapsedSize={0}>
				<Grid container spacing={{ xs: 2, md: 3 }}>
					{Array(fileNames.length)
						.fill('')
						.map((_el, i) => {
							return (
								// 2 -> 3 columns at > 600 px, 3 -> 4 at > 900 px
								<Grid key={i} xs={6} sm={4} md={3} lg={2}>
									<Card raised>
										<CardActionArea
											onClick={() => {
												console.log(chapters[i]?.name);
												// TODO: query database for chapter
												// findByChapter(chapters[i].name)
											}}
										>
											<CardContent>
												<CardMedia
													alt=""
													className={
														'h-20 object-fill'
													}
													component={'img'}
													image={`/images/${fileNames[i]}`}
												></CardMedia>
											</CardContent>
											<CardHeader
												title={chapters[i]?.abbrev}
											/>
										</CardActionArea>
									</Card>
								</Grid>
							);
						})}
				</Grid>
			</Collapse>
		</Card>
	);
}

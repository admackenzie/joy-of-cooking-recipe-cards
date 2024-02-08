'use client';

import { Card, CardActionArea, CardMedia, CardHeader } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { sections } from '@/app/lib/definitions';

import NestedGrid from './NestedGrid';

interface Props {
	fileNames: string[];
}

export default function Category({ ...props }: Props) {
	const idx = Array.from(Array(Math.ceil(sections.length)).keys());

	const even = idx.filter(n => n % 2 === 0);

	return (
		<Grid
			container
			// Row spacing
			spacing={2}
		>
			{even.map(row => {
				return (
					<Grid key={row}>
						<Grid
							container
							// Column spacing
							spacing={2}
						>
							{(row < sections.length - 1
								? [row, row + 1]
								: [row]
							).map(col => {
								return (
									<Grid key={col} xs={6 / 12}>
										<Card raised>
											<CardActionArea
												onClick={() =>
													console.log(
														sections[col].name
													)
												}
											>
												<CardMedia
													alt=""
													className={'h-20 w-60'}
													component={'img'}
													image={`/images/${props.fileNames[col]}`}
												></CardMedia>

												<CardHeader
													title={sections[col].abbrev}
												/>
											</CardActionArea>
										</Card>
									</Grid>
								);
							})}
						</Grid>
					</Grid>
				);
			})}
		</Grid>
	);
}

'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Box, Divider, List, ListItem, Typography } from '@mui/material';

import { chapters } from '@/app/lib/definitions';

import { grey } from '@mui/material/colors';

export default function ChapterList() {
	const params = useParams<{ slug: string }>();

	return (
		// FIXME: height on Sidebar component needs to be something other than 100vh so the columns are scrollable but don't need a huge marginBottom to see all of the content
		<List sx={{ marginBottom: '6rem', paddingTop: 0 }}>
			<Box
				sx={{
					paddingLeft: '1rem',
					paddingTop: '1.5rem',
					width: '100%',
					// Align left border with the top and bottom chapter titles
					'&>*:first-of-type li': { paddingTop: 0 },
					'&>*:last-of-type li': { paddingBottom: 0 },
				}}
			>
				{chapters.map((chapter, i) => {
					return (
						<Box
							key={i}
							sx={[
								{
									// Highlight selected chapter
									backgroundColor: `${
										params.slug === chapter.slug &&
										'rgb(204, 128, 42, 0.05)'
									}`,
									// Accent selected chapter
									borderLeft: `solid ${
										params.slug === chapter.slug
											? '2px rgb(204, 128, 42, 1)'
											: `1px ${grey['100']}`
									}`,
									// Highlight chapter title on hover
									'&:hover': {
										backgroundColor:
											'rgb(204, 128, 42, 0.05)',
									},
								},

								// Add border dividers to separate chapters into theme groups
								[2, 6, 11, 16, 20, 27].includes(i) && {
									'&::before': {
										// Accent bottom border when the last chapter of a group is selected
										borderBottom: `solid ${
											chapters.at(i - 1)?.slug ===
											params.slug
												? '2px #cc802a'
												: `1px ${grey['200']}`
										}`,
										content: '""',
										display: 'block',
										width: '50%',
									},
								},
							]}
						>
							<Link href={`/recipes/${chapter.slug}`}>
								<ListItem>
									<Typography variant={'h6'}>
										{chapter.abbrev}
									</Typography>
								</ListItem>
							</Link>
						</Box>
					);
				})}
			</Box>
		</List>
	);
}

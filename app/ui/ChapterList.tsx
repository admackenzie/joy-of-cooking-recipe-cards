'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Box, Divider, List, ListItem, Typography } from '@mui/material';

import { chapters, slugifyChapter } from '@/app/lib/definitions';

import { grey } from '@mui/material/colors';

export default function ChapterList() {
	const params = useParams<{ slug: string }>();
	const slugs = chapters.map(chapter => slugifyChapter(chapter.name));

	return (
		<List sx={{ marginBottom: '6rem' }}>
			{/* FIXME: add section title or remove this element */}
			<ListItem
			// sx={{ borderBottom: '1px solid' }}
			>
				<Typography
					sx={{
						// fontStyle: 'italic',
						fontWeight: 500,
						// marginBottom: '1rem',
						// paddingBottom: '1rem',
						// marginTop: '1.75rem',
						paddingY: '1rem',
						// textAlign: 'center',
						width: '100%',
					}}
					variant={'h5'}
				></Typography>
			</ListItem>
			{/* 
			<Divider
				component={'li'}
				sx={{
					// backgroundColor: 'secondary.main',
					// marginBottom: '2rem',
					// marginX: 'auto',
					width: '70%',
					marginLeft: '2rem',
					padding: 0,
				}}
			/> */}

			<Box
				sx={{
					marginLeft: '1rem',
					width: '100%',
					// Align left border with the top and bottom chapter titles
					'&>*:first-of-type li': { paddingTop: 0 },
					'&>*:last-of-type li': { paddingBottom: 0 },
				}}
			>
				{chapters.map((_el, i) => {
					return (
						<Box
							key={i}
							sx={[
								{
									// Highlight selected chapter
									backgroundColor: `${
										params.slug === slugs[i] &&
										'rgb(204, 128, 42, 0.03)'
									}`,
									// Accent selected chapter
									borderLeft: `solid ${
										params.slug === slugs[i]
											? '2px rgb(204, 128, 42, 1)'
											: `1px ${grey['100']}`
									}`,
									// Highlight chapter title on hover
									'&:hover': {
										backgroundColor:
											'rgb(204, 128, 42, 0.03)',
									},
								},

								// Add border dividers to separate chapters into theme groups
								[2, 6, 11, 16, 20, 27].includes(i) && {
									'&::before': {
										// Accent bottom border when the last chapter of a group is selected
										borderBottom: `solid ${
											[slugs.at(i - 1)].includes(
												params.slug
											)
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
							<Link href={`/recipes/${slugs[i]}`}>
								<ListItem>
									<Typography variant={'h6'}>
										{chapters[i].abbrev}
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

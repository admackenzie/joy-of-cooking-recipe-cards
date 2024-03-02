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
					// Align left border with the top and bottom list items
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
									borderLeft: `solid ${
										params.slug === slugs[i]
											? '2px rgb(204, 128, 42, 1)'
											: `1px ${grey['100']}`
									}`,
									'&:hover': {
										// secondary.main, 3% opacity
										backgroundColor:
											'rgb(204, 128, 42, 0.03)',
									},
								},

								[2, 6, 11, 16, 20, 27].includes(i) && {
									'&::before': {
										borderBottom: `solid ${
											[
												// slugs.at(i),
												slugs.at(i - 1),
											].includes(params.slug)
												? '2px #cc802a'
												: `1px ${grey['200']}`
										}`,
										content: '""',
										display: 'block',
										width: '50%',
									},
								},

								// [slugs.at(i), slugs.at(i + 1)].includes(
								// 	params.slug
								// )
								// 	? {
								// 			borderBottom: {
								// 				backgroundColor:
								// 					'secondary.main',
								// 				height: '2px',
								// 			},
								// 	  }
								// 	: {borderBottom: {

								// 	}
								// 			backgroundColor: `${grey['100']}`,
								// 			// height: '2px',
								// 	  },
							]}
						>
							<Link href={`/recipes/${slugs[i]}`}>
								<ListItem
									sx={
										{
											// paddingBottom: '0.5rem',
											// paddingLeft: '1rem',
										}
									}
								>
									<Typography
										sx={{ paddingLeft: '0.5rem' }}
										variant={'h6'}
									>
										{chapters[i]?.abbrev}
									</Typography>
								</ListItem>
							</Link>

							{/* Divide chapters into broad categories */}
							{/* {[1, 5, 10, 15, 19, 26].includes(i) && (
										<Divider
											component={'li'}
											sx={[
												[
													slugs.at(i),
													slugs.at(i + 1),
												].includes(params.slug)
													? {
															backgroundColor:
																'secondary.main',
															height: '2px',
													  }
													: {
															backgroundColor:
																`${grey['100']}`
															// height: '2px',
															
													  },
												{
													width: '50%',
												},
											]}
											// variant={'middle'}
										/>
									)} */}
						</Box>
					);
				})}
			</Box>
		</List>
	);
}

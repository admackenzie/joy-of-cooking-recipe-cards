import { Box, Divider, List, ListItem, Typography } from '@mui/material';

import Link from 'next/link';

import { chapters, fileNames, slugifyChapter } from '@/app/lib/definitions';

export default function ChapterList() {
	return (
		<List>
			{Array(fileNames.length)
				.fill('')
				.map((_el, i) => {
					return (
						<Box key={i}>
							<Link
								href={`/recipes/${slugifyChapter(
									chapters[i].name
								)}`}
							>
								<ListItem>
									<Typography variant={'h6'}>
										{chapters[i]?.abbrev}
									</Typography>
								</ListItem>
							</Link>

							{[1, 5, 10, 15, 19, 26].includes(i) && (
								<Divider
									component={'li'}
									// variant={'middle'}
								/>
							)}
						</Box>
					);
				})}
		</List>
	);
}

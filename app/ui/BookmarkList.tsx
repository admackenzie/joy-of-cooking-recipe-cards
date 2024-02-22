'use client';

import {
	Box,
	Button,
	Divider,
	List,
	ListItem,
	Typography,
} from '@mui/material';

import Link from 'next/link';
import { Recipe } from '../lib/definitions';

interface Props {
	bookmarks: Recipe[];
}

export default function BookmarkList({ bookmarks }: Props) {
	const handleClear = () => localStorage.clear();

	return (
		<>
			<Button onClick={handleClear}>Clear</Button>

			<List>
				{(Object.values(bookmarks) ?? []).map((recipe, i) => {
					const { id, title } = recipe;

					return (
						<Box key={i}>
							<Link href={`/recipe/${id}`}>
								<ListItem>
									<Typography variant={'h6'}>
										{title}
									</Typography>
								</ListItem>
							</Link>

							{/* {[1, 5, 10, 15, 19, 26].includes(i) && (
								<Divider
									component={'li'}
									// variant={'middle'}
								/>
							)} */}
						</Box>
					);
				})}
			</List>
		</>
	);
}

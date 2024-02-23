'use client';

import { forwardRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Box, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { BookmarkButton, RecipeCard } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	addBookmark: any;
	data: Recipe[];
	removeBookmark: any;
}

export default function CardDeck({ addBookmark, data, removeBookmark }: Props) {
	const router = useRouter();

	// Remove 'preview card' styling when only one record is returned
	const singleRecord = data.length === 1;

	return (
		<Grid container columnSpacing={2}>
			{(data ?? []).map(recipe => {
				const { id } = recipe;

				return (
					<Grid
						// Clip recipe cards to preview size
						className={`relative ${
							!singleRecord && 'overflow-clip'
						}`}
						key={id}
						sx={{
							// Fade the bottom of the cards
							mask: `${
								!singleRecord &&
								'linear-gradient(to bottom, rgb(0, 0, 0, 1) 70%, rgb(0, 0, 0, 0) 100%)'
							}`,
						}}
						xs={12}
						sm={singleRecord ? 12 : 6}
					>
						<Link
							href={`/recipe/${id}`}
							className={'flex h-[33vh] '}
						>
							<RecipeCard recipe={recipe} />
						</Link>

						{/* Render bookmark button with absolute positioning to overlay the Link component enveloping RecipeCard  */}
						<Box className={'absolute right-4 top-4'}>
							<BookmarkButton
								addBookmark={addBookmark}
								recipe={recipe}
								removeBookmark={removeBookmark}
							/>
						</Box>
					</Grid>
				);
			})}

			{/* TODO: end card: need more search results? */}
		</Grid>
	);
}

// <RecipeCard recipe={recipe} {...props} />

/* // allow this component to accept all properties of "a" tag
interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	to: string;
	// we can add more properties we need from next/link in the future
}

// Forward Refs, is useful
const CustomLink = async function forwardRef(
	{ to, ...props }: IProps,
	ref: any
) {
	return (
		<Link href={to} legacyBehavior passHref>
			<a {...props} ref={ref} />
		</Link>
	);
}; */

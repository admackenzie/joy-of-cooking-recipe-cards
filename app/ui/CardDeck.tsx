import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import {
	Box,
	Button,
	CardActionArea,
	Container,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { BookmarkButton, RecipeCard } from '@/app/ui/index';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	addBookmark: any;
	bookmarks: Recipe[];
	data: Recipe[];
	preview: boolean;
	removeBookmark: any;
}

export default function CardDeck({ ...props }: Props) {
	const {
		addBookmark,
		bookmarks,
		data: recipes,
		preview,
		removeBookmark,
	} = props;

	// FIXME: find a way to make this work without also displaying the close button in preview state
	// Remove 'preview card' styling when only one record is returned
	// const singleRecord = recipes.length === 1;
	const searchParams = useSearchParams().get('search')?.toString() ?? '';

	if (!recipes || recipes.length === 0) {
		return (
			<Container
				sx={{
					paddingTop: '20%',
					textAlign: 'center',

					width: '100%',
				}}
			>
				<Typography variant={'h5'} sx={{ textWrap: 'pretty' }}>
					There are no search results for &quot;
					{`${
						searchParams.length > 16
							? searchParams.slice(0, 16) + '...'
							: searchParams + '.'
					}`}
					&quot; Try another search or browse by chapter.
				</Typography>
			</Container>
		);
	} else {
		return (
			<Grid container columnSpacing={{ xs: 2, lg: 3 }}>
				{(recipes ?? []).map(recipe => {
					const { id } = recipe;

					return preview ? (
						<Grid
							// Clip recipe cards to preview size
							key={id}
							sx={{
								// Fade the bottom of the cards
								mask: `${
									// !singleRecord &&
									'linear-gradient(to bottom, rgb(0, 0, 0, 1) 70%, rgb(0, 0, 0, 0) 100%)'
								}`,
								position: 'relative',
							}}
							xs={12}
							// sm={singleRecord ? 12 : 6}
							sm={6}
						>
							<CardActionArea
								// FIXME: adjust the opacity of these effects
								sx={{
									'& .MuiCardActionArea-focusHighlight': {
										backgroundColor: 'secondary.main',
									},
									' && .MuiTouchRipple-child': {
										backgroundColor: 'secondary.main',
									},
								}}
							>
								<Link href={`/recipe/${id}`}>
									<RecipeCard
										preview={true}
										recipe={recipe}
									/>
								</Link>
							</CardActionArea>

							{/* Render bookmark button with absolute positioning to overlay the Link component around RecipeCard */}
							<Box
								sx={{
									position: 'absolute',
									right: '1rem',
									top: '1rem',
								}}
							>
								<BookmarkButton
									addBookmark={addBookmark}
									bookmarks={bookmarks}
									recipe={recipe}
									removeBookmark={removeBookmark}
								/>
							</Box>
						</Grid>
					) : (
						<Box
							key={id}
							sx={{ paddingX: '0.5rem', position: 'relative' }}
						>
							<RecipeCard preview={false} recipe={recipe} />

							<Box
								sx={{
									position: 'absolute',
									right: '1rem',
									top: '1rem',
								}}
							>
								<BookmarkButton
									addBookmark={addBookmark}
									bookmarks={bookmarks}
									recipe={recipe}
									removeBookmark={removeBookmark}
								/>
							</Box>
						</Box>
					);
				})}

				{/* TODO: end card: need more search results? */}
			</Grid>
		);
	}
}

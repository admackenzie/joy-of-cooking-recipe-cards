'use client';

import NextLink from 'next/link';

import {
	Box,
	Button,
	Container,
	Divider,
	Fade,
	Icon,
	IconButton,
	List,
	ListItem,
	Paper,
	Typography,
} from '@mui/material';
import { BookmarkRemove, Bookmarks, Close } from '@mui/icons-material';

import { Recipe } from '../lib/definitions';

interface Props {
	bookmarks: Recipe[];
	removeBookmark: any;
}

export default function BookmarkList({ bookmarks, removeBookmark }: Props) {
	const handleClear = () => localStorage.clear();

	return (
		<Box>
			<Button onClick={handleClear}>Clear</Button>
			<Container>
				<Box
					sx={{
						alignItems: 'center',
						display: 'flex',
						justifyContent: 'center',
						paddingTop: '2.5rem',
						marginX: 'auto',
					}}
				>
					<Bookmarks
						sx={{ color: 'primary.main', paddingRight: '0.5rem' }}
					/>

					<Typography
						sx={{
							fontWeight: 500,
						}}
						variant={'h5'}
					>
						Bookmarks
					</Typography>
				</Box>

				<Divider
					sx={{
						backgroundColor: 'secondary.main',
						marginBottom: '1rem',
						marginTop: '0.5rem',
					}}
				></Divider>
			</Container>

			<List>
				{(Object.values(bookmarks) ?? []).map((recipe, i) => {
					const { id, title } = recipe;

					return (
						<ListItem key={i}>
							<Fade in={true}>
								<Paper
									elevation={1}
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										height: '5rem',
										width: '100%',
									}}
								>
									<Box
										component={NextLink}
										href={`/recipe/${id}`}
										sx={{
											alignItems: 'center',
											display: 'flex',
											width: '100%',
											// Highlight bookmark on hover
											'&:hover': {
												backgroundColor:
													'rgb(204, 128, 42, 0.05)',
											},
										}}
									>
										{/* Truncate text after two lines */}
										<Typography
											sx={{
												display: '-webkit-box',
												marginY: 'auto',
												overflow: 'hidden',
												paddingLeft: '1rem',
												paddingRight: '0.5rem',
												paddingY: '0.5rem',
												textOverflow: 'ellipsis',
												WebkitBoxOrient: 'vertical',
												WebkitLineClamp: '2',
											}}
											variant={'h6'}
										>
											{title}
										</Typography>
									</Box>

									<Box
										sx={{
											// borderLeft: '1px solid ',
											display: 'flex',
											flexDirection: 'column',

											'&:hover': {
												backgroundColor:
													'rgb(238, 36, 36, 0.05)',
												'&>*:first-of-type svg': {
													color: 'primary.main',
												},
											},
										}}
									>
										<IconButton
											disableRipple
											onClick={() => removeBookmark(id)}
											sx={{
												color: 'rgb(238, 36, 36, 0.2)',
											}}
										>
											<BookmarkRemove />
										</IconButton>

										<Box />
									</Box>
								</Paper>
							</Fade>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
}

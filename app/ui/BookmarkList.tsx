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
import { BookmarkAdd, BookmarkRemove, Bookmarks } from '@mui/icons-material';

import { Recipe } from '../lib/definitions';

interface Props {
	bookmarks: Recipe[];
	removeBookmark: any;
}

export default function BookmarkList({ bookmarks, removeBookmark }: Props) {
	const handleClear = () => localStorage.clear();

	return (
		<Box
			sx={[
				{
					height: '100%',
				},
				bookmarks.length === 0 && {
					background: `linear-gradient(to bottom, rgb(250, 250, 250, 0.3)  0%, #fff 50%, rgb(250, 250, 250, 0.3)) 100%`,
				},
			]}
		>
			{/* <Button onClick={handleClear}>Clear</Button> */}
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
					<Typography
						sx={{
							fontWeight: 500,
						}}
						variant={'h5'}
					>
						Bookmarks
					</Typography>

					<Bookmarks
						fontSize={'large'}
						sx={{ color: 'primary.main', paddingLeft: '0.5rem' }}
					/>
				</Box>

				<Divider
					sx={{
						backgroundColor: 'secondary.main',
						marginBottom: '1rem',
						marginTop: '0.5rem',
					}}
				></Divider>
			</Container>

			{bookmarks.length === 0 ? (
				// Display 'no bookmarks' message
				<Container>
					<Typography
						sx={{
							color: '666',
							fontWeight: 500,
							marginTop: '16rem',
							padding: '1rem',
							// textAlign: 'center',
							textWrap: 'pretty',
						}}
						variant={'subtitle1'}
					>
						Bookmark your favorite recipes for later. Click
						<BookmarkAdd
							color={'primary'}
							fontSize={'small'}
							sx={{ marginBottom: '0.25rem', marginX: '0.1rem' }}
						/>
						on any recipe to get started.
					</Typography>
				</Container>
			) : (
				// Display bookmarks
				<List>
					{(Object.values(bookmarks) ?? []).map((recipe, i) => {
						const { id, title } = recipe;

						return (
							<ListItem key={i}>
								{/* <Fade in={true}> */}
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
													'rgb(204, 128, 42, 0.02)',
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

									<IconButton
										disableRipple
										onClick={() => removeBookmark(id)}
										size={'small'}
										sx={{
											alignItems: 'start',
											borderRadius: 0,
											color: 'rgb(238, 36, 36, 0.2)',
											display: 'flex',
											'&:hover': {
												backgroundColor:
													'rgb(238, 36, 36, 0.05)',
												color: 'primary.main',
											},
										}}
									>
										<BookmarkRemove fontSize={'small'} />
									</IconButton>
								</Paper>
								{/* </Fade> */}
							</ListItem>
						);
					})}
				</List>
			)}
		</Box>
	);
}

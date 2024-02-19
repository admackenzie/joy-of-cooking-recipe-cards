import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
	Divider,
} from '@mui/material';

import { Close, Favorite } from '@mui/icons-material';

import { RecipeBody } from '@/app/ui/index';
import { Recipe } from '@/app/lib/definitions';

import { chapters } from '@/app/lib/definitions';

interface Props {
	data: Recipe;
	handleCardCount: any;
	handleHide: any;
}

export default function RecipeCard({ ...props }: Props) {
	const handleClosePreview = () => {
		props.handleHide();
		props.handleCardCount();
	};

	if (props.data) {
		const { id, title, chapter, servings, page, html } = props.data;

		// Replace chapter title with abbreviated name
		const abbrev =
			chapters.find(({ name }) => name === chapter)?.abbrev ?? chapter;

		return (
			<Card className={'relative border-t-2'} elevation={3}>
				<CardActionArea onClick={() => console.log(id, title)}>
					<CardHeader
						className={`${servings ? 'pb-0' : 'pb-1'}`}
						title={title}
					/>
					{/* <Typography variant={'h5'}>{title}</Typography>
						<Typography variant={'subtitle1'}>
							{servings}
						</Typography> */}

					<Divider
						className={`${!servings && 'bg-[#cc802a]'}`}
						textAlign={'left'}
						sx={{
							maxWidth: '80%',
						}}
						variant={'middle'}
					>
						<Typography
							variant={'subtitle1'}
							sx={{ bgcolor: '#fff', color: '#000' }}
						>
							{servings}
						</Typography>
					</Divider>

					{/* Body */}
					<CardContent>
						<RecipeBody id={id} html={html} />

						{page && (
							<Box className={'flex justify-end'}>
								{`p. ${page}`}
							</Box>
						)}

						<Box>{`
								chapter:
								${chapter} (See more)`}</Box>
					</CardContent>

					{/* Section footer */}
					<CardContent className={'font-semibold flex justify-end'}>
						{abbrev}
					</CardContent>
				</CardActionArea>

				{/* Close card button */}
				<IconButton
					className={
						'absolute cursor-pointer items-center right-1 top-2'
					}
					onClick={handleClosePreview}
				>
					<Close />
				</IconButton>

				{/* Favorite button */}
				<IconButton
					className={'absolute bottom-1 left-1'}
					// TODO: Favorite functionality
					onClick={() => console.log('Favorite el clicked')}
				>
					<Favorite />
				</IconButton>
			</Card>
		);
	}
}

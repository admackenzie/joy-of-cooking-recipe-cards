'use client';
import { useParams, useRouter } from 'next/navigation';

import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	Container,
	Divider,
	IconButton,
	Typography,
} from '@mui/material';

import { ArrowBack, Close } from '@mui/icons-material';

import { BookmarkButton, RecipeBody } from '@/app/ui/index';
import { chapters, Recipe } from '@/app/lib/definitions';

interface Props {
	addBookmark: any;
	recipe: Recipe;
	removeBookmark: any;
}

export default function RecipeCard({ ...props }: Props) {
	const router = useRouter();
	const params = useParams<{ id: string }>();

	const { recipe } = props;

	if (!recipe) {
		return <h1>ERROR</h1>;
	} else {
		const { id, title, chapter, servings, page, html } = recipe;

		// Replace chapter title with abbreviated name
		const abbrev =
			chapters.find(({ name }) => name === chapter)?.abbrev ?? chapter;

		return (
			<Card className={'border-t-2'} elevation={3}>
				{/* Header */}
				<Box
					className={`flex justify-between pl-4 pt-4 pr-4 ${
						servings ? 'pb-0' : 'pb-1'
					}`}
				>
					{/* Title */}
					<Typography className={'w-5/6'} noWrap variant={'h5'}>
						{title}
					</Typography>

					{/* Close button */}
					{params.id && (
						<IconButton
							className={'p-2'}
							onClick={() => router.back()}
						>
							<Close />
						</IconButton>
					)}
				</Box>

				{/* Servings */}
				<Divider
					// Style Dividers without interstitial text
					className={`w-4/5 ${!servings && 'bg-[#cc802a]'}`}
					textAlign={'left'}
					variant={'middle'}
				>
					<Typography
						className={'text-lg'}
						noWrap
						variant={'subtitle1'}
					>
						{servings}
					</Typography>
				</Divider>

				{/* Body */}
				<CardContent>
					<RecipeBody id={id} html={html} />

					{page && (
						<Box className={'flex justify-end'}>{`p. ${page}`}</Box>
					)}

					<Box>{`
								chapter:
								${chapter} (See more)`}</Box>
				</CardContent>

				{/* Section footer */}
				<CardContent className={'font-semibold flex justify-end'}>
					{abbrev}
				</CardContent>
			</Card>
		);
	}
}

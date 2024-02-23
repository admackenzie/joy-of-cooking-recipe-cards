'use client';

import Link from 'next/link';
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
	Stack,
} from '@mui/material';

import { ArrowBack, Close } from '@mui/icons-material';

import { RecipeBody } from '@/app/ui/index';
import { chapters, Recipe } from '@/app/lib/definitions';

interface Props {
	addBookmark?: any;
	recipe: Recipe;
	removeBookmark?: any;
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
			<Box className={'flex'}>
				<Card className={'border-t-2'} elevation={3}>
					{/* Header */}
					<Box
						className={`flex justify-between pl-4 pt-4 pr-4 ${
							servings ? 'pb-0' : 'pb-1'
						}`}
					>
						{/* Title */}
						<Typography className={'my-auto text-2xl w-5/6'}>
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
						className={`ml-4 w-4/5 ${!servings && 'bg-[#cc802a]'}`}
						textAlign={'left'}
					>
						<Typography className={'text-lg'}>
							{servings}
						</Typography>
					</Divider>

					{/* Body */}
					<CardContent>
						<Typography className={'text-xl'} component={'div'}>
							<Stack spacing={1}>
								<RecipeBody html={html} />
							</Stack>

							{/* Page number */}
							{/* {page && (
							<Box
								className={'flex justify-end mt-4'}
							>{`p. ${page}`}</Box>
						)} */}
							{/* Chapter */}

							<Divider
								// Style Dividers without interstitial text
								className={
									'flex flex-grow mt-4 bg-[#cc802a] w-3/5 mx-auto'
								}
								textAlign={'center'}
							></Divider>

							{params.id && (
								<Box
									className={
										'font-bold text-blue-600 mt-4 text-center'
									}
								>
									<Link href={''}>{chapter}</Link>
								</Box>
							)}
						</Typography>
					</CardContent>
				</Card>
			</Box>
		);
	}
}

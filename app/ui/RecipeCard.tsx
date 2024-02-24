'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import {
	Box,
	Card,
	CardContent,
	Divider,
	IconButton,
	Typography,
	Stack,
} from '@mui/material';

import { ArrowBackIosNew, Close, Home } from '@mui/icons-material';

import { RecipeBody } from '@/app/ui/index';

import { chapterSlug, Recipe } from '@/app/lib/definitions';

interface Props {
	preview?: boolean;
	recipe: Recipe;
	// initialSearch?: string;
}

export default function RecipeCard({
	preview = false,
	recipe,
}: // initialSearch,
Props) {
	const router = useRouter();

	if (!recipe) {
		return <h1>ERROR</h1>;
	} else {
		const { chapter, html, page, servings, title } = recipe;

		return (
			<Card
				// Clip cards to same height in 'preview' styling
				className={`border-t-2 ${preview && 'h-[33vh]'}`}
				elevation={3}
			>
				<CardContent>
					{/* ---- Header ---- */}
					<Box>
						<Box className={'flex justify-between relative'}>
							{/* Hide back button in 'preview' styling */}
							{!preview && (
								<IconButton
									// Render close button with absolute positioning to keep it in the corner if long title text wraps to multiple lines
									className={'mr-4 pl-0'}
									onClick={() => router.back()}
								>
									<ArrowBackIosNew />
								</IconButton>
							)}

							<Typography
								// Truncate title with ellipsis in 'preview' styling
								className={`my-auto text-2xl w-5/6 ${
									preview && 'truncate'
								}`}
							>
								{title}
							</Typography>

							{/* Hide close button in 'preview' styling */}
							{!preview && (
								// 'Bounce' container to prevent collisions with absolute positioned element
								<Box className={'min-w-10'}>
									{/* FIXME: make close button return to user's most recent search */}
									<Link href={`/`}>
										<IconButton
											// Render close button with absolute positioning to keep it in the corner if long title text wraps to multiple lines
											className={
												'absolute right-0 top-0 '
											}
										>
											<Close />
										</IconButton>
									</Link>
								</Box>
							)}
						</Box>

						{/* Hide servings in 'preview' styling */}
						{!preview && (
							<Typography className={'ml-12 text-lg'}>
								{servings}
							</Typography>
						)}

						<Divider
							className={'bg-[#cc802a] mb-4 mt-2 w-5/6'}
						></Divider>
					</Box>

					{/* ---- Body ---- */}
					<Typography
						className={'text-pretty text-xl'}
						// Render as <div> to prevent hydration errors with <p> as a descendant of <p>
						component={'div'}
					>
						<Stack spacing={1}>
							<RecipeBody html={html} />
						</Stack>
					</Typography>

					{/* ---- Footer ---- */}
					{/* Hide footer in 'preview' styling */}
					{!preview && (
						<Box className={'mt-8 text-center'}>
							{/* Page number */}
							{page && (
								<Typography className={'text-lg'}>
									Own a physical copy? Find this recipe on{' '}
									<span className={'font-medium'}>
										{`page ${page}`}
									</span>
									.
								</Typography>
							)}

							<Divider
								className={
									'bg-[#cc802a] mb-2 mt-4 mx-auto w-3/5'
								}
							></Divider>

							{/* Chapter link */}
							<Typography
								className={
									'font-bold text-blue-600 text-pretty text-xl'
								}
							>
								<Link href={`/recipes/${chapterSlug(chapter)}`}>
									{chapter}
								</Link>
							</Typography>
						</Box>
					)}
				</CardContent>
			</Card>
		);
	}
}

{
	/* <Divider
					// Style Dividers without interstitial text
					className={`ml-4 w-4/5 ${!servings && 'bg-[#cc802a]'}`}
					textAlign={'left'}
				>
					<Typography className={'text-lg'}>{servings}</Typography>
				</Divider> */
}

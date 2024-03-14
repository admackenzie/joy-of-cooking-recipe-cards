'use client';

import { useRouter } from 'next/navigation';

import { Box, Divider, IconButton, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';

interface Props {
	preview: boolean;
	servings: string | null;
	title: string;
}

export default function RecipeHeader({ preview, servings, title }: Props) {
	const router = useRouter();

	return (
		<>
			<Box
				sx={{
					display: 'flex',
				}}
			>
				{/* Hide back button in 'preview' styling */}
				{!preview && (
					<IconButton
						onClick={() => router.back()}
						sx={{
							marginRight: '1rem',
							paddingLeft: 0,
							paddingY: 0,
						}}
					>
						<ArrowBackIosNew />
					</IconButton>
				)}
				<Typography
					sx={{
						fontWeight: 500,
						width: '85%',

						// Truncate title with ellipsis in 'preview' styling
						...(preview && {
							display: '-webkit-box',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							WebkitBoxOrient: 'vertical',
							WebkitLineClamp: '2',
						}),
					}}
					variant={'h5'}
				>
					{title}
				</Typography>

				{/* 'Bounce' title element to prevent overlap with BookmarkButton */}
				<Box sx={{ minWidth: '15%' }} />
			</Box>

			{/* Hide servings in 'preview' styling */}
			{!preview && (
				<Typography
					sx={{
						display: 'flex',
						fontStyle: 'italic',
						fontWeight: 'bold',
						marginLeft: '3rem',
					}}
					variant={'h6'}
				>
					{servings}
				</Typography>
			)}

			<Divider
				sx={{
					backgroundColor: 'secondary.main',
					marginBottom: '1rem',
					marginTop: '0.5rem',
					width: '85%',
				}}
			></Divider>
		</>
	);
}

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Box, Divider, IconButton, Typography } from '@mui/material';
import { ArrowBackIosNew, Close } from '@mui/icons-material';

import theme from '@/theme';

interface Props {
	preview: boolean;
	servings: string | null;
	title: string;
}

export default function RecipeHeader({ preview, servings, title }: Props) {
	const jocBrown = theme.palette.secondary.main;
	const router = useRouter();

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					position: 'relative',
				}}
			>
				{/* Hide back button in 'preview' styling */}
				{!preview && (
					<IconButton
						onClick={() => router.back()}
						sx={{ marginRight: '1rem', paddingLeft: 0 }}
					>
						<ArrowBackIosNew />
					</IconButton>
				)}

				<Typography
					// Truncate title with ellipsis in 'preview' styling
					noWrap={preview}
					sx={{
						marginY: 'auto',
						width: '85%',
					}}
					variant={'h5'}
				>
					{title}
				</Typography>

				{/* Hide close button in 'preview' styling */}
				{!preview && (
					<>
						{/* 'Bounce' title element to prevent collisions
									with absolute positioned close button */}
						<Box sx={{ minWidth: '15%' }} />

						<Link href={`/`}>
							<IconButton
								// Render close button with absolute positioning to keep it in the corner if long title text wraps to multiple lines
								// className={
								// 	'absolute right-0 top-0 '
								// }
								sx={{
									position: 'absolute',
									right: 0,
									top: 0,
								}}
							>
								<Close />
							</IconButton>
						</Link>
					</>
				)}
			</Box>

			{/* Hide servings in 'preview' styling */}
			{!preview && (
				<Typography
					sx={{
						display: 'flex',
						marginLeft: '4rem',
					}}
					variant={'subtitle1'}
				>
					{servings}
				</Typography>
			)}

			<Divider
				sx={{
					backgroundColor: `${jocBrown}`,
					marginBottom: '1rem',
					marginTop: '0.5rem',
					width: '85%',
				}}
			></Divider>
		</>
	);
}

import Link from 'next/link';

import { Box, Divider, Typography } from '@mui/material';

import { chapters } from '@/app/lib/definitions';

interface Props {
	chapter: string;
	page: string | null;
}

export default function RecipeFooter({ chapter, page }: Props) {
	const slug = chapters.find(chapterObj => chapterObj.name === chapter)?.slug;

	return (
		<Box
			sx={{ marginTop: '3rem', textAlign: 'center', textWrap: 'pretty' }}
		>
			{/* Page number */}
			{page && (
				<Typography variant={'subtitle1'}>
					Own a physical copy? Find this recipe on
					<Box component={'span'} sx={{ fontWeight: 500 }}>
						{` page ${page}`}
					</Box>
					.
				</Typography>
			)}

			<Divider
				sx={{
					backgroundColor: 'secondary.main',
					marginX: 'auto',
					marginY: '0.5rem',
					width: '60%',
				}}
			></Divider>

			{/* Chapter link */}
			<Typography
				sx={{
					color: 'info.main',
					fontWeight: 'bold',
				}}
				variant={'h6'}
			>
				<Link href={`/recipes/${slug}`}>{chapter}</Link>
			</Typography>
		</Box>
	);
}

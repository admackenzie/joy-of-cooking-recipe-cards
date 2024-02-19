import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	Container,
	Divider,
	Typography,
} from '@mui/material';

import { RecipeBody } from '@/app/ui/index';
import { chapters, Recipe } from '@/app/lib/definitions';

interface Props {
	data: Recipe;
}

export default function RecipeCard({ ...props }: Props) {
	if (props.data) {
		const { id, title, chapter, servings, page, html } = props.data;

		// Replace chapter title with abbreviated name
		const abbrev =
			chapters.find(({ name }) => name === chapter)?.abbrev ?? chapter;

		return (
			<Card className={'relative border-t-2'} elevation={3}>
				<CardActionArea onClick={() => console.log(id, title)}>
					{/* Title */}
					<Box
						className={`ml-4 mt-4 w-5/6 ${
							servings ? 'pb-0' : 'pb-1'
						}`}
					>
						<Typography noWrap variant={'h5'}>
							{title}
						</Typography>
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
			</Card>
		);
	}
}

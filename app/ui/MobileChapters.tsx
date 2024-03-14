import Link from 'next/link';

import { IconButton, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { KeyboardArrowUp } from '@mui/icons-material';

import { chapters } from '@/app/lib/definitions';

interface Props {
	bottomFunc?: (e: React.SyntheticEvent) => void;
}

export default function MobileChapters({ bottomFunc }: Props) {
	return (
		<Grid container columnSpacing={1} sx={{ paddingBottom: '5rem' }}>
			{chapters.map((chapter, i) => {
				return (
					<Grid
						key={i}
						sx={{
							// Space rows
							paddingBottom: '1rem',
						}}
						xs={6}
					>
						<Link href={`/recipes/${chapter.slug}`}>
							<Paper
								elevation={1}
								sx={{
									alignItems: 'center',
									display: 'flex',
									paddingX: '1rem',
									paddingY: '0.5rem',
								}}
							>
								{chapter.icon}

								<Typography
									sx={{
										display: 'flex',
										flexBasis: '100%',
										flexShrink: 1,
										justifyContent: 'space-evenly',
										paddingLeft: '0.5rem',
										textWrap: 'nowrap',
									}}
									variant={'h6'}
								>
									{chapter.abbrev}
								</Typography>
							</Paper>
						</Link>
					</Grid>
				);
			})}

			<Grid xs={6}>
				<IconButton
					onClick={bottomFunc}
					sx={{
						alignItems: 'center',
						borderRadius: 0,
						display: 'flex',
						height: '100%',
						justifyContent: 'end',
						padding: 0,
						paddingRight: '1rem',
						width: '100%',
					}}
				>
					<KeyboardArrowUp
						sx={{
							fontSize: '2rem',
						}}
					/>
				</IconButton>
			</Grid>
		</Grid>
	);
}

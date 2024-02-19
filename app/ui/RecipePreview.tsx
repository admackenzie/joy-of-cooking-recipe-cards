import { useState } from 'react';

import { Fade } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Close, Favorite } from '@mui/icons-material';

import { RecipeCard } from '@/app/ui/index';

interface Props {
	data: any;
	handleCardCount: any;
}

export default function RecipePreview({ ...props }: Props) {
	const [fade, setFade] = useState(false);
	const [hidden, setHidden] = useState(false);
	const animationTimeout = 200;

	const handleHide = () => {
		setFade(true);

		props.handleCardCount();

		setTimeout(() => {
			setHidden(true);
		}, animationTimeout);
	};

	return (
		<Grid
			// Force recipe cards to preview size
			className={`${hidden && 'hidden'} max-h-[33vh] overflow-clip`}
			sx={{
				// Fade the bottom of the preview cards
				mask: 'linear-gradient(to bottom, rgb(0, 0, 0, 1) 50%, rgb(0, 0, 0, 0) 100%)',
			}}
			xs={12}
			sm={6}
		>
			<Fade appear in={!fade} timeout={animationTimeout}>
				<span>
					<RecipeCard
						data={props.data}
						handleCardCount={props.handleCardCount}
						handleHide={handleHide}
					/>
				</span>
			</Fade>
		</Grid>
	);
}

// <Card elevation={3}>
// 					<CardHeader
// 						title={props.data.title}
// 						subheader={props.data.servings}
// 					/>
// 					<CardContent>
// 						<RecipeBody
// 							html={props.data.html}
// 							id={props.data.id}
// 						/>
// 					</CardContent>
// 					{/* <RecipeCard
// 					data={props.data}
// 					handleCardCount={props.handleCardCount}
// 					handleHide={handleHide}
// 				/> */}
// 				</Card>

// 				<IconButton
// 					className={
// 						'absolute cursor-pointer items-center right-1 top-2'
// 					}
// 					onClick={handleHide}
// 				>
// 					<Close />
// 				</IconButton>

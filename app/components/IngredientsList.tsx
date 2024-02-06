import Grid from '@mui/material/Unstable_Grid2';

// FIXME: improve interface types
interface Props {
	callback: any;
	children: NodeList;
}

export default function IngredientsList({ callback, children }: Props) {
	// FIXME: find a tidier way to do this
	const getJSX = callback;

	return (
		<Grid>
			{Array.from(children).map((li, i) => {
				return (
					<Grid className={'font-bold ml-8'} key={i}>
						{getJSX(li.childNodes)}
					</Grid>
				);
			})}
		</Grid>
	);
}

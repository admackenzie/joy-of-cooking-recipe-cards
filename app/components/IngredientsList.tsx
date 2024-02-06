import { List, ListItem, ListItemText } from '@mui/material';

// FIXME: improve interface types
interface Props {
	callback: any;
	children: NodeList;
}

export default function IngredientsList({ callback, children }: Props) {
	// FIXME: find a tidier way to do this
	const getJSX = callback;

	return (
		<List>
			{Array.from(children).map((li, i) => {
				return (
					<ListItem key={i}>
						<ListItemText primary={getJSX(li.childNodes)} />
					</ListItem>
				);
			})}
		</List>
	);
}

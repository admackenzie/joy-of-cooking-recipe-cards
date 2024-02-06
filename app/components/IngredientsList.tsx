import { ListItem, ListItemText } from '@mui/material';

// FIXME: improve interface types
interface Props {
	callback: any;
	children: NodeList;
}

export default function IngredientsList({ callback, children }: Props) {
	// FIXME: find a tidier way to do this
	const getJSX = callback;

	return (
		<>
			{Array.from(children)
				// Remove new line and carriage return characters
				.filter(li => /\w/.test(li.textContent!))
				.map((li, i) => {
					return (
						<ListItem dense key={i}>
							<ListItemText
								className={'font-bold'}
								disableTypography
								primary={getJSX(li.childNodes)}
							/>
						</ListItem>
					);
				})}
		</>
	);
}

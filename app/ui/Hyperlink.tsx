import Link from 'next/link';
import { CardActionArea } from '@mui/material';

interface Props {
	id: string;
	text: string;
	url: Attr | string;
}

export default function Hyperlink({ ...props }: Props) {
	// Convert initial hyperlink to match the all-numeric id
	const href = props.url
		?.toString()
		.match(/part\d{2}_sub\d{3}_\d{2}/g)
		?.at(0)
		?.match(/\d+/g)
		?.join('');

	// Filter out anchors that link to themselves or to non-recipe text
	if (href && href !== props.id) {
		return (
			<Link
				className={'font-bold text-blue-600'}
				href={`/recipe/${href}`}
				key={href}
			>
				{props.text}
			</Link>
		);
	} else {
		return props.text;
	}
}

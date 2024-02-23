'use client';

import { useParams } from 'next/navigation';
import { Typography } from '@mui/material';
import Link from 'next/link';

// FIXME: Improve this interface
interface Props {
	id: string;
	text: string;
	url: Attr | string;
}

export default function Hyperlink({ ...props }: Props) {
	const params = useParams<{ id: string }>();

	// Convert hyperlink to match the all-numeric id
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
				// Remove link decoration when cards have 'preview' styling
				className={`font-bold ${params.id && 'text-blue-600'}`}
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

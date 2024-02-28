'use client';

import Link from 'next/link';

import { Box } from '@mui/material';

import theme from '@/theme';

interface Props {
	id?: string;
	text: string;
	url: Attr | string;
}

export default function Hyperlink({ id, text, url }: Props) {
	// Convert initial hyperlink to match the all-numeric id
	const href = url
		?.toString()
		.match(/part\d{2}_sub\d{3}_\d{2}/g)
		?.at(0)
		?.match(/\d+/g)
		?.join('');

	// Filter out anchors that link to themselves or to non-recipe text
	if (href && id && href !== id) {
		const hyperlinkBlue = theme.palette.info.main;

		return (
			<Box component={'span'} sx={{ color: hyperlinkBlue }}>
				<Link href={`/recipe/${href}`} key={href}>
					{text}
				</Link>
			</Box>
		);
	}

	// Return non-hyperlink text
	else {
		return (
			<Box component={'span'} sx={{ fontStyle: 'italic' }}>
				{text}
			</Box>
		);
	}
}

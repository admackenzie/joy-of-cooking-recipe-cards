import { ReactElement } from 'react';

import { Box, Container } from '@mui/material';

interface Props {
	bp: string;
	children: ReactElement;
	width: number;
}

export default function Sidebar({ bp, children, width }: Props) {
	return (
		<Box
			sx={{
				display: { xs: 'none', [`${bp}`]: 'block' },
				flexShrink: 0,
				overflowY: 'auto',
				width: width,
			}}
		>
			{children}
		</Box>
	);
}

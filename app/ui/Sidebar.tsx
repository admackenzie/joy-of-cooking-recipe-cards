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
				height: ' 100vh',
				flexShrink: 0,
				overflowY: 'auto',
				width: `${width}px`,
			}}
		>
			{children}
		</Box>
	);
}

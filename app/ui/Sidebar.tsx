import { ReactElement } from 'react';

import { Container } from '@mui/material';

interface Props {
	bp: string;
	children: ReactElement;
	width: number;
}

export default function Sidebar({ bp, children, width }: Props) {
	return (
		<Container
			sx={{
				display: { xs: 'none', [`${bp}`]: 'block' },
				flexShrink: { [`${bp}`]: 0 },
				overflowY: 'auto',
				width: { [`${bp}`]: width },
			}}
		>
			{children}
		</Container>
	);
}

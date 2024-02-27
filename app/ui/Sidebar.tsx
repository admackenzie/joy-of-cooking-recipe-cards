import { Container } from '@mui/material';

interface Props {
	bp: string;
	children: React.ReactElement;
	width: number;
}

export default function Sidebar({ bp, children, width }: Props) {
	return (
		<Container
			className={`h-full overflow-y-auto`}
			sx={{
				display: { xs: 'none', [`${bp}`]: 'block' },
				width: { [`${bp}`]: width },
				flexShrink: { [`${bp}`]: 0 },
			}}
		>
			{children}
		</Container>
	);
}

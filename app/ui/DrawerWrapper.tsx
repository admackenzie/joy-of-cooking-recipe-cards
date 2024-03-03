import { ReactElement } from 'react';

import { Box, Drawer, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface Props {
	anchor: 'bottom' | 'left' | 'right' | 'top';
	children: ReactElement;
	close: any;
	open: boolean;
}

export default function DrawerWrapper({
	anchor,
	children,
	close,
	open,
}: Props) {
	return (
		<Drawer
			anchor={anchor}
			onClick={() => close(false)}
			onClose={() => close(false)}
			open={open}
			PaperProps={{
				sx: {
					marginX: { xs: '1rem', sm: '1.5rem' },
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					justifyContent: 'space-between',
					paddingX: '1rem',
					paddingY: '1rem',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'end',
					}}
				>
					<IconButton color={'primary'}>
						<Close />
					</IconButton>
				</Box>

				<Box>{children}</Box>
			</Box>
		</Drawer>
	);
}

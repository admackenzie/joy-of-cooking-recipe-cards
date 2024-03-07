import Image from 'next/image';

import { Box, Container } from '@mui/material';

import { Search } from '.';

export default function Landing() {
	return (
		<Container
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				height: { xs: '50%' },
				// marginTop: { xs: '50%', sm: '10%' },
				// objectFit: 'contain',
				// overflow: 'hidden',
				position: 'relative',
				width: {
					xs: '90%',
					sm: '60%',
					xl: '50%',
				},
			}}
		>
			<Image
				alt={'cover'}
				// fill={true}
				src={'/images/cover-variant-1.jpg'}
				width={1000}
				height={1000}
				// sizes={'50vw'}
			/>

			{/* <Search /> */}
		</Container>
	);
}

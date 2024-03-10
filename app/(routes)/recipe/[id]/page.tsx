import { AppBar, Box, Toolbar } from '@mui/material';

import { Layout, MobileNav } from '@/app/ui/index';

import { findByID } from '@/app/lib/CRUD';

import { Recipe } from '@/app/lib/definitions';

interface Props {
	params: {
		id: string;
	};
}

export default async function Page({ params: { id } }: Props) {
	// FIXME: try/catch here

	let data: Recipe[] = [];

	if (id) {
		const result = (await findByID(id)) as Recipe;
		data = [result];
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column' }}>
			<Layout data={data} />

			{/* <Box
				sx={{
					height: '3rem',
					backgroundColor: 'red',
					bottom: 0,
					top: 'auto',
					// display: 'inline',
				}}
			></Box> */}
		</Box>
	);
}

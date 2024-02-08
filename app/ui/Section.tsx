import { promises as fs } from 'fs';

import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	CardHeader,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import Category from './Category';

export default async function Section() {
	try {
		const files = await fs.readdir('public/images');

		const fileNames = files
			.filter(name => name.includes('section'))
			.sort((a, b) => {
				const idx = (f: string) => +f.match(/(?<=-)(.*?)(?=-)/g)!;

				return idx(a) - idx(b);
			});

		return <Category fileNames={fileNames} />;
	} catch (err) {
		console.log(err);
	}
}

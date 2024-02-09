'use client';

import { Card, CardActionArea, CardHeader, CardMedia } from '@mui/material';
import { NestedGrid } from '@/app/ui/index';
import { categories } from '@/app/lib/definitions';

interface Props {
	fileNames: string[];
}

export default function Category({ ...props }: Props) {
	return (
		<NestedGrid columns={2} rows={16} total={31}>
			<CategoryCard fileNames={props.fileNames} />
		</NestedGrid>
	);
}

const CategoryCard = ({ ...props }) => {
	const { fileNames, idx } = props;

	return (
		<Card raised>
			<CardActionArea onClick={() => console.log(categories[idx].name)}>
				<CardMedia
					alt=""
					className={'h-32'}
					component={'img'}
					image={`/images/${fileNames[idx]}`}
				></CardMedia>

				<CardHeader title={categories[idx].abbrev} />
			</CardActionArea>
		</Card>
	);
};

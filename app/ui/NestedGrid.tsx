import Grid from '@mui/material/Unstable_Grid2';

import { cloneElement } from 'react';

interface Props {
	children: any;
	columns: number;
	rows: number;
	total: number;
}

export default function NestedGrid({ ...props }: Props) {
	const { children, columns, rows } = props;
	const total = props.total ?? columns * rows;

	const idx = (n: number) => Array.from(Array(n).keys());

	const colIdx = idx(columns);
	const rowIdx = idx(rows);

	return (
		// Row attributes
		<Grid container spacing={2}>
			{rowIdx.map(row => {
				return (
					<Grid className={'grow'} key={row}>
						{/* Column attributes */}
						<Grid container spacing={2}>
							{colIdx.map(col => {
								const idx = row * columns + col;

								return (
									// Handle uneven number of elements
									idx < total && (
										<Grid
											key={col}
											className={`w-1/${columns}`}
										>
											{/* Return child with idx prop */}
											{cloneElement(children, {
												idx: idx,
											})}
										</Grid>
									)
								);
							})}
						</Grid>
					</Grid>
				);
			})}
		</Grid>
	);
}

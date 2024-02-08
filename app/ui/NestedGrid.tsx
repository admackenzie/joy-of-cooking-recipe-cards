import Grid from '@mui/material/Unstable_Grid2';

interface Props {
	children: any;
	rows: number;
	columns: number;
}

export default function NestedGrid({ ...props }: Props) {
	const idx = (n: number) => Array.from(Array(n).keys());

	const rows = 15;
	const columns = 2;

	const rowIdx = idx(rows);
	const colIdx = idx(columns);

	return (
		// Row attributes
		<Grid container spacing={2}>
			{rowIdx.map(row => {
				return (
					<Grid key={row}>
						{/* Column attributes */}
						<Grid container spacing={2}>
							{colIdx.map(col => {
								return <Grid key={col}>{props.children}</Grid>;
							})}
						</Grid>
					</Grid>
				);
			})}
		</Grid>
	);
}

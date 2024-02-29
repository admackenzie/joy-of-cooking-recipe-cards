import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface TableRowData {
	[key: string]: string; // Assuming each column has string data
}

interface TableData {
	headers: string[];
	rows: TableRowData[];
}

function convertHtmlTableToMuiTable(tableElement: HTMLTableElement): TableData {
	const headers: string[] = [];
	const rows: TableRowData[] = [];

	// console.log(tableElement);

	// Extract headers
	const headerRow = tableElement[0].childNodes.filter(n => n.nodeType === 1);

	// console.log(headerRow);
	for (let i = 0; i < headerRow.length; i++) {
		headers.push(headerRow[i].innerText);
	}

	// console.log(headers);

	const bodyRows = tableElement
		.slice(1)
		.map(r => r.childNodes.filter(n => n.nodeType === 1));

	// Extract rows
	for (let i = 1; i < bodyRows.length; i++) {
		const rowData: TableRowData = {};

		for (let j = 0; j < bodyRows[i].length; j++) {
			rowData[headers[j]] = bodyRows[i][j].innerText;

			console.log(j, bodyRows[j]);
		}
		rows.push(rowData);
	}

	// console.log({ headers, rows });

	return { headers, rows };
}

export function HtmlTableToMuiTable({
	tableElement,
}: {
	tableElement: HTMLTableElement;
}) {
	const { headers, rows } = convertHtmlTableToMuiTable(tableElement);

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{headers.map((header, index) => (
							<TableCell key={index}>{header}</TableCell>
						))}
					</TableRow>
				</TableHead>

				<TableBody>
					{rows.map((row, rowIndex) => (
						<TableRow key={rowIndex}>
							{headers.map((header, headerIndex) => (
								<TableCell key={headerIndex}>
									{row[header]}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

// Example usage
const tableElement = document.getElementById(
	'yourHtmlTableId'
) as HTMLTableElement;

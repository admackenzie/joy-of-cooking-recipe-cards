'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import {
	Button,
	Box,
	FormGroup,
	IconButton,
	InputAdornment,
	TextField,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export default function Search() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const [query, setQuery] = useState('');

	const handleSearch = function (term: string) {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set('search', term);
		} else {
			params.delete('search');
		}

		replace(`${pathname}?${params.toString()}`);
	};

	return (
		<FormGroup row>
			<TextField
				defaultValue={searchParams.get('search')?.toString()}
				// helperText="Search recipes here"

				// InputProps={{
				// 	startAdornment: (
				// 		<InputAdornment position="start">
				// 			<SearchIcon />
				// 		</InputAdornment>
				// 	),
				// }}

				label="Search recipes"
				onChange={e => {
					setQuery(e.target.value);
				}}
				type="search"
				variant="outlined"
			/>
			<Button
				onClick={e => {
					handleSearch(query);
				}}
				startIcon={<SearchIcon />}
				variant="contained"
			>
				Search
			</Button>
		</FormGroup>
	);
}

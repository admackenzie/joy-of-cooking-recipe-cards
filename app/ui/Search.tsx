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
	// const pathname = usePathname();
	const { replace } = useRouter();

	const [query, setQuery] = useState('');

	const handleSearch = function (term: string) {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set('search', term);
		} else {
			params.delete('search');
		}

		replace(`/?${params.toString()}`);
	};

	return (
		<FormGroup row>
			<TextField
				sx={{ mr: { xs: '16px', sm: 0 } }}
				className={'w-full max-w-xs'}
				defaultValue={searchParams.get('search')?.toString()}
				// label="Search recipes"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				onChange={e => {
					setQuery(e.target.value);
				}}
				placeholder={'Search recipes'}
				type="search"
				variant={'outlined'}
			/>

			<Button
				onClick={() => {
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

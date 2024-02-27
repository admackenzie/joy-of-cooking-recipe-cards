'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { FormGroup, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

export default function Search() {
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	const [query, setQuery] = useState(
		searchParams.get('search')?.toString() ?? ''
	);

	// Clear search bar when there are no search params
	useEffect(() => {
		!searchParams.size && setQuery('');
	}, [searchParams]);

	const handleSearch = (e: React.FormEvent, term: string) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set('search', term);
		} else {
			params.delete('search');
		}

		// Append query to url
		replace(`/?${params.toString()}`);

		// Remove input focus after submission
		const target = e.target as HTMLElement;
		target.blur();
	};

	return (
		<FormGroup row={true}>
			<TextField
				color={'secondary'}
				className={'max-w-xs'}
				InputProps={{
					// Submit query with mouse/touch event
					startAdornment: (
						<InputAdornment
							className={'py-0'}
							onClick={e => {
								handleSearch(e, query);
							}}
							position="start"
						>
							<SearchIcon
							// color={'primary'}
							/>
						</InputAdornment>
					),
					sx: { fontSize: '1.25rem' },
				}}
				onChange={e => {
					setQuery(e.target.value);
				}}
				// Clear existing query when input is focused
				onFocus={() => setQuery('')}
				// Submit query with Enter key
				onKeyDown={e => {
					e.key === 'Enter' && handleSearch(e, query);
				}}
				placeholder={'Search recipes'}
				type="search"
				value={query}
				variant={'outlined'}
			/>
		</FormGroup>
	);
}

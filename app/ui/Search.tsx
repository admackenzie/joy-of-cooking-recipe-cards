'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
	ClickAwayListener,
	FormGroup,
	InputAdornment,
	TextField,
} from '@mui/material';
import { Close, Search as SearchIcon } from '@mui/icons-material';

interface Props {
	searchFocus: boolean;
	setSearchFocus: any;
}

export default function Search({ searchFocus, setSearchFocus }: Props) {
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	const [query, setQuery] = useState(
		searchParams.get('search')?.toString() ?? ''
	);
	const [highlight, setHighlight] = useState(false);

	// Clear search bar when there are no search params
	useEffect(() => {
		!searchParams.size && setQuery('');
	}, [searchParams]);

	// Focus search bar when search icon is clicked in MobileNav
	useEffect(() => {
		const input = document.getElementById('search');

		searchFocus && input?.focus();
	}, [searchFocus]);

	// Hide app bar when unfocused
	useEffect(() => {
		!highlight && setTimeout(() => setSearchFocus(false), 500);
	}, [highlight, setSearchFocus]);

	const handleSearch = (e: React.FormEvent, term: string) => {
		const params = new URLSearchParams(searchParams);

		term ? params.set('search', term) : params.delete('search');

		// Append query to url
		replace(`/?${params.toString()}`);

		// Remove input focus after submission
		const target = e.target as HTMLElement;
		target.blur();
	};

	return (
		<FormGroup row={true}>
			<TextField
				color={'primary'}
				id={'search'}
				// Change submit button text on mobile keyboards
				inputProps={{ enterKeyHint: 'Search' }}
				InputProps={{
					// Clear input text
					endAdornment: (
						<InputAdornment
							onClick={() => setQuery('')}
							position="start"
							sx={{
								display: `${query === '' ? 'none' : 'flex'}`,
							}}
						>
							<Close />
						</InputAdornment>
					),

					// Submit query with mouse/touch event
					startAdornment: (
						<InputAdornment
							onClick={e => handleSearch(e, query)}
							position="start"
						>
							<SearchIcon
								sx={{
									color: `${highlight && 'primary.main'}`,
								}}
							/>
						</InputAdornment>
					),
					sx: { fontSize: '1.25rem', maxWidth: '20rem' },
				}}
				onBlur={() => setHighlight(false)}
				onChange={e => setQuery(e.target.value)}
				onClick={() => setHighlight(true)}
				// Clear existing query when input is focused
				onFocus={() => {
					setQuery('');
					setHighlight(true);
				}}
				// Submit query with Enter key
				onKeyDown={e => e.key === 'Enter' && handleSearch(e, query)}
				placeholder={`${highlight ? '' : 'Search recipes'}`}
				value={query}
				variant={'outlined'}
			/>
		</FormGroup>
	);
}

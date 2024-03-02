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

// TODO: transition when input text is cleared
// TODO: refactor input as styled(TextField)

export default function Search() {
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	const [query, setQuery] = useState(
		searchParams.get('search')?.toString() ?? ''
	);
	const [focus, setFocus] = useState(false);

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
		setFocus(false);
	};

	return (
		<FormGroup row={true}>
			<ClickAwayListener onClickAway={() => setFocus(false)}>
				<TextField
					color={'primary'}
					InputProps={{
						// Clear input text
						endAdornment: (
							<InputAdornment
								onClick={e => {
									setQuery('');
									setFocus(false);
								}}
								position="start"
								sx={{
									display: `${
										query === '' ? 'none' : 'flex'
									}`,
								}}
							>
								<Close />
							</InputAdornment>
						),

						// Submit query with mouse/touch event
						startAdornment: (
							<InputAdornment
								onClick={e => {
									handleSearch(e, query);
								}}
								position="start"
							>
								<SearchIcon
									sx={{
										color: `${focus && 'primary.main'}`,
									}}
								/>
							</InputAdornment>
						),
						sx: { fontSize: '1.25rem', maxWidth: '20rem' },
					}}
					onChange={e => {
						setQuery(e.target.value);
					}}
					// Clear existing query when input is focused
					onFocus={() => {
						setQuery('');
						setFocus(true);
					}}
					// Submit query with Enter key
					onKeyDown={e => {
						e.key === 'Enter' && handleSearch(e, query);
					}}
					placeholder={`${focus ? '' : 'Search recipes'}`}
					// type="search"
					value={query}
					variant={'outlined'}
				/>
			</ClickAwayListener>
		</FormGroup>
	);
}

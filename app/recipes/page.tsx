import { FetchData, Search } from '@/app/ui/index';
import { Container, Stack } from '@mui/material';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default function Home({ searchParams }: Props) {
	const query = searchParams?.search || '';

	return (
		<Container maxWidth="sm">
			<Stack alignItems={'center'} spacing={2}>
				<span>
					{/* 
            ---- Add optional loading element here ----
            import { Suspense } from 'react';
            import { Skeleton } from '/index';
            <Suspense
				key={query}
				fallback={< Skeleton />}
			></Suspense> 
            */}
				</span>

				<span>
					<Search />
				</span>

				<span>
					<FetchData query={query} />
				</span>
			</Stack>
		</Container>
	);
}

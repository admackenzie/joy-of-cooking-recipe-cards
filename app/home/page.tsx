import { FetchData, Search } from '@/app/components/index';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default function Home({ searchParams }: Props) {
	const query = searchParams?.search || '';

	return (
		<>
			{/* 
            ---- Add optional loading element here ----
            import { Suspense } from 'react';
            import { Skeleton } from '/index';
            <Suspense
				key={query}
				fallback={< Skeleton />}
			></Suspense> 
            */}

			<Search />

			{/* FIXME: this needs TS typing */}
			<FetchData query={query} />
		</>
	);
}

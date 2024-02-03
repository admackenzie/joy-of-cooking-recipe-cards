import { RecipeCard, FetchData, Search } from '../_components/index';

export default function Home({
	searchParams,
}: {
	searchParams?: {
		search?: string;
	};
}) {
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
			<FetchData queryProp={query} />

			{/* Remove this after testing */}
			<RecipeCard />
			<p className="text-blue-600">The quick brown fox...</p>
		</>
	);
}

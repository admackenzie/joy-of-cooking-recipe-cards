import { CardDeck, ChapterList, Layout } from '@/app/ui/index';

import { TEMP_DATA } from '@/app/lib/definitions';

interface Props {
	searchParams?: {
		search?: string;
	};
}

export default async function main({ ...props }: Props) {
	const { search: query } = props.searchParams || '';

	return (
		<Layout
			leftCol={<ChapterList />}
			main={
				<>
					{/* ---- Add optional loading element here ----
					import { Suspense } from 'react';
					import { Skeleton } from '/index';
					
					<Suspense
						key={query}
						fallback={< Skeleton />}
					></Suspense>
				*/}

					<CardDeck data={TEMP_DATA} />
				</>
			}
		/>
	);
}

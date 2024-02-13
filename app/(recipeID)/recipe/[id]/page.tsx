import { RecipeCard } from '@/app/ui/index';

import { TEMP_DATA } from '@/app/lib/definitions';

interface Props {
	params: {
		id: string;
	};
}

export default function id({ params }: Props) {
	const { id } = params || 'NO ID';

	return <RecipeCard data={TEMP_DATA[1]} />;
}

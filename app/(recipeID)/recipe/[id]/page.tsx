interface Props {
	params: {
		id: string;
	};
}

export default function id({ params }: Props) {
	const { id } = params || 'NO ID';

	return <h1>{id}</h1>;
}

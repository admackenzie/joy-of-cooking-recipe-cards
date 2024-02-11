import Link from 'next/link';

interface Props {
	params: {
		id: string;
	};
}

export default function id2({ params }: Props) {
	const { id } = params || 'NO ID';

	return (
		<>
			<h1>modal</h1>
			<h1>{id}</h1>
		</>
	);
}

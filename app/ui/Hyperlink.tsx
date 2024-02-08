import Link from 'next/link';

// FIXME: Improve this interface
interface Props {
	id: string;
	text: string;
	url: Attr | string;
}

export default function Hyperlink({ ...props }: Props) {
	const re = /part\d{2}_sub\d{3}_\d{2}/;
	const href = props.url?.toString().match(re)?.at(0);

	// Filter out anchors that link to themselves or to non-recipe text
	if (href && href !== props.id) {
		return (
			<Link className={'font-bold text-blue-600'} href={href} key={href}>
				{props.text}
			</Link>
		);
	} else {
		// return <TextNode text={node.textContent}/>
		return props.text;
	}
}

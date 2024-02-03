import Link from 'next/link';

export default function LinkEmbed({ ...props }) {
	const { startText, linkText, endText, href } = props.link;
	// console.log(startText, linkText, endText, href);
	return (
		<>
			<span className="text-red">{startText}</span>
			<span>
				<Link href={href}>{linkText}</Link>
			</span>
			<>{endText}</>
		</>
	);
}

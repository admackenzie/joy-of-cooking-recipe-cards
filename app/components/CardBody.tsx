import { createElement, ReactNode } from 'react';
import Link from 'next/link';

import { List, ListItem, ListItemText } from '@mui/material';

interface Props {
	id: string;
	nodeList: any;
}
// Href regex
const re = /part\d{2}_sub\d{3}_\d{2}/i;

export default function CardBody({ id, nodeList }: Props) {
	const getJSX = (nodeList: NodeList): ReactNode[] => {
		return Array.from(nodeList).map((node, i) => {
			// HTML elements
			if (node.nodeType === 1) {
				const { tagName, attributes, childNodes } = node as Element;

				// Convert 'class' to 'className'
				const newAttr: { [key: string]: Attr } = Object.fromEntries(
					Object.entries(attributes).map(([key, val]) => {
						return key === 'class'
							? ['className', val]
							: [key, val];
					})
				);

				// Handle hyperlinks
				const href = newAttr?.href?.toString().match(re)?.at(0);

				//BUG: Some unwanted anchors are not filtered out. See last line of Iced Coffee (the bold I)
				// Filter out anchors that link to themselves or to non-recipe text
				if (href && re.test(href) && href !== id) {
					// console.log(node.textContent, href, id);
					return (
						<Link className={'text-red-500'} href={href} key={href}>
							{node.textContent}
						</Link>
					);
				}

				// Handle lists
				if (tagName === 'UL') {
					return (
						<List key={i}>
							{Array.from(node.childNodes).map((li, j) => {
								return (
									<ListItem key={j}>
										<ListItemText
											primary={getJSX(li.childNodes)}
										/>
									</ListItem>
								);
							})}
						</List>
					);
				}

				/** Create a new JSX element and recursively call the function on its child nodes
				 * @param {string} type - React component type
				 * @param {object} props - Props in new component
				 * @param {function} children - Recursive function
				 * @returns JSX element
				 */
				return createElement(
					tagName.toLowerCase(),
					{ key: i, ...newAttr },
					getJSX(childNodes)
				);
			}
			// Text node
			else if (node.nodeType === 3) {
				const text = node.textContent;

				return text;
			} else {
				// TODO: throw error here
				console.log('WEIRD NODE TYPE');
				return null;
			}
		});
	};

	const el = getJSX(nodeList);

	return <>{el}</>;
}

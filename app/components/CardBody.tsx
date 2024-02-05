import { createElement, ReactNode } from 'react';
import Link from 'next/link';

import { List, ListItem, ListItemText } from '@mui/material';

/**
 * @param id - Recipe id
 * @param nodeList - DOM tree for the recipe's body elements
 * returns
 */
interface Props {
	id: string;
	nodeList: any;
}

export default function CardBody({ id, nodeList }: Props) {
	const getJSX = (nodeList: NodeList): ReactNode[] => {
		return Array.from(nodeList).map((node, i) => {
			// Element nodes
			if (node.nodeType === 1) {
				const { attributes, childNodes, tagName } = node as Element;

				// Convert 'class' to 'className' for React props
				const newProps: { [key: string]: Attr | string } =
					Object.fromEntries(
						Object.entries(attributes).map(([key, val]) => {
							return key === 'class'
								? ['className', val]
								: [key, val];
						})
					);

				// Replace default styling on emphasis text with Tailwind
				if (['B', 'I'].includes(tagName)) {
					newProps['className'] = `${
						tagName === 'B' ? 'font-bold' : 'italic'
					}`;

					return createElement(
						'span',
						{ key: i, ...newProps },
						getJSX(childNodes)
					);
				}

				// Handle hyperlinks. Filter out anchors that link to themselves or to non-recipe text
				const re = /part\d{2}_sub\d{3}_\d{2}/;
				const href = newProps.href?.toString().match(re)?.at(0);

				if (href) {
					if (href !== id) {
						// return <Hyperlink href={href} text={node.textContent}>
						return (
							<Link
								className={'text-red-500'}
								href={href}
								key={href}
							>
								{node.textContent}
							</Link>
						);
					} else {
						// return <TextNode text={node.textContent}/>
						return node.textContent;
					}
				}

				// Handle lists
				if (tagName === 'UL') {
					// Return <IngredientList callback={getJSX} nodeList={node.childNodes} />
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

				/** Create a new JSX element and recursively call the function on its child nodes.
				 * @param {string} type - React component type
				 * @param {object} props - Props in new component
				 * @param {function} children - Recursive function
				 * @returns JSX element
				 */
				return createElement(
					tagName.toLowerCase(),
					{ key: i, ...newProps },
					getJSX(childNodes)
				);
			}
			// Text node
			else if (node.nodeType === 3) {
				// return <TextNode text={node.textContent}/>
				return node.textContent;
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

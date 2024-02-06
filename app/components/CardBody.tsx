import { createElement, ReactNode } from 'react';

import { List, ListItem, ListItemText } from '@mui/material';

import { Hyperlink } from '@/app/components/index';

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

				// Build props for new element
				const newProps: { [key: string]: Attr | string } =
					Object.fromEntries([
						['id', id],
						['text', node.textContent],
						// Convert 'class' to 'className'
						...Object.entries(attributes).map(([key, val]) => {
							return key === 'class'
								? ['className', val]
								: [key, val];
						}),
					]);

				// Remove default styling from emphasis tags
				if (['B', 'I'].includes(tagName)) {
					// Tailwind styling
					newProps['className'] = `${
						tagName === 'B' ? 'font-bold' : 'italic'
					}`;

					return createElement(
						'span',
						{ key: i, ...newProps },
						getJSX(childNodes)
					);
				}

				// Handle hyperlinks
				if (newProps.href) {
					return <Hyperlink key={i} props={newProps} />;
				}

				// Handle lists
				if (tagName === 'UL') {
					// Return <IngredientsList callback={getJSX} nodeList={node.childNodes} />
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

import { createElement, ReactNode } from 'react';

import { Hyperlink, IngredientsList } from '@/app/components/index';

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

				// Create props for a new React element
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

				switch (tagName) {
					// Handle lists
					case 'UL':
						return (
							<IngredientsList callback={getJSX} key={i}>
								{node.childNodes}
							</IngredientsList>
						);

					// Handle hyperlinks
					case 'A':
						return <Hyperlink key={i} props={newProps} />;

					// Remove default styling from emphasis tags
					case 'B':
					case 'I':
						// Replace with Tailwind styling
						newProps['className'] = `${
							tagName === 'B' ? 'font-bold' : 'italic'
						}`;

						return createElement(
							'span',
							{ key: i, ...newProps },
							getJSX(childNodes)
						);
					default:
						/** Create a new JSX element and recursively call the function on its child nodes.
						 * @param {string} type - React component type
						 * @param {object} props - Props in new component
						 * @param {function} children - Recursive function
						 * @returns - JSX element
						 */
						return createElement(
							tagName.toLowerCase(),
							{ key: i, ...newProps },
							getJSX(childNodes)
						);
				}
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

import parse from 'node-html-parser';

import { createElement, ReactNode } from 'react';

import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { Hyperlink } from '@/app/ui/index';

/**
 * @param id - Recipe id
 * FIXME: @param nodeList - DOM tree for the recipe's body elements
 * returns
 */
interface Props {
	id: string;
	html: string;
}

export default function RecipeBody({ id, html }: Props) {
	// Isolate the 'body' part of the HTML string
	const bodyDOM = parse(html.split('\u2003').at(1)!)
		.childNodes as unknown as NodeList;

	const getJSX = (nodeList: NodeList): ReactNode[] => {
		return Array.from(nodeList).map((node, i) => {
			// Element nodes
			if (node.nodeType === 1) {
				const { attributes, tagName } = node as Element;

				// Create props for a new React element
				const newProps: { [key: string]: Attr | string } =
					Object.fromEntries([
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
							<Grid key={i}>
								{Array.from(node.childNodes).map((li, i) => {
									return (
										<Grid
											className={'font-bold ml-8'}
											key={i}
										>
											{getJSX(li.childNodes)}
										</Grid>
									);
								})}
							</Grid>
						);

					// Handle hyperlinks
					case 'A':
						return (
							<Hyperlink
								id={id}
								key={i}
								text={node.textContent!}
								url={newProps.href}
							/>
						);

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
							getJSX(node.childNodes)
						);

					/**
					 * Create a new JSX element and recursively call the function on its child nodes.
					 *
					 * @param {string} type - React component type
					 * @param {object} props - Props in new component
					 * @param {function} children - Recursive function
					 * @returns - JSX element
					 */
					default:
						return createElement(
							tagName.toLowerCase(),
							{ key: i, ...newProps },
							getJSX(node.childNodes)
						);
				}
			}
			// Text node
			else if (node.nodeType === 3) {
				return node.textContent;
			} else {
				// TODO: throw error here
				console.log('WEIRD NODE TYPE');
				return null;
			}
		});
	};

	return <Stack spacing={1}>{getJSX(bodyDOM)}</Stack>;
}

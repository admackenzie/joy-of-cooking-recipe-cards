'use client';

import { useParams } from 'next/navigation';
import { createElement, ReactNode } from 'react';

import Grid from '@mui/material/Unstable_Grid2';

import { Hyperlink } from '@/app/ui/index';

import parse from 'node-html-parser';

/**
 * @param html - HTML string for a recipe
 * returns - Recipe object converted into TSX elements
 */
interface Props {
	html: string;
}

export default function RecipeBody({ html }: Props) {
	const params = useParams<{ id: string }>();

	// Isolate the string 'body' (excluding the title and servings elements) and parse into a DOM for node manipulation
	const bodyDOM = parse(html.split('\u2003').at(1)!)
		.childNodes as unknown as NodeList;

	const getTSX = (nodeList: NodeList): ReactNode[] => {
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
											className={'font-bold ml-4'}
											key={i}
										>
											{getTSX(li.childNodes)}
										</Grid>
									);
								})}
							</Grid>
						);

					// Render hyperlinks only when on a /recipe/[id] route. This removes links from RecipeCards with 'preview' styling and prevents hydration errors with <a> as a descendent of <a>
					case 'A':
						if (params.id) {
							return (
								<Hyperlink
									id={params.id}
									key={i}
									text={node.textContent!}
									url={newProps.href}
								/>
							);
						}

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
							getTSX(node.childNodes)
						);

					// Remove images
					case 'IMG':
						return;

					/**
					 * Create a new TSX element and recursively call the function on its child nodes.
					 *
					 * @param {string} type - React component type
					 * @param {object} props - Props in new component
					 * @param {function} children - Recursive function
					 * @returns - TSX element
					 */
					default:
						return createElement(
							tagName.toLowerCase(),
							{ key: i, ...newProps },
							getTSX(node.childNodes)
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

	return getTSX(bodyDOM);
}

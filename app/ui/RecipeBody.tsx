'use client';

import { useParams } from 'next/navigation';
import { createElement, ReactNode } from 'react';

import {
	Box,
	Container,
	List,
	ListItem,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';

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
		.childNodes as unknown as Node[];

	// Remove text nodes of just whitespace characters
	const filterWS = (nodeList: NodeListOf<ChildNode> | ChildNode[]) =>
		Array.from(nodeList).filter(node =>
			/\w/.test(node.textContent ?? '')
		) as Node[];

	const getTSX = (nodeList: Node[] | NodeListOf<ChildNode>): ReactNode[] => {
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

				const attrToStr = (nnm: NamedNodeMap) =>
					Object.values(nnm).map(attr => attr.toString());

				// Handle edge case: subsections with listed servings
				if (attrToStr(attributes).includes('r-serve'))
					return (
						<Box
							key={i}
							sx={{
								fontStyle: 'italic',
								fontWeight: 'bold',
								marginLeft: '1.5rem',
							}}
						>
							{node.textContent}
						</Box>
					);

				// Handle edge case: Pizza Margherita subsection table
				if (attrToStr(attributes).includes('lev39')) {
					return (
						<Box
							key={i}
							sx={{
								fontWeight: 'bold',
								marginTop: '2rem',
								textAlign: 'center',
							}}
						>
							{node.textContent}
						</Box>
					);
				}

				switch (tagName) {
					// Handle lists
					case 'UL':
						return (
							<Container key={i}>
								<List>
									{filterWS(node.childNodes).map((li, i) => {
										return (
											<ListItem
												disablePadding
												key={i}
												sx={{
													display: 'inline-block',
													fontWeight: 'bold',
												}}
											>
												{getTSX(li.childNodes)}
											</ListItem>
										);
									})}
								</List>
							</Container>
						);

					// FIXME: add collapsible/accordion component for displaying table data at < 600px
					// Handle tables
					case 'TABLE':
						const headRows = Array.from(node.childNodes).at(
							0
						) as unknown as Node[];
						const bodyRows = Array.from(node.childNodes).slice(1);

						return (
							<TableContainer
								key={i}
								sx={{
									marginTop: '1rem',
									marginBottom: 0,
								}}
							>
								<Table
									sx={{
										display: { xs: 'none', sm: 'block' },
										overflow: 'scroll',
									}}
								>
									<TableHead>{getTSX(headRows)}</TableHead>
									<TableBody>
										{getTSX(filterWS(bodyRows))}
									</TableBody>
								</Table>
							</TableContainer>
						);

					case 'TR':
						return (
							<TableRow
								key={i}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								{getTSX(filterWS(node.childNodes))}
							</TableRow>
						);

					case 'TD':
					case 'TH':
						return (
							<TableCell
								key={i}
								sx={{ textAlign: 'center', textWrap: 'pretty' }}
							>
								<Typography
									component={'span'}
									variant={'body1'}
								>
									{getTSX(node.childNodes)}
								</Typography>
							</TableCell>
						);

					// Handle subsection titles
					case 'H4':
						return (
							<Box
								key={i}
								sx={{
									fontWeight: 'bold',
									marginTop: '1rem',
								}}
							>
								{node.textContent}
							</Box>
						);

					// Render hyperlinks only when on a /recipe/[id] route. This removes links from RecipeCards with 'preview' styling and prevents hydration errors with <a> as a descendent of <a>
					case 'A':
						return (
							<Hyperlink
								id={params.id}
								key={i}
								text={node.textContent!}
								url={newProps.href}
							/>
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
				return (
					<Box component={'span'} key={i}>
						{node.textContent}
					</Box>
				);
			} else {
				// TODO: throw error here
				console.log('WEIRD NODE TYPE');
				return null;
			}
		});
	};

	return (
		<Typography
			// Render as <div> to prevent hydration errors with <p> as a descendant of <p>
			component={'div'}
			sx={{ fontSize: '1.25rem', textWrap: 'pretty' }}
			variant={'body1'}
		>
			{getTSX(bodyDOM)}
		</Typography>
	);
}

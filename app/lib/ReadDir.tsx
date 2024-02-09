import { promises as fs } from 'fs';

import { cloneElement, Children } from 'react';

interface Props {
	children: any;
	filter: string;
	path: string;
	sort: any;
}

///(?<=-)(.*?)(?=-)/g
export default async function ReadDir({ ...props }: Props) {
	try {
		// console.log(props.children);

		const renderChildren = props => {
			return (
				props.children &&
				props.children.map(child => {
					return cloneElement(child, {
						fileNames: props.fileNames,
					});
				})
			);
		};

		const files = await fs.readdir(props.path);

		const fileNames = files
			.filter(name => name.includes(props.filter))
			.sort((a, b) => {
				// if (!props.sort) return;

				const idx = (f: string) => +f.match(props.sort)!;

				return idx(a) - idx(b);
			});

		return props.children && renderChildren(fileNames);
	} catch (err) {
		console.log(err);
	}
}

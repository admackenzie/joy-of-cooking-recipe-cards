'use client';
import { useState } from 'react';

import { Box, Container, Dialog } from '@mui/material';

import { RecipeCard } from '@/app/ui/index';

import { Recipe } from '../lib/definitions';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export default function RecipeModal(recipe: Recipe) {
	const [open, setOpen] = useState(true);
	const [selectedValue, setSelectedValue] = useState(emails[1]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	return (
		<SimpleDialog
			selectedValue={selectedValue}
			open={open}
			onClose={handleClose}
			recipe={recipe}
		/>
	);
}

interface SimpleDialogProps {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
	recipe: Recipe;
}

function SimpleDialog(props: SimpleDialogProps) {
	const { onClose, selectedValue, open, recipe } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value: string) => {
		onClose(value);
	};
	if (recipe) {
		return (
			<Dialog onClose={handleClose} open={open}>
				<Container className={'py-4'}>
					<RecipeCard data={recipe} />

					{/* <h1>MODAL</h1> */}
				</Container>
			</Dialog>
		);
	}
}

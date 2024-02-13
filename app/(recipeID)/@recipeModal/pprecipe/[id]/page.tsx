'use client';

import { useState } from 'react';
import { Dialog } from '@mui/material';
import { RecipeCard } from '@/app/ui/index';

import { TEMP_DATA } from '@/app/lib/definitions';

interface Props {
	params: {
		id: string;
	};
}

export default function Page({ params }: Props) {
	const [open, setOpen] = useState(true);

	const { id } = params || 'NO ID';

	const handleClose = () => setOpen(false);

	const random = Math.floor(Math.random() * 5);

	// const data = getRecipeById(params.id)

	return <RecipeCard data={TEMP_DATA[random]} />;
}

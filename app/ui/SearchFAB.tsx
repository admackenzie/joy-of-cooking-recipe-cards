import React from 'react';
import Fab from '@mui/material/Fab';
import KeyboardIcon from '@mui/icons-material/Keyboard';

interface Props {
	onOpenKeyboard: () => void; // Callback to handle keyboard opening
}

export default function SearchFAB({ onOpenKeyboard }: Props) {
	const handleTouch = () => {
		// Trigger the callback to open the keyboard
		onOpenKeyboard();
	};

	return (
		<Fab color="primary" aria-label="Open Keyboard" onClick={handleTouch}>
			<KeyboardIcon />
		</Fab>
	);
}

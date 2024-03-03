'use client';

import { EB_Garamond } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const globalFont = EB_Garamond({
	subsets: ['latin'],
	display: 'swap',
});

const theme = createTheme({
	palette: {
		primary: {
			// 'Joy' red - rgb(238, 36, 36)
			main: '#ee2424',
		},
		secondary: {
			// 'Of cooking' orange - rgb(204, 128, 42)
			main: '#cc802a',
		},
		info: {
			// Hyperlink blue
			main: '#2563eb',
		},
	},
	typography: {
		fontFamily: globalFont.style.fontFamily,
	},
});

export default theme;

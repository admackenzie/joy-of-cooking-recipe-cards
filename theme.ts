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
			// 'jocRed ('Joy')
			main: '#ee2424',
		},
		secondary: {
			// jocBrown ('of cooking')
			main: '#cc802a',
		},
		info: {
			// hyperlinkBlue
			main: '#2563eb',
		},
	},
	typography: {
		fontFamily: globalFont.style.fontFamily,
	},
});

export default theme;

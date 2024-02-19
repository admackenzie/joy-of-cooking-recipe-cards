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
			// 'Joy' red (ruby red #f62217)
			main: '#ee2424',
		},
		secondary: {
			// 'of cooking' orange (brandy punch #cd8429)
			main: '#cc802a',
		},
	},
	typography: {
		fontFamily: globalFont.style.fontFamily,
	},
});

export default theme;

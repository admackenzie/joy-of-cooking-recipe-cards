import type { Metadata } from 'next';
import './globals.css';

// Change global font family for MUI components
import theme from '@/theme';
import { ThemeProvider } from '@mui/material';

export const metadata: Metadata = {
	title: 'Joy of Cooking recipes',
	description: 'Browse recipes from Joy of Cooking (2019)',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</body>
		</html>
	);
}

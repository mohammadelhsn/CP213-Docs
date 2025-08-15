import { createTheme } from '@mui/material';

/** The primary colour for this project */
const primary = '#6093EA';
/** The secondary colour for this project */
const secondary = '#9C27B0';

/** Light theme for this project */
export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});

/** Dark theme for this project */
export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});

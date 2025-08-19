import type { SxProps } from '@mui/material';

/** Styles for the main content area of a card. */
export const cardContentStyles: SxProps = {
	paddingTop: '25px',
	borderRadius: '10px',
	boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
	transition: 'transform 0.2s ease',
};

/** Styles for the body section within a card. */
export const cardBodyStyles: SxProps = {
	paddingTop: '25px',
};

/** Styles for the action area of a card, typically containing buttons. */
export const cardActionStyles: SxProps = {
	justifyContent: 'flex-start',
	paddingLeft: '1.5',
	paddingBottom: '0',
	paddingTop: '25px',
};

/** General styles for button components. */
export const buttonStyles: SxProps = {
	color: 'primary',
	textDecoration: 'none',
	fontWeight: 'bold',
	fontSize: '0.9em',
};

/** Styles for a divider element. */
export const dividerStyle: SxProps = {
	margin: '2rem 0',
	marginLeft: 0,
};

/** Styles for displaying pre-formatted sample output, like code blocks. */
export const sampleOutput: SxProps = {
	p: 2,
	mb: 3,
	bgcolor: 'background.paper',
	fontFamily: 'monospace',
	whiteSpace: 'pre-wrap',
};

/** Styles for chip components. */
export const chipStyle: SxProps = {
	marginRight: '0.8rem',
	bgcolor: 'background.paper',
};

/** Styles for the main container of a projects section. */
export const projectsBox: SxProps = { flexGrow: 1, padding: '3rem 2rem' };

/** Styles for the header of a projects section. */
export const projectsHeader: SxProps = {
	textAlign: 'center',
	marginBottom: '2rem',
};

/** Styles for a grid layout, typically for project cards. */
export const projectsGrid = {
	gap: '2rem',
	height: '100%',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
};

/** General text styling for alignment and wrapping. */
export const textStyle = {
	display: 'flex',
	alignItems: 'center', // use "center" instead of "top" for visual balance
	mb: 1, // space between heading and subheading
	flexWrap: 'wrap', // allow wrapping inside flex container
	wordBreak: 'break-word', // break long words if needed
};

/** Styles for icons, setting color and margin. */
export const iconStyles = {
	color: 'primary.main',
	mr: 1.5,
};

/** Responsive padding styles for container components. */
export const containerStyles: SxProps = {
	px: { xs: 2, sm: 3 },
	py: { xs: 4, sm: 6 },
};

/** Utility styles to center content within a div using flexbox. */
export const divCenter: SxProps = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

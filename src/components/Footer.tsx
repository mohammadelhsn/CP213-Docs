/** ======= MUI COMPONENT ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

/** ======= MUI ICONS ======= */
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

/** ======= SETTINGS ======= */
import Settings from '../data/Settings';

/** Footer for this project */
const Footer = () => {
	return (
		<Box component="footer" textAlign="center" py={4} sx={{
			boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
			bgcolor: ({ palette }) => palette.background.default,
			color: ({ palette }) => palette.text.secondary
		}}>
			<Box display="flex" justifyContent="center" gap={3}>
				{/** // TODO: Make this into a component */}
				<IconButton
					component="a"
					href={`mailto:${Settings.email}`}
					aria-label="Send Email"
					title="Email"
					color="primary"
				>
					<Email />
				</IconButton>
				{/** // TODO: Make this into a component */}
				<IconButton
					href={Settings.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					title="GitHub"
					color="primary"
					component='a'>
					<GitHub />
				</IconButton>
				{/** // TODO: Make this into a component */}
				<IconButton
					component="a"
					href={Settings.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					title="LinkedIn"
					color="primary"
				>
					<LinkedIn />
				</IconButton>
			</Box>
			<Typography variant="body2" sx={{ mt: 3, color: ({ palette }) => palette.text.secondary }}>
				© 2025 {Settings.name}. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;

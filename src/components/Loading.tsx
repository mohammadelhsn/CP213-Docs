/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/** ======= MUI ICONS ======= */
import CircularProgress from '@mui/material/CircularProgress';

/** ======= STYLES ======= */
import { divCenter } from '../data/Styles';

/** Loading Page */
const Loading = () => {
    return (
        // TODO: Make this maxWidth='xl'?
        <Container maxWidth="sm">
            <Box
                sx={{
                    flexDirection: 'column',
                    height: '70vh',
                    textAlign: 'center',
                    ...divCenter
                }}
            >
                <CircularProgress size={60} thickness={5} color="primary" />
                <Typography variant="h6" sx={{ mt: 3 }}>
                    Loading your content...
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: ({ palette }) => palette.text.secondary }}>
                    Please wait a moment.
                </Typography>
            </Box>
        </Container>
    );
};

export default Loading;
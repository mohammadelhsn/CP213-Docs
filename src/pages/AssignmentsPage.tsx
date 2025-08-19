/** ======= REACT ======= */
import { useNavigate } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

/** ======= MUI ICONS ======= */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListIcon from '@mui/icons-material/List';
import BiotechIcon from '@mui/icons-material/Biotech';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SectionWrapper from '../components/Section';

/** ======= CUSTOM COMPONENTS ======= */
import ItemList from '../components/ItemList';

/** ======= TYPES, STYLES & FUNCTIONS ======= */
import type { LabsAssignmentsOpts } from '../data/Data';
import { containerStyles, iconStyles, textStyle } from '../data/Styles';
import { enableFile } from '../data/Functions';

// Create a page for the lab/assignment showing all the labs/assignments

const LabsAssignmentsPage = (opts: LabsAssignmentsOpts) => {
	/** Pick the icon to use based on what type of data is being loaded */
	const Icon = opts.type == 'assignment' ? AssignmentIcon : opts.type == 'example' ? LightbulbIcon : BiotechIcon;
	/** Determine whether a file is being used or not */
	const isFile = enableFile(opts.type);
	/** //! Does this need to be higher??? useState usually comes before everything */
	const navigate = useNavigate();
	return (
		<Container maxWidth="xl" sx={containerStyles}>
			<Box sx={{ mb: 2 }}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box>
				<Typography variant="h2" sx={textStyle}>
					<Icon fontSize='inherit' sx={iconStyles} /> {opts.type === 'assignment' ? 'Assignments' : opts.type == 'lab' ? 'Labs' : 'Examples'}
				</Typography>
				<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
					Here are the documented {opts.type}s.
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<SectionWrapper title="Documentation" icon={ListIcon}>
				<ItemList itemType={opts.type} isFile={isFile}></ItemList>
			</SectionWrapper>
		</Container >
	);
};

export default LabsAssignmentsPage;
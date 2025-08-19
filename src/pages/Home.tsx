/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/** ======= MUI ICONS ======= */
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BiotechIcon from '@mui/icons-material/Biotech';
import ComputerIcon from '@mui/icons-material/Computer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TopicIcon from '@mui/icons-material/Topic';

/** ======= CUSTOM COMPONENTS ======= */
import CardLinks from '../components/CardLinks';
import SectionWrapper from '../components/Section';
import TechList from '../components/TechList';
import TopicsAccordion from '../components/Topic';

/** ======= SETTINGS & STYLES ======= */
import Settings from '../data/Settings';
import { containerStyles, iconStyles, textStyle } from '../data/Styles';

const CP213DocsMain = () => {
	return (
		<Container maxWidth="xl" sx={containerStyles}>
			<Box>
				<Typography
					variant="h2"
					sx={textStyle}
				>
					<DataObjectIcon
						fontSize="inherit"
						sx={iconStyles}
					/>
					{Settings.courseName}
				</Typography>

				<Typography
					variant="h5" // smaller than h3 to improve visual hierarchy under h2
					sx={{
						fontStyle: 'italic',
						color: ({ palette }) => palette.text.secondary
					}}
				>
					Wilfrid Laurier University — {Settings.term}
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<SectionWrapper title="Overview" icon={SummarizeIcon}>
				{/* prettier-ignore */}
				<Paper elevation={3} sx={{ padding: '20px' }}>
					<p>
						This repository contains my coursework, assignments, and projects for <strong>{Settings.courseName}</strong> at <strong>Wilfrid Laurier University</strong>. The course explores core object-oriented programming concepts in Java, such as classes, inheritance, polymorphism, encapsulation, and abstraction, as well as the use of data structures and algorithms in an object-oriented context.
					</p>
				</Paper>
			</SectionWrapper>
			<SectionWrapper title={`Docs Structure`} icon={MenuBookIcon}>
				<Paper
					component="pre"
					elevation={3}
					sx={{
						color: ({ palette }) => palette.text.primary,
						p: 2,
						borderRadius: 1,
						fontFamily: 'monospace',
						fontSize: '0.875rem',
						lineHeight: 1.5,
						overflowX: 'auto',
					}}
				>
					{`mohammadelhsn.github.io/${Settings.courseCode}/
├── #/assignments/                    → All assignments list
├── #/assignments/${Settings.baseAssignment}01        → Assignment A01 summary page
├── #/assignments/${Settings.baseAssignment}01/t01    → Task 1 inside assignment A01
├── #/labs/                           → All labs list
├── #/labs/${Settings.baseLab}02               → Lab 2 summary page
└── #/labs/${Settings.baseLab}02/t03           → Task 3 inside lab 2`}
				</Paper>
			</SectionWrapper>
			<SectionWrapper title="Topics" icon={TopicIcon}>
				<Paper elevation={3}>
					<TopicsAccordion />
				</Paper>
			</SectionWrapper>
			<SectionWrapper title="Technologies" icon={ComputerIcon}>
				<TechList />
			</SectionWrapper>
			<SectionWrapper title="Explore the Docs" icon={ArticleIcon}>
				<Grid container spacing={3}>
					<CardLinks
						title="Assignments"
						desc="All assignments with generated documentation."
						itemType="assignment"
						icon={AssignmentIcon}
					/>
					<CardLinks
						title="Labs"
						desc="Hands-on labs that apply key data structure concepts."
						itemType="lab"
						icon={BiotechIcon}
					/>
					{Settings.exampleEnable == true && <CardLinks
						title="Examples"
						desc="Mini examples, snippets, and helper code from class."
						itemType="example"
						icon={LightbulbIcon}
					/>}
				</Grid>
			</SectionWrapper>
			<Divider sx={{ my: 4 }} />
			<Grid container spacing={4}>
				<Grid size={{ md: 6, xs: 12 }}>
					<Paper
						elevation={1}
						sx={{
							height: '100%',
							p: 3,
							borderRadius: 2,
						}}
					>
						<Typography
							variant="h6"
							sx={textStyle}
						>
							<NoteAltIcon fontSize="inherit"
								sx={iconStyles} /> Notes
						</Typography>
						<Divider sx={{ my: 2 }} />
						<Typography variant="body1" sx={{ color: ({ palette }) => palette.text.secondary }}>
							This repository is for educational use and follows academic
							policies set by <strong>Wilfrid Laurier University</strong>. If
							you're a {Settings.courseCode} student, please ensure your
							submissions maintain academic integrity.
						</Typography>
					</Paper>
				</Grid>

				{/* Right column */}
				<Grid size={{ md: 6, xs: 12 }}>
					<Paper
						elevation={1}
						sx={{
							height: '100%',
							p: 3,
							borderRadius: 2,
						}}
					>
						<Typography
							variant="h6"
							sx={textStyle}
						>
							<ContactSupportIcon fontSize="inherit"
								sx={iconStyles} /> Contact
						</Typography>
						<Divider sx={{ my: 2 }} />
						<Typography variant="body1" sx={{ ...textStyle, color: ({ palette }) => palette.text.secondary }} component={'pre'}>
							<GitHubIcon fontSize="inherit"
								sx={iconStyles} /> GitHub:{' '}
							<Link
								href={Settings.github}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									color: ({ palette }) => palette.primary.main,
									'&:visited': { color: ({ palette }) => palette.primary.main },
									'&:hover': { textDecoration: 'underline' },
								}}
							>
								{Settings.github_handle}
							</Link>
						</Typography>
						<Typography variant="body1" sx={{ ...textStyle, color: ({ palette }) => palette.text.secondary }} component='pre'>
							<ContactMailIcon fontSize="inherit"
								sx={iconStyles} /> Email:{' '}
							<Link
								href={`mailto:${Settings.email}`}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									color: ({ palette }) => palette.primary.main,
									'&:visited': { color: ({ palette }) => palette.primary.main },
									'&:hover': { textDecoration: 'underline' },
								}}
							>
								{Settings.email}
							</Link>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			<Divider sx={{ my: 4 }} />
		</Container>
	);
};

export default CP213DocsMain;

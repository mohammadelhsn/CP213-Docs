/** ======= REACT & REACT ROUTER ======= */
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/** ======= MUI ICONS ======= */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BuildIcon from '@mui/icons-material/Build';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DescriptionIcon from '@mui/icons-material/Description';
import OutputIcon from '@mui/icons-material/Output';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

/** ======= CUSTOM COMPONENTS ======= */
import FunctionsPage from './FunctionsPage';
import Loading from '../components/Loading';
import SectionWrapper from '../components/Section';

/** ======= TYPES & STYLES ======= */
import { type LabsAssignmentsOpts, type TaskPageParams } from '../data/Data';
import { containerStyles, dividerStyle, sampleOutput, textStyle } from '../data/Styles';
import type { AssessmentDataType, TaskData } from '@mohammadelhsn/portfolio-api-wrapper/dist/interfaces/Interfaces';
import Settings from '../data/Settings';

/** Display Tasks */
const TaskDisplay = (opts: LabsAssignmentsOpts) => {
	/** The assignment number and taskNumber */
	const { num, task } = useParams<TaskPageParams>();
	const navigate = useNavigate();
	/** The data for the task from the API */
	const [taskData, setTaskData] = useState<TaskData | null>(null);
	/** The parents data for the task from the API */
	const [parentSection, setParentSection] = useState<AssessmentDataType | null>(null);
	/** The loading state for the page */
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchTask = async () => {
			if (!num || !task) return;

			const shortNum = num.slice(-2);
			const taskNum = num.slice(-2);
			try {
				const res = opts.type === 'assignment'
					? await Settings.api.getAssignment(shortNum, taskNum)
					: await Settings.api.getLab(shortNum, taskNum);

				if (res?.data) setTaskData(res.data as TaskData);


				// Also fetch the full parent section (lab or assignment) to use later
				const sectionRes = opts.type === 'assignment'
					? await Settings.api.getAssignment(shortNum)
					: await Settings.api.getLab(shortNum);

				if (sectionRes?.data) {
					setParentSection(sectionRes.data as AssessmentDataType);
				}
			} catch (e) {
				console.error('Failed to fetch task:', e);
			} finally {
				setLoading(false);
			}
		};

		fetchTask();
	}, [num, task, opts.type]);

	// Handle loading 
	if (loading) return (<Loading />);
	// Handle error
	if (parentSection?.functions && task === 'functions') {
		return (
			<FunctionsPage
				functions={parentSection.functions}
				constants={parentSection.constants || []}
				parent={num || ''}
			/>
		);
	}
	if (!taskData || !parentSection) {
		return (
			<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: 1 }}>
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
				<Typography variant="h5">❌ Task not found</Typography>
			</Container>
		);
	}
	return (
		<Container maxWidth="lg" sx={containerStyles}>
			<Box sx={{ mb: 2 }}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h2" sx={textStyle}>
					{taskData.name}
				</Typography>
				<Typography variant="h5" sx={{ fontStyle: 'italic', color: ({ palette }) => palette.text.secondary }}>
					{opts.type === 'assignment' ? `Assignment: ${parentSection.id}` : `Lab: ${parentSection.id}`}
				</Typography>
			</Box>
			<Divider sx={dividerStyle} />
			<SectionWrapper title="Description" icon={DescriptionIcon}>
				<Paper elevation={3} sx={{ p: 2, mb: 3 }}>
					<Typography>{taskData.description}</Typography>
				</Paper>
			</SectionWrapper>
			<SectionWrapper title="Objectives" icon={ChecklistIcon}>
				<List>
					{taskData.objectives.map((obj, index) => (
						<ListItem key={index} component={Paper} elevation={3} sx={{ mb: 1, borderRadius: 2, px: 2, py: 1, boxShadow: 1, gap: 1.5, alignItems: 'flex-start' }}>
							<ListItemText primary={obj} />
						</ListItem>
					))}
				</List>
			</SectionWrapper>
			<SectionWrapper title="Sample Output" icon={OutputIcon}>
				<Paper elevation={3} sx={sampleOutput}>
					{taskData.sampleOutput}
				</Paper>
			</SectionWrapper>
			<SectionWrapper title="Skills Demonstrated" icon={BuildIcon}>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
					{taskData.skills.map((skill, index) => (
						<Chip key={index} label={skill} variant="outlined" />
					))}
				</Box>
			</SectionWrapper>
		</Container>
	);
};

export default TaskDisplay;

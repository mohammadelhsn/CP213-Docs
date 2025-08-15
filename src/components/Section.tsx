/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

/** ======= TYPES & STYLES ======= */
import { type SectionOpts } from '../data/Data';
import { iconStyles } from '../data/Styles';

/** Section Wrapper */
const SectionWrapper = (opts: SectionOpts) => {
	return (
		<Box component="section" sx={{ mb: 6 }}>
			<Card
				elevation={1}
				sx={{
					backgroundColor: ({ palette }) => palette.background.paper,
					borderRadius: 2,
				}}
			>
				<CardContent>
					<Typography
						variant="h4"
						sx={{
							display: 'flex',
							alignItems: 'center',
							mb: 2,
							color: ({ palette }) => palette.text.primary
						}}
					>
						{opts.icon && (
							<opts.icon
								fontSize="inherit"
								sx={iconStyles}
							/>
						)}
						{opts.title}
					</Typography>
					<Divider
						sx={{
							my: 2,
							borderColor: ({ palette }) => palette.divider,
						}}
					/>
					<Box>{opts.children}</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default SectionWrapper;

/** ======= REACT ======= */
import { Link } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

/** ======= FUNCTIONS, TYPES & STYLES ======= */
import { type CardTypes } from '../data/Data';
import { getItemType } from '../data/Functions';
import Settings from '../data/Settings';
import {
	buttonStyles,
	cardActionStyles,
	cardBodyStyles,
	iconStyles,
	textStyle
} from '../data/Styles';

const small = Settings.exampleEnable ? 6 : 8;
const md = Settings.exampleEnable ? 4 : 6;

/** Card Links */
const CardLinks = (opts: CardTypes) => {
	const itemType = getItemType(opts.itemType);
	const itemTypeCap = getItemType(opts.itemType, true);
	return (
		<Grid size={{ xs: 12, sm: small, md: md }}>
			<Paper
				elevation={3}
				sx={{
					p: 3,
					borderRadius: 2,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
				}}
			>
				<Box sx={{ mb: 2 }}>
					<Typography
						variant="h4"
						sx={textStyle}
					>
						{opts.icon && (
							<opts.icon
								fontSize="inherit"
								sx={iconStyles}
							/>
						)}
						{opts.title}
					</Typography>
					<Divider />
					<Typography variant="body1" sx={cardBodyStyles}>
						{opts.desc}
					</Typography>
				</Box>
				<Box sx={cardActionStyles}>
					<Button
						size="small"
						component={Link}
						to={itemType}
						sx={buttonStyles}
					>
						View{' '}
						{itemTypeCap}{' '}
						→
					</Button>
				</Box>
			</Paper>
		</Grid>
	);
};

export default CardLinks;

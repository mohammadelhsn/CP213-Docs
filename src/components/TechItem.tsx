/** ======= MUI COMPONENTS ======= */
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

/** ======= TYPES ======= */
import type { TechItemOpts } from '../data/Data';
import { iconStyles } from '../data/Styles';

/** Tech Item */
const TechItem = (opts: TechItemOpts) => {
	return (
		<ListItem>
			<ListItemText
				primary={
					<Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
						{opts.icon && (
							<opts.icon
								fontSize="inherit"
								sx={iconStyles}
							/>
						)}
						<strong>{opts.bolded}</strong>&nbsp;{opts.nonBolded}
					</Typography>
				}
			/>
		</ListItem>
	);
};

export default TechItem;

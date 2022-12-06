import { useShowCurrentTime } from '../../../hooks/useShowCurrentTime';
import { Typography } from '@mui/material';
const DigitalClock = () => {
	const currentTime = useShowCurrentTime();
	return (
		<Typography align='center' variant='h2'>
			{currentTime}
		</Typography>
	);
};
export default DigitalClock;

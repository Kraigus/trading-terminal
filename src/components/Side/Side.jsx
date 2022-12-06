import { Box, Typography } from '@mui/material';

const Side = ({ type, price, color, dispatch }) => {
	return (
		<Box onClick={() => dispatch({ type })} style={{ cursor: 'pointer' }}>
			<Typography
				variant='h2'
				style={{
					color,
					textAlign: 'center',
				}}
			>
				{type}
			</Typography>
			<Typography
				variant='h2'
				style={{
					color,
				}}
			>
				{price}
			</Typography>
		</Box>
	);
};
export default Side;

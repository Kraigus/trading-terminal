import { Box } from '@mui/material';
const WrapperContainer = ({ children }) => {
	return (
		<Box
			sx={{
				width: '80vw',
				maxHeight: '100%',
				margin: 'auto',
				marginTop: '5vh',
			}}
		>
			{children}
		</Box>
	);
};
export default WrapperContainer;

import { useReducer } from 'react';
import { Box } from '@mui/material';
import TradersDialog from '../TradersDialog/TradersDialog';
import Side from '../Side/Side';
import { dialogReducer } from '../../helpers/helpers';
import { sideTypes } from '../../constants';

const TradersBlock = ({ instrumentInfo }) => {
	const [state, dispatch] = useReducer(dialogReducer, {
		open: false,
		type: '',
	});
	const { open, type } = state;
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignSelf: 'center',
					gap: '50px',
					flexWrap: 'wrap',
					justifyContent: 'center',
				}}
			>
				{sideTypes.map((type) => {
					const color = type === 'BUY' ? 'green' : 'red';
					const price =
						type === 'BUY'
							? instrumentInfo.buy
							: instrumentInfo.sell;
					return (
						<Side
							key={type}
							type={type}
							price={price}
							color={color}
							dispatch={dispatch}
						/>
					);
				})}
			</Box>
			<TradersDialog
				instrumentInfo={instrumentInfo}
				open={open}
				type={type}
				onClose={() => dispatch({ type: 'CLOSE', payload: false })}
			/>
		</>
	);
};
export default TradersBlock;

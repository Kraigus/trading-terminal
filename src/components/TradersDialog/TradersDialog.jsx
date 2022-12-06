import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TextField from '@mui/material/TextField';
import { GlobalContext } from '../../context/context';
import { createNewDate } from '../../helpers/helpers';

const TradersDialog = ({ onClose, open, type, instrumentInfo }) => {
	const { setArchive } = useContext(GlobalContext);
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = (value) => {
		setArchive({
			type: 'ADD',
			payload: {
				side: type,
				price: value,
				instrument: instrumentInfo.title,
				volume: inputValue,
				timestamp: createNewDate(),
			},
		});
		onClose();
	};

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	let value = null;
	switch (type) {
		case 'BUY':
			value = instrumentInfo.buy;
			break;
		case 'SELL':
			value = instrumentInfo.sell;
			break;
		default:
			break;
	}
	return (
		<Dialog onClose={onClose} open={open}>
			<DialogTitle>Make order</DialogTitle>
			<DialogContent>
				<DialogContentText
					sx={{ color: type === 'BUY' ? 'green' : 'red' }}
				>{`${type} ${value} ${instrumentInfo.title}`}</DialogContentText>
				<TextField
					id='Volume'
					label='Volume'
					required
					type='number'
					fullWidth
					variant='standard'
					InputProps={{
						inputProps: { min: 0 },
					}}
					onChange={(e) => handleChange(e)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button
					disabled={!inputValue}
					onClick={() => handleSubmit(value)}
				>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default TradersDialog;

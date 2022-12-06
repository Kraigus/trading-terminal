import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const InstrumentSelect = ({ state, setState, options, label }) => {
	const handleChange = (event) => {
		setState(event.target.value);
	};
	return (
		<FormControl size='small' sx={{ maxWidth: '800px', width: '100%', margin: 'auto' }}>
			<InputLabel id={`${label}-select-label`}>{label}</InputLabel>
			<Select
				labelId={`${label}-select-label`}
				id={`${label}-select`}
				value={state}
				label={label}
				onChange={handleChange}
			>
				{options.map((el, i) => {
					return (
						<MenuItem key={el} value={i}>
							{el}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};
export default InstrumentSelect;

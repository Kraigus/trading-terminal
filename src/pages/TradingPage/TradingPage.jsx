import { useState } from 'react';
import DigitalClock from '../../components/UI/DigitalClock/DigitalClock';
import InstrumentSelect from '../../components/InstrumentSelect/InstrumentSelect';
import TradersBlock from '../../components/TradersBlock/TradersBlock';
import { useShuffleCurrency } from '../../hooks/useShuffleCurrency';
import { options } from '../../constants';
import { Box } from '@mui/material';

const TradingPage = () => {
	const [instrument, setInstrument] = useState(0);
	const currentList = useShuffleCurrency();
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: '40px'
			}}
		>
			<DigitalClock />
			<InstrumentSelect
				state={instrument}
				setState={setInstrument}
				options={options}
				label='Instrument'
			/>
			<TradersBlock
				instrumentInfo={currentList[instrument]}
			/>
		</Box>
	);
};
export default TradingPage;

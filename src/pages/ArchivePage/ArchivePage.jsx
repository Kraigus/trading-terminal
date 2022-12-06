import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GlobalContext } from '../../context/context';

function createData(side, price, instrument, volume, timestamp) {
	return { side, price, instrument, volume, timestamp };
}

const ArchivePage = () => {
	const { archive } = useContext(GlobalContext);
	const rows = archive.rows.map((el) => createData(...el));

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Side</TableCell>
						<TableCell align='right'>Price</TableCell>
						<TableCell align='right'>Instrument</TableCell>
						<TableCell align='right'>Volume</TableCell>
						<TableCell align='right'>Timestamp</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.timestamp}
							sx={{
								'&:last-child td, &:last-child th': {
									border: 0,
								},
							}}
						>
							<TableCell
								sx={{
									color: row.side === 'BUY' ? 'green' : 'red',
								}}
								component='th'
								scope='row'
							>
								{row.side}
							</TableCell>
							<TableCell align='right'>{row.price}</TableCell>
							<TableCell align='right'>
								{row.instrument}
							</TableCell>
							<TableCell align='right'>{row.volume}</TableCell>
							<TableCell align='right'>{row.timestamp}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default ArchivePage;

import { useEffect, useState } from 'react';
import { getRandom } from '../helpers/helpers';

const generateTemplate = () => {
	return [
		{
			title: 'USD/CAD_TOM',
			buy: getRandom(1.4, 1.6),
			sell: getRandom(1.4, 1.6),
		},
		{
			title: 'USD/RUB_TOM',
			buy: getRandom(60, 80),
			sell: getRandom(60, 80),
		},
		{
			title: 'GBP/USD_SPOT',
			buy: getRandom(1.2, 1.4),
			sell: getRandom(1.2, 1.4),
		},
	];
};

export const useShuffleCurrency = () => {
	const [currentList, setCurrentList] = useState(generateTemplate());
	useEffect(() => {
		let timer = setInterval(() => {
			setCurrentList(generateTemplate());
		}, [10000]);
		return () => clearInterval(timer);
	}, []);
	return currentList;
};

import { useEffect, useState } from 'react';
import { createNewDate } from '../helpers/helpers';
export const useShowCurrentTime = () => {
	const [currentTime, setCurrentTime] = useState(createNewDate());
	useEffect(() => {
		let timer = setInterval(() => {
			setCurrentTime(createNewDate(false));
		}, [10]);
		return () => clearInterval(timer);
	}, []);
	return currentTime;
};

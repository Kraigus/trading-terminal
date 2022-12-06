import { useState, useEffect } from 'react';
export const useSessionStorage = (
	key,
	defaultValue,
	{ serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
	const [state, setState] = useState(() => {
		const valueInLocalStorage = window.sessionStorage.getItem(key);
		if (valueInLocalStorage) {
			return deserialize(valueInLocalStorage);
		}
		return defaultValue;
	});

	useEffect(() => {
		window.sessionStorage.setItem(key, serialize(state));
	}, [key, state, serialize]);
	return [state, setState];
};

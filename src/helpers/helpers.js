export const dialogReducer = (state, action) => {
	const { type } = action;
	switch (type) {
		case 'BUY':
		case 'SELL': {
			return { ...state, open: true, type };
		}
		case 'CLOSE': {
			return { ...state, open: false };
		}
		case 'OPEN': {
			return { ...state, open: true };
		}
		default: {
			throw new Error(`Unsupported action type: ${type}`);
		}
	}
};

export const archiveReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD':
			return { rows: [Object.values(payload), ...state.rows] };
		default: {
			throw new Error(`Unsupported action type: ${type}`);
		}
	}
};

export const getRandom = (min, max) => {
	return (Math.random() * (max - min) + min).toFixed(4);
};
export const createNewDate = (withMilliseconds = true) => {
	return withMilliseconds
		? `${new Date().toLocaleTimeString()}.${new Date().getMilliseconds()}`
		: `${new Date().toLocaleTimeString()}`;
};

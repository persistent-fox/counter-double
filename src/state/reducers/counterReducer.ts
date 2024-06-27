type TChangeMaxValue = {
	type: 'CHANGE MAX-VALUE';
	value: number;
};
type TChangeStartValue = {
	type: 'CHANGE START-VALUE';
	value: number;
};

type TChangeBoardValue = {
	type: 'CHANGE BOARD-VALUE';
	value: number;
};

export type TActions = TChangeMaxValue | TChangeStartValue | TChangeBoardValue;

const initialState = {
	maxValue: 0,
	startValue: 0,
	boardValue: 0,
};

export const counterReducer = (state = initialState, action: TActions) => {
	switch (action.type) {
		case 'CHANGE MAX-VALUE':
			return { ...state, maxValue: action.value };
		case 'CHANGE START-VALUE':
			return { ...state, startValue: action.value };
		case 'CHANGE BOARD-VALUE':
			return { ...state, boardValue: action.value };

		default:
			return state;
	}
};

export const changeMaxValueAC = (value: number): TChangeMaxValue => {
	return {
		type: 'CHANGE MAX-VALUE',
		value: value,
	};
};
export const changeStartValueAC = (value: number): TChangeStartValue => {
	return {
		type: 'CHANGE START-VALUE',
		value: value,
	};
};
export const changeBoardValueAC = (value: number): TChangeBoardValue => {
	return {
		type: 'CHANGE BOARD-VALUE',
		value: value,
	};
};

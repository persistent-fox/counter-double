export type TValues = 'startValue' | 'maxValue' | 'boardValue';

export type TValue = {
	id: string;
	title: string;
	value: string;
	error: boolean;
};

export type TBoard = {
	id: string;
	value: string;
	error: boolean;
};

export type TDisabledBtn = {
	id: string;
	disabled: boolean;
};

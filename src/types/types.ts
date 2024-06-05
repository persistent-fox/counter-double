export type TValueKeys = 'startValue' | 'maxValue' | 'boardValue';

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

export type TControlButtons = {
	id: string;
	disabled: boolean;
};

export type TValues = Record<TValueKeys, string>;

import { FlexWrapper } from '../FlexWrapper';
import { ValueFields } from '../value-fields/ValueFields';
import { SetValue } from '../set-value/SetValue';
import { InfoBoard } from '../info-board/InfoBoard';
import { ControlButtons } from '../control-buttons/ControlButtons';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { max, start, board } from '../../mock/data';
import { TBoard, TValue } from '../../types/types';

export const Counter = () => {
	const [boardValue, setBoardValue] = useState<TBoard>({
		id: board,
		value: 'enter values and press "set"',
		error: false,
	});
	const [values, setValues] = useState<TValue[]>([
		{
			id: start,
			value: '0',
			title: 'start value',
			error: false,
		},
		{
			id: max,
			value: '0',
			title: 'max value',
			error: false,
		},
	]);

	const onChangeValue = (id: string, value: string) => {};

	const onChangeIncHandler = () => {
		if (+boardValue.value + 1 === +values[1].value) {
			setBoardValue({ ...boardValue, value: (+boardValue.value + 1).toString(), error: true });
		}
		if (+boardValue.value + 1 < +values[1].value) {
			setBoardValue({ ...boardValue, value: (+boardValue.value + 1).toString() });
		}
	};

	const onChangeResetHandler = () => {
		setBoardValue({ ...boardValue, value: values[0].value, error: false });
	};

	const setValuesHandler = () => {
		localStorage.setItem('values', JSON.stringify(values));
		localStorage.setItem('board', JSON.stringify({ ...boardValue, value: values[0].value }));
		setBoardValue({ ...boardValue, value: values[0].value });
	};

	useEffect(() => {
		const storageValues = localStorage.getItem('values');
		const storageBoard = localStorage.getItem('board');
		if (storageValues && storageBoard) {
			setValues(JSON.parse(storageValues));
			setBoardValue(JSON.parse(storageBoard));
		}
	}, []);

	return (
		<StyledCounter>
			<FlexWrapper gap='20px' direction='column'>
				<ValueFields values={values} onChangeValue={onChangeValue} />
				<SetValue setValuesHandler={setValuesHandler} />
			</FlexWrapper>

			<FlexWrapper gap='20px' direction='column'>
				<InfoBoard boardValue={boardValue} />
				<ControlButtons onChangeIncHandler={onChangeIncHandler} onChangeResetHandler={onChangeResetHandler} />
			</FlexWrapper>
		</StyledCounter>
	);
};

const StyledCounter = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	padding: 10px;
`;

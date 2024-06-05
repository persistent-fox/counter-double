import { FlexWrapper } from '../FlexWrapper';
import { ValueFields } from '../value-fields/ValueFields';
import { InfoBoard } from '../info-board/InfoBoard';
import { ControlButtons } from '../control-buttons/ControlButtons';
import { styled } from 'styled-components';
import { useEffect, useMemo, useState } from 'react';
import { max, start, board, set, reset, inc } from '../../mock/data';
import { TBoard, TValue } from '../../types/types';
import { SetValue } from '../set-value/SetValue';
import { Field } from '../field/Field';

export const Counter = () => {
	const [isShownSettings, setIsShownSettings] = useState(false);
	const [controlButtons, setControlButtons] = useState([
		{
			id: set,
			disabled: false,
		},
		{
			id: reset,
			disabled: false,
		},
		{
			id: inc,
			disabled: false,
		},
	]);

	const [values, setValues] = useState({
		startValue: '0',
		maxValue: '0',
		boardValue: 'enter values and press "set"',
	});
	const startValueError = +values.startValue >= +values.maxValue || +values.startValue < 0;
	const maxValueError = +values.startValue >= +values.maxValue || +values.maxValue < 0;
	const boardValueError = +values.boardValue === +values.startValue;

	const onToggle = () => {
		setIsShownSettings(true);
	};

	const onChangeIncHandler = () => {};

	const onChangeResetHandler = () => {};

	const setValuesHandler = () => {};

	useEffect(() => {
		const storageValues = localStorage.getItem('values');
		const storageBoard = localStorage.getItem('board');
	}, []);

	return (
		<StyledCounter>
			<FlexWrapper gap='20px' direction='column'>
				{isShownSettings ? (
					<>
						{/* <ValueFields values={values} onChangeValue={onChangeValue} /> */}
						<Field value={item.value} callback={onChange} error={startValueError} label={'start value'} />
						<Field value={item.value} callback={onChange} error={item.error} label={'max value'} />
						<SetValue values={values} setValuesHandler={setValuesHandler} />
					</>
				) : (
					<>
						<InfoBoard boardValue={boardValue} />
						<ControlButtons
							onChangeIncHandler={onChangeIncHandler}
							onChangeResetHandler={onChangeResetHandler}
							onToggle={onToggle}
						/>
					</>
				)}
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

import { FlexWrapper } from '../FlexWrapper';
import { ValueFields } from '../value-fields/ValueFields';
import { InfoBoard } from '../info-board/InfoBoard';
import { ControlButtons } from '../control-buttons/ControlButtons';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { max, start, board, set, reset, inc } from '../../mock/data';
import { TBoard, TValue } from '../../types/types';
import { SetValue } from '../set-value/SetValue';

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

	const onChangeValue = (id: string, value: string) => {
		const currentValue = values.find(item => item.id === id);
		if (+value < 0 || !currentValue) {
			setValues(values.map(item => (item.id === id ? { ...item, value, error: true } : item)));
		} else {
			if (currentValue.id === start) {
				switch (true) {
					case +value === +values[1].value:
						return setValues(
							values.map(item => (item.id === id ? { ...item, value, error: true } : { ...item, error: true }))
						);

					case +value > +values[1].value:
						return setValues(
							values.map(item => (item.id === id ? { ...item, value, error: true } : { ...item, error: true }))
						);

					default:
						return setValues(
							values.map(item =>
								item.id === id
									? { ...item, value, error: false }
									: { ...item, error: +values[1].value < 0 ? true : false }
							)
						);
				}
			}
			if (currentValue.id === max) {
				switch (true) {
					case +value === +values[0].value:
						return setValues(
							values.map(item => (item.id === id ? { ...item, value, error: true } : { ...item, error: true }))
						);

					case +value < +values[0].value:
						return setValues(
							values.map(item => (item.id === id ? { ...item, value, error: true } : { ...item, error: true }))
						);

					default:
						return setValues(
							values.map(item =>
								item.id === id
									? { ...item, value, error: false }
									: { ...item, error: +values[0].value < 0 ? true : false }
							)
						);
				}
			}
		}
	};

	const onToggle = () => {
		setIsShownSettings(true);
	};

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
		setIsShownSettings(false);
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
				{isShownSettings ? (
					<>
						<ValueFields values={values} onChangeValue={onChangeValue} />
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

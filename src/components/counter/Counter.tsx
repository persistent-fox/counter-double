import { FlexWrapper } from '../FlexWrapper';
import { InfoBoard } from '../info-board/InfoBoard';
import { ControlButtons } from '../control-buttons/ControlButtons';
import { useEffect, useState } from 'react';
import { SetValue } from '../set-value/SetValue';
import { S } from './Counter_Styles';
import { Field } from '../field/Field';
import { useDispatch } from 'react-redux';
import { changeBoardValueAC, changeMaxValueAC, changeStartValueAC } from '../../state/reducers/counterReducer';
import { useSelector } from 'react-redux';
import { TRootReducer } from '../../state/store';

export const Counter = () => {
	const dispatch = useDispatch();
	const boardValue = useSelector<TRootReducer, number>(state => state.counter.boardValue);
	const startValue = useSelector<TRootReducer, number>(state => state.counter.startValue);
	const maxValue = useSelector<TRootReducer, number>(state => state.counter.maxValue);
	const [isShownSettings, setIsShownSettings] = useState(false);

	const maxError = maxValue < startValue || maxValue < 0 || startValue === maxValue;
	const startError = maxValue < startValue || startValue < 0 || startValue === maxValue;
	const boardError = maxError || startError || boardValue === maxValue;

	const onToggle = () => {
		dispatch(changeBoardValueAC(startValue));
		setIsShownSettings(prevState => !prevState);
	};

	const onChangeStartValue = (value: number) => {
		dispatch(changeStartValueAC(value));
	};

	const onChangeMaxValue = (value: number) => {
		dispatch(changeMaxValueAC(value));
	};

	const onChangeIncHandler = () => {
		if (boardValue === maxValue) return;
		dispatch(changeBoardValueAC(boardValue + 1));
	};

	const onChangeResetHandler = () => {
		dispatch(changeBoardValueAC(startValue));
	};

	const setValuesHandler = () => {
		localStorage.setItem('maxValue', maxValue.toString());
		localStorage.setItem('startValue', startValue.toString());
		localStorage.setItem('boardValue', startValue.toString());
		onToggle();
	};

	useEffect(() => {
		const storageMaxValue = localStorage.getItem('maxValue');
		const storageStartValue = localStorage.getItem('startValue');
		const storageBoardValue = localStorage.getItem('boardValue');
		if (storageMaxValue && storageStartValue && storageBoardValue) {
			dispatch(changeMaxValueAC(+storageMaxValue));
			dispatch(changeStartValueAC(+storageStartValue));
			dispatch(changeBoardValueAC(+storageBoardValue));
		}
	}, []);

	return (
		<S.Counter>
			<FlexWrapper gap='20px' direction='column'>
				{!isShownSettings ? (
					<>
						<S.ValueFields>
							<Field error={startError} value={startValue} callback={onChangeStartValue} label={'start value'} />
							<Field error={maxError} value={maxValue} callback={onChangeMaxValue} label={'max value'} />
						</S.ValueFields>

						<SetValue maxError={maxError} startError={startError} setValuesHandler={setValuesHandler} />
					</>
				) : (
					<>
						<InfoBoard error={boardError} value={boardValue} />
						<ControlButtons
							error={boardError}
							onChangeResetHandler={onChangeResetHandler}
							onChangeIncHandler={onChangeIncHandler}
							onToggle={onToggle}
						/>
					</>
				)}
			</FlexWrapper>
		</S.Counter>
	);
};

import { FlexWrapper } from '../FlexWrapper';
import { InfoBoard } from '../info-board/InfoBoard';
import { ControlButtons } from '../control-buttons/ControlButtons';
import { useEffect, useState } from 'react';
import { SetValue } from '../set-value/SetValue';
import { S } from './Counter_Styles';
import { Field } from '../field/Field';

export const Counter = () => {
	const [isShownSettings, setIsShownSettings] = useState(false);
	const [maxValue, setMaxValue] = useState('0');
	const [startValue, setStartValue] = useState('0');
	const [boardValue, setBoardValue] = useState('enter values and press "set"');
	const [maxError, setMaxError] = useState(false);
	const [startError, setStartError] = useState(false);
	const [boardError, setBoardError] = useState(false);

	const onToggle = () => {
		setBoardValue(startValue);
		setIsShownSettings(prevState => !prevState);
	};

	const onChangeStartValue = (value: string) => {
		switch (true) {
			case +value < 0 || +value > +maxValue:
				setStartError(true);
				break;
			case +value === +maxValue:
				setStartError(true);
				setMaxError(true);
				break;
			case +value < +maxValue && +maxValue > 0 && +value > 0:
				setStartError(false);
				setMaxError(false);
				break;
		}
		setStartValue(value);
	};

	const onChangeMaxValue = (value: string) => {
		switch (true) {
			case +value < 0 || +value < +startValue:
				setMaxError(true);
				break;
			case +value === +startValue:
				setStartError(true);
				setMaxError(true);
				break;
			case +value > +startValue && +startValue > 0 && +value > 0:
				setStartError(false);
				setMaxError(false);
				break;
		}
		setMaxValue(value);
	};

	const onChangeIncHandler = () => {
		if (+boardValue === +maxValue) return;
		+boardValue + 1 === +maxValue ? setBoardError(true) : setBoardError(false);
		setBoardValue(prevState => (+prevState + 1).toString());
	};

	const onChangeResetHandler = () => {
		setBoardValue(startValue);
		setBoardError(false);
	};

	const setValuesHandler = () => {
		localStorage.setItem('maxValue', maxValue);
		localStorage.setItem('startValue', startValue);
		localStorage.setItem('boardValue', startValue);
		onToggle();
	};

	useEffect(() => {
		const storageMaxValue = localStorage.getItem('maxValue');
		const storageStartValue = localStorage.getItem('startValue');
		const storageBoardValue = localStorage.getItem('boardValue');
		if (storageMaxValue && storageStartValue && storageBoardValue) {
			setMaxValue(storageMaxValue);
			setStartValue(storageStartValue);
			setBoardValue(storageBoardValue);
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

						<SetValue setValuesHandler={setValuesHandler} />
					</>
				) : (
					<>
						<InfoBoard error={boardError} value={boardValue} />
						<ControlButtons
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

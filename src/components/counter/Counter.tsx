import { FlexWrapper } from '../FlexWrapper';
import { InfoBoard } from '../info-board/InfoBoard';
import { ControlButtons } from '../control-buttons/ControlButtons';
import { useEffect, useState } from 'react';
import { SetValue } from '../set-value/SetValue';
import { ValueFields } from '../value-fields/ValueFields';
import { TValues } from '../../types/types';
import { StyledCounter } from './Counter_Styles';

export const Counter = () => {
	const [isShownSettings, setIsShownSettings] = useState(false);

	const [values, setValues] = useState<TValues>({
		startValue: '0',
		maxValue: '0',
		boardValue: 'enter values and press "set"',
	});

	const onToggle = () => {
		setValues({ ...values, boardValue: values.startValue });
		setIsShownSettings(prevState => !prevState);
	};

	useEffect(() => {
		const storageValues = localStorage.getItem('values');
		if (storageValues) {
			setValues(JSON.parse(storageValues));
		}
	}, []);

	return (
		<StyledCounter>
			<FlexWrapper gap='20px' direction='column'>
				{!isShownSettings ? (
					<>
						<ValueFields setValues={setValues} values={values} />

						<SetValue onToggle={onToggle} values={values} />
					</>
				) : (
					<>
						<InfoBoard values={values} />
						<ControlButtons onToggle={onToggle} setValues={setValues} values={values} />
					</>
				)}
			</FlexWrapper>
		</StyledCounter>
	);
};

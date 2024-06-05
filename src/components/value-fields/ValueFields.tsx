import { Field } from '../field/Field';
import { TValues } from '../../types/types';
import { S } from './ValueFields_Styles';

type TValueFieldsProps = {
	values: TValues;
	setValues: (values: TValues) => void;
};

export const ValueFields = ({ values, setValues }: TValueFieldsProps) => {
	const onChangeStartValue = (value: string) => {
		setValues({ ...values, startValue: value, boardValue: value });
	};

	const onChangeMaxValue = (value: string) => {
		setValues({ ...values, maxValue: value, boardValue: values.startValue });
	};
	const startValueError = +values.startValue >= +values.maxValue || +values.startValue < 0;
	const maxValueError = +values.startValue >= +values.maxValue || +values.maxValue < 0;

	return (
		<S.ValueFields>
			<Field value={values.startValue} callback={onChangeStartValue} error={startValueError} label={'start value'} />
			<Field value={values.maxValue} callback={onChangeMaxValue} error={maxValueError} label={'max value'} />
		</S.ValueFields>
	);
};

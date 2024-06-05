import { Button } from '../button/Button';
import { TValues } from '../../types/types';
import { S } from './SetValue_Styles';

type TSetValueProps = {
	values: TValues;
	onToggle: () => void;
};

export const SetValue = ({ values, onToggle }: TSetValueProps) => {
	const setValueError = +values.startValue >= +values.maxValue || +values.maxValue < 0 || +values.startValue < 0;

	const setValuesHandler = () => {
		localStorage.setItem('values', JSON.stringify(values));
		onToggle();
	};

	return (
		<S.SetValue>
			<Button error={setValueError} callback={setValuesHandler}>
				set
			</Button>
		</S.SetValue>
	);
};

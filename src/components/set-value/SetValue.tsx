import { Button } from '../button/Button';
import { S } from './SetValue_Styles';

type TSetValueProps = {
	setValuesHandler: () => void;
	maxError: boolean;
	startError: boolean;
};

export const SetValue = ({ setValuesHandler, startError, maxError }: TSetValueProps) => {
	return (
		<S.SetValue>
			<Button error={maxError || startError} callback={setValuesHandler}>
				set
			</Button>
		</S.SetValue>
	);
};

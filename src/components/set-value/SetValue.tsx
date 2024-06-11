import { Button } from '../button/Button';
import { TValues } from '../../types/types';
import { S } from './SetValue_Styles';

type TSetValueProps = {
	setValuesHandler: () => void;
};

export const SetValue = ({ setValuesHandler }: TSetValueProps) => {
	return (
		<S.SetValue>
			<Button error={false} callback={setValuesHandler}>
				set
			</Button>
		</S.SetValue>
	);
};

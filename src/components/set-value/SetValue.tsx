import { styled } from 'styled-components';
import { Button } from '../button/Button';
import { TValue } from '../../types/types';

type TSetValueProps = {
	setValuesHandler: () => void;
	values: TValue[];
};

export const SetValue = ({ values, setValuesHandler }: TSetValueProps) => {
	return (
		<StyledSetValue>
			<Button error={values.find(item => item.error) ? true : false} callback={setValuesHandler}>
				set
			</Button>
		</StyledSetValue>
	);
};

const StyledSetValue = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px 30px;
	border-radius: 10px;
	border: 3px solid ${props => props.theme.colors.accent};
`;

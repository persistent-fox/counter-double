import { styled } from 'styled-components';
import { Button } from '../button/Button';
import { TDisabledBtn, TValue } from '../../types/types';

type TSetValueProps = {};

export const SetValue = ({}: TSetValueProps) => {
	return (
		<StyledSetValue>
			<Button>set</Button>
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

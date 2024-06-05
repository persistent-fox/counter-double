import { styled } from 'styled-components';
import { Button } from '../button/Button';
import { TControlButtons, TValues } from '../../types/types';
import { FC } from 'react';

type TControlButtonsProps = {
	values: TValues;
	setValues: (values: TValues) => void;
};

export const ControlButtons: FC<TControlButtonsProps> = ({ values, setValues }) => {
	return (
		<StyledControlButtons>
			<Button error={false} callback={() => {}}>
				inc
			</Button>
			<Button error={false} callback={() => {}}>
				reset
			</Button>
			<Button error={false} callback={() => {}}>
				set
			</Button>
		</StyledControlButtons>
	);
};

const StyledControlButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 40px;
	width: 100%;
	padding: 10px 30px;
	border-radius: 10px;
	border: 3px solid ${props => props.theme.colors.accent};
`;

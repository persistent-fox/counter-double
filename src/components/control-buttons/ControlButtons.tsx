import { styled } from 'styled-components';
import { Button } from '../button/Button';
import { FC } from 'react';

type TControlButtonsProps = {
	onToggle: () => void;
	onChangeResetHandler: () => void;
	onChangeIncHandler: () => void;
};

export const ControlButtons: FC<TControlButtonsProps> = ({ onToggle, onChangeIncHandler, onChangeResetHandler }) => {
	return (
		<StyledControlButtons>
			<Button error={false} callback={onChangeIncHandler}>
				inc
			</Button>
			<Button error={false} callback={onChangeResetHandler}>
				reset
			</Button>
			<Button error={false} callback={onToggle}>
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

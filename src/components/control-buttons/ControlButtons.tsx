import { styled } from 'styled-components';
import { Button } from '../button/Button';
import { FC } from 'react';

type TControlButtonsProps = {
	onToggle: () => void;
	onChangeResetHandler: () => void;
	onChangeIncHandler: () => void;
	error: boolean;
};

export const ControlButtons: FC<TControlButtonsProps> = ({
	error,
	onToggle,
	onChangeIncHandler,
	onChangeResetHandler,
}) => {
	return (
		<StyledControlButtons>
			<Button error={error} callback={onChangeIncHandler}>
				inc
			</Button>
			<Button callback={onChangeResetHandler}>reset</Button>
			<Button callback={onToggle}>set</Button>
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

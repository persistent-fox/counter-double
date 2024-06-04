import { styled } from 'styled-components';
import { Button } from '../button/Button';

type TControlButtonsProps = {
	onChangeResetHandler: () => void;
	onChangeIncHandler: () => void;
	onToggle: () => void;
};

export const ControlButtons = ({ onChangeResetHandler, onChangeIncHandler, onToggle }: TControlButtonsProps) => {
	return (
		<StyledControlButtons>
			<Button callback={onChangeIncHandler}>inc</Button>
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

import { styled } from 'styled-components';
import { Button } from '../button/Button';
import { TValues } from '../../types/types';
import { FC } from 'react';

type TControlButtonsProps = {
	values: TValues;
	setValues: (values: TValues) => void;
	onToggle: () => void;
};

export const ControlButtons: FC<TControlButtonsProps> = ({ values, setValues, onToggle }) => {
	const onChangeIncHandler = () => {
		const newValue = (+values.boardValue + 1).toString();
		setValues({ ...values, boardValue: +newValue <= +values.maxValue ? newValue : values.boardValue });
	};

	const onChangeResetHandler = () => {
		setValues({ ...values, boardValue: values.startValue });
	};

	const incBtnError = +values.boardValue === +values.maxValue;
	const resetBtnError = +values.boardValue === +values.startValue;

	return (
		<StyledControlButtons>
			<Button error={incBtnError} callback={onChangeIncHandler}>
				inc
			</Button>
			<Button error={resetBtnError} callback={onChangeResetHandler}>
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

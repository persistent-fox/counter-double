import { ChangeEvent } from 'react';
import { css, styled } from 'styled-components';
import { TValue } from '../../types/types';

type TFieldProps = {};

export const Field = ({}: TFieldProps) => {
	return (
		<StyledField>
			<Label htmlFor=''>:</Label>
			<Input type='number' />
		</StyledField>
	);
};

type TInputProps = {};

export const StyledField = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	width: 100%;
`;

const Label = styled.label`
	font-weight: 900;
	font-size: 30px;
	color: ${props => props.theme.colors.accent};
`;

const Input = styled.input<TInputProps>`
	max-width: 228px;
	width: 100%;
	padding: 10px 15px;
	border: 3px solid ${props => props.theme.colors.accent};
	border-radius: 5px;
	color: ${props => props.theme.colors.primary};
	font-weight: 900;
	text-align: center;
`;

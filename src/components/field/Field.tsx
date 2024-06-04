import { ChangeEvent } from 'react';
import { css, styled } from 'styled-components';

type TFieldProps = {
	error: boolean;
	value: string;
	label: string;
	callback: (value: string) => void;
};

export const Field = ({ label, value, error, callback }: TFieldProps) => {
	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		callback(e.currentTarget.value);
	};

	return (
		<StyledField>
			<Label htmlFor=''>{label}:</Label>
			<Input error={error ? 'error' : ''} value={value} onChange={onChange} type='number' />
		</StyledField>
	);
};

type TInputProps = {
	error: string;
};

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
	${props =>
		props.error === 'error' &&
		css`
			background-color: ${props => props.theme.colors.tertiary};
			border: 3px solid ${props => props.theme.colors.error};
		`}
`;

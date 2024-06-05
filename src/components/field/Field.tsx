import { ChangeEvent } from 'react';
import { Input, Label, StyledField } from './Field_Styles';

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

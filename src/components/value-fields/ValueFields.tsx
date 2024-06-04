import { styled } from 'styled-components';
import { Field, StyledField } from '../field/Field';
import { TValue } from '../../types/types';

type TValueFieldsProps = {
	values: TValue[];
	onChangeValue: (id: string, value: string) => void;
};

export const ValueFields = ({ values, onChangeValue }: TValueFieldsProps) => {
	return (
		<StyledValueFields>
			{values.map(item => {
				const onChange = (value: string) => {
					onChangeValue(item.id, value);
				};
				return <Field value={item.value} callback={onChange} error={item.error} label={item.title} key={item.id} />;
			})}
		</StyledValueFields>
	);
};

const StyledValueFields = styled.div`
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: 3px solid ${props => props.theme.colors.accent};
	${StyledField}:first-child {
		margin-bottom: 20px;
	}
`;

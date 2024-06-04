import { styled } from 'styled-components';
import { Field, StyledField } from '../field/Field';
import { board } from '../../mock/data';

type TValueFieldsProps = {};

export const ValueFields = ({}: TValueFieldsProps) => {
	return (
		<StyledValueFields>
			<Field />;
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

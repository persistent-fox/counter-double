import { styled } from 'styled-components';
import { StyledField } from '../field/Field_Styles';

const ValueFields = styled.div`
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	border: 3px solid ${props => props.theme.colors.accent};
	${StyledField}:first-child {
		margin-bottom: 20px;
	}
`;

export const S = {
	ValueFields,
};

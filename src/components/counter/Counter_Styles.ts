import { styled } from 'styled-components';
import { StyledField } from '../field/Field_Styles';

export const Counter = styled.div`
	display: flex;
	justify-content: center;
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	padding: 10px;
`;

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
	Counter,
	ValueFields,
};

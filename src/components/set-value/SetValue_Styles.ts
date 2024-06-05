import { styled } from 'styled-components';

const SetValue = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px 30px;
	border-radius: 10px;
	border: 3px solid ${props => props.theme.colors.accent};
`;

export const S = {
	SetValue,
};

import styled, { css } from 'styled-components';
import { TValue } from '../../types/types';

type TInfoBoardProps = {};

export const InfoBoard = ({}: TInfoBoardProps) => {
	return <StyledInfoBoard></StyledInfoBoard>;
};

type TStyledInfoBoardProps = {};

const StyledInfoBoard = styled.span<TStyledInfoBoardProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	padding: 10px 15px;
	border-radius: 5px;
	min-height: 134px;
	font-size: 30px;
	font-weight: 900;
	text-align: center;
	background-color: transparent;
	border: 3px solid ${props => props.theme.colors.accent};
	color: ${props => props.theme.colors.accent};
`;

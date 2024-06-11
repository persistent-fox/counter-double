import React from 'react';
import { styled } from 'styled-components';

type TButtonProps = {
	children: React.ReactNode;
	callback: () => void;
	error?: boolean;
};

export const Button = ({ error, callback, children }: TButtonProps) => {
	const onClick = () => {
		callback();
	};
	return (
		<StyledButton disabled={error} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export const StyledButton = styled.button`
	font-size: 30px;
	padding: 10px 20px;
	border-radius: 10px;
	color: ${props => props.theme.colors.primary};
	background-color: ${props => props.theme.colors.accent};
	font-weight: 900;
	line-height: 0.8;
	&:disabled {
		opacity: 0.5;
		cursor: no-drop;
	}
`;

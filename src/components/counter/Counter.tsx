import { FlexWrapper } from '../FlexWrapper';
import { ValueFields } from '../value-fields/ValueFields';
import { SetValue } from '../set-value/SetValue';
import { InfoBoard } from '../info-board/InfoBoard';
import { ControlButtons } from '../control-buttons/ControlButtons';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { TDisabledBtn, TValue } from '../../types/types';
import { board, inc, max, reset, set, start } from '../../mock/data';

export const Counter = () => {
	const onChangeValue = (key: string, value: string) => {};

	const onChangeIncHandler = () => {};

	const onChangeResetHandler = () => {};

	const setValuesHandler = () => {};

	useEffect(() => {}, []);

	return (
		<StyledCounter>
			<FlexWrapper gap='20px' direction='column'>
				<ValueFields />
				<SetValue />
			</FlexWrapper>

			<FlexWrapper gap='20px' direction='column'>
				<InfoBoard />
				<ControlButtons />
			</FlexWrapper>
		</StyledCounter>
	);
};

const StyledCounter = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 800px;
	width: 100%;
	margin: 0 auto;
	padding: 10px;
`;

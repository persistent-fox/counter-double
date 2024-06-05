import { TValues } from '../../types/types';
import { S } from './InfoBoard_Styles';

type TInfoBoardProps = {
	values: TValues;
};

export const InfoBoard = ({ values }: TInfoBoardProps) => {
	const boardValueError = +values.boardValue === +values.startValue;
	return <S.InfoBoard error={boardValueError ? 'error' : ''}>{values.boardValue}</S.InfoBoard>;
};

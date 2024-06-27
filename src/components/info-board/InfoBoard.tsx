import { S } from './InfoBoard_Styles';

type TInfoBoardProps = {
	value: number;
	error: boolean;
};

export const InfoBoard = ({ value, error }: TInfoBoardProps) => {
	return <S.InfoBoard error={error ? 'error' : ''}>{value}</S.InfoBoard>;
};

/// <reference types="react" />
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './cardTeam.scss';
export interface CardTeamProps {
    teamName?: string;
    members?: string[];
    onClickEdit?: onClickType;
    onClickDelete?: onClickType;
    onClickView?: onClickType;
    teamColor?: string;
}
declare const CardTeam: (props: CardTeamProps) => JSX.Element;
export default CardTeam;

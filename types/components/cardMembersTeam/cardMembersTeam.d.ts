/// <reference types="react" />
import '../../styles.scss';
export interface CardMembersTeamProps {
    name?: string;
    role?: string;
    incompletedTasks?: number;
}
declare const CardMembersTeam: (props: CardMembersTeamProps) => JSX.Element;
export default CardMembersTeam;

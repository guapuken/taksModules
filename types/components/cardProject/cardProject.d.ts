/// <reference types="react" />
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './cardProject.scss';
type statusTypes = 'onTime' | 'delayed' | 'outOfTime';
export interface CardProjectProps {
    progress?: number;
    status?: statusTypes;
    onClickFollowProject?: onClickType;
    onClickShowDetails?: onClickType;
    onClickShare?: onClickType;
    incompletedTask?: number;
    completedTask?: number;
    ejecutivo?: string;
    projectName?: string;
    followNotificationsValue?: boolean;
}
declare const CardProject: (props: CardProjectProps) => JSX.Element;
export default CardProject;

/// <reference types="react" />
import { onChangeType, onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
type submenus = {
    id?: number | string;
    className?: string;
    onClick?: onClickType;
    title?: string;
};
type statusTypes = 'onTime' | 'delayed' | 'outOfTime';
export interface CardTaskProps {
    onClickShowDetails?: onClickType;
    onClickEditar?: onClickType;
    onClickFollow?: onClickType;
    onClickRecordatorio?: onClickType;
    onClickComentario?: onClickType;
    onClickFecha?: onClickType;
    onChangeNotificationSwitch?: onChangeType;
    status?: statusTypes;
    taskName?: string;
    taskDescription?: string;
    valueResponsable?: string;
    valueRevision?: string;
    idNotification: string;
    followNotificationsValue?: boolean;
    subtasks?: number;
    percentTask?: number;
    responsables?: submenus[];
    equipos?: submenus[];
    revision?: submenus[];
}
declare const CardTask: (props: CardTaskProps) => JSX.Element;
export default CardTask;

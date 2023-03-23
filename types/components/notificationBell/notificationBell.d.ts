/// <reference types="react" />
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './notificationBell.scss';
export interface NotificationBellProps {
    Children?: any;
    notifications?: {
        title?: string;
        onClick?: onClickType;
    }[];
}
declare const NotificationBell: (props: NotificationBellProps) => JSX.Element;
export default NotificationBell;

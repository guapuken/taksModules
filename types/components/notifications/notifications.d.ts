/// <reference types="react" />
import { onChangeType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './notifications.scss';
export interface NotificationsProps {
    checkValue?: boolean;
    onChange?: onChangeType;
    idNotification?: string;
}
declare const Notifications: (props: NotificationsProps) => JSX.Element;
export default Notifications;

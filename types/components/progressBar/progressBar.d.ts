/// <reference types="react" />
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
type statusTypes = 'onTime' | 'delayed' | 'outOfTime';
export interface ProgressBarProps {
    valor?: number;
    status?: statusTypes;
    width?: number;
    onClick?: onClickType;
    styleContent?: {};
}
declare const ProgressBar: (props: ProgressBarProps) => JSX.Element;
export default ProgressBar;

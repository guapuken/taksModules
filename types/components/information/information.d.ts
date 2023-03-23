/// <reference types="react" />
import '../../styles.scss';
import './information.scss';
type positionInfoTypes = 'left' | 'right' | 'top' | 'bottom' | 'left_top' | 'left_bottom' | 'right_top' | 'right_bottom' | 'center';
export interface InformationProps {
    width?: number;
    height?: number;
    info?: string;
    positionInfo?: positionInfoTypes;
    color?: string;
    iconInfo?: string;
    style?: {};
    className?: string;
}
declare const Information: (props: InformationProps) => JSX.Element;
export default Information;

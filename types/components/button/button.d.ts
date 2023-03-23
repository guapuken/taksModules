import { CSSProperties } from 'react';
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
type sizeTypes = 'small' | 'medium' | 'large';
export interface ButtonProps {
    legend?: string;
    onClick?: onClickType;
    size?: sizeTypes;
    color?: string;
    colorHover?: string;
    className?: string;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    rounded?: boolean;
    disabled?: boolean;
    style?: CSSProperties;
    styleIcon?: CSSProperties;
    border?: boolean;
    float?: boolean;
    id?: string;
    key?: string;
    icon?: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;

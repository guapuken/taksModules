/// <reference types="react" />
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
type compositionTypes = 'horizontal' | 'vertical' | 'box';
type sizeTypes = 'small' | 'medium' | 'large';
type stringTypes = {
    primary?: string;
    secondary?: string;
    tertiary?: string;
};
type BooleanTypes = {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
};
type ObjectTypes = {
    primary?: {};
    secondary?: {};
    tertiary?: {};
};
type FunctionTypes = {
    primary?: onClickType;
    secondary?: onClickType;
    tertiary?: onClickType;
};
export interface ButtonsProps {
    composition?: compositionTypes;
    legends?: stringTypes;
    colorButtons?: stringTypes;
    buttons?: BooleanTypes;
    icons?: stringTypes;
    colorHover?: stringTypes;
    className?: stringTypes;
    disabled?: BooleanTypes;
    style?: ObjectTypes;
    styleIcon?: ObjectTypes;
    id?: stringTypes;
    keys?: stringTypes;
    onClick?: FunctionTypes;
    size?: sizeTypes;
    styleComposition?: {};
    rounded?: boolean;
    border?: boolean;
    float?: boolean;
}
declare const Buttons: (props: ButtonsProps) => JSX.Element;
export default Buttons;

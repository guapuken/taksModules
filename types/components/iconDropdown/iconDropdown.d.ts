/// <reference types="react" />
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './iconDropdown.scss';
type submenusArray = {
    onClick?: onClickType;
    id?: string | number;
    title?: string;
};
type optionsType = {
    onClick?: onClickType;
    submenus?: submenusArray[];
    id?: string;
    title?: string;
    className?: string;
};
export interface IconDropdownProps {
    options?: optionsType[];
    onClick?: onClickType;
    icon?: string | any;
    className?: string;
    legend?: string;
    title?: string;
    style?: {};
    iconStyles?: {};
}
declare const IconDropdown: (props: IconDropdownProps) => JSX.Element;
export default IconDropdown;

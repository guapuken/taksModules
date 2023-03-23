/// <reference types="react" />
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './optionmenu.scss';
type menusOptionsTypes = {
    title?: string;
    onClick?: onClickType;
};
type conCategoriaTypes = {
    title?: string;
    menus?: menusOptionsTypes[];
};
type menusTypes = {
    conCategoria?: conCategoriaTypes[];
    sinCategoria?: menusOptionsTypes[];
};
export interface OptionmenuProps {
    menus?: menusTypes[];
    width?: string;
    height?: string;
}
declare const Optionmenu: (props: OptionmenuProps) => JSX.Element;
export default Optionmenu;

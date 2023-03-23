/// <reference types="react" />
import { onClickType } from '../../../utils/types/typesUtils';
type submenus = {
    id?: number | string;
    className?: string;
    onClick?: onClickType;
    title?: string;
};
type optionsType = {
    id?: string;
    submenus?: submenus[];
    title?: string;
    onClick?: onClickType;
    className?: string;
};
interface IconMoreOptionsProps {
    onClickEliminar?: onClickType;
    onClickRecordatorio?: onClickType;
    options?: optionsType[];
}
export declare const IconMoreOptions: (props: IconMoreOptionsProps) => JSX.Element;
export {};

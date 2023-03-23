import { CSSProperties } from 'react';
import { onClickType } from '../../../utils/types/typesUtils';
type submenus = {
    id?: number | string;
    className?: string;
    onClick?: onClickType;
    title?: string;
};
interface IconAsignProps {
    involucrados?: number;
    responsables?: submenus[];
    equipos?: submenus[];
    revision?: submenus[];
    className?: string;
    style?: CSSProperties;
    styleCircle?: CSSProperties;
    valueResponsable?: string;
    valueRevision?: string;
    iconStyle?: CSSProperties;
    options?: {
        title?: string;
        onClick?: onClickType;
        submenus?: submenus[];
    }[];
}
export declare const IconAsign: (props: IconAsignProps) => JSX.Element;
export {};

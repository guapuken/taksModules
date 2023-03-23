import { CSSProperties } from 'react';
import { onClickType } from './types/typesUtils';
export declare const AsideContainer: ({ children }: any) => JSX.Element;
interface AsideButtonItemProps {
    onClick?: onClickType;
    src?: string;
    title?: string;
}
export declare const AsideButtonItem: (props: AsideButtonItemProps) => JSX.Element;
type buttonstypes = {
    img?: string;
    onClick?: onClickType;
    titleToShow?: string;
};
interface ButtonsArrayProps {
    vertical?: boolean;
    style?: any;
    buttons?: buttonstypes[];
    children?: any;
    size: number;
}
export declare const ButtonsArray: (props: ButtonsArrayProps) => JSX.Element;
interface ButtonItemProps {
    children?: any;
    img?: string;
    alt?: string;
    onClick?: onClickType;
    style?: CSSProperties;
    styleImg?: CSSProperties;
    title?: string;
}
export declare const ButtonItem: (props: ButtonItemProps) => JSX.Element;
export {};

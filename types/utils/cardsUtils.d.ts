/// <reference types="react" />
import { onClickType } from './types/typesUtils';
export declare function involucrados(valueResponsable: any, valueRevision: any): 2 | 1 | 0;
export declare function sizeCard(): number;
export declare function returnSize(): number;
interface CardContainerProps {
    width?: string;
    height?: string;
    children?: any;
}
export declare const CardContainer: (props: CardContainerProps) => JSX.Element;
interface SimpleButtonTextProps {
    legend?: string;
    onClick?: onClickType;
    style?: {};
    children?: any;
}
export declare const SimpleButtonText: (props: SimpleButtonTextProps) => JSX.Element;
type positionBoldTypes = 'start' | 'end';
interface SpansProps {
    legend?: string | number;
    boldLegend?: string | number;
    positionBold?: positionBoldTypes;
    styleBold?: {};
    style?: {};
    fontSize?: string;
}
export declare const Spans: (props: SpansProps) => JSX.Element;
export {};

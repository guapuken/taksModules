/// <reference types="react" />
import { onClickType } from '../../../utils/types/typesUtils';
type prioridadTypes = 'none' | 'baja' | 'media' | 'alta';
interface IconPriorityProps {
    prioridadInicial?: prioridadTypes;
    onClickPrioridad?: onClickType;
    onClickNoPrioridad?: onClickType;
}
export declare const IconPriority: (props: IconPriorityProps) => JSX.Element;
export {};

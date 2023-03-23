/// <reference types="react" />
import { onClickType } from '../../../utils/types/typesUtils';
interface AddTaskProps {
    onClick?: onClickType;
    legend?: string;
    style?: {};
}
export declare const AddTask: (props: AddTaskProps) => JSX.Element;
export {};

/// <reference types="react" />
import { onBlurType } from '../../../utils/types/typesUtils';
type taskTypes = 'principal' | 'task' | 'subtask';
interface AutoResizeInputProps {
    style?: {};
    onBlur?: onBlurType;
    initialValue?: string;
    taskType?: taskTypes;
    placeholder?: string;
    tabIndex?: number;
    disabled?: boolean;
}
export declare const AutoResizeInput: (props: AutoResizeInputProps) => JSX.Element;
export {};

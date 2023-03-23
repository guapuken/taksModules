/// <reference types="react" />
import { onChangeType, onClickType } from '../../../utils/types/typesUtils';
interface CheckboxInputProps {
    onClick?: onClickType;
    onChange?: onChangeType;
    principalTask?: boolean;
    disabled?: boolean;
    check?: boolean;
    idCheckbox?: string;
}
export declare const CheckboxInput: (props: CheckboxInputProps) => JSX.Element;
export {};

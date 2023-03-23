/// <reference types="react" />
import { onBlurType, onChangeType, onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './inputTask.scss';
export interface InputTaskProps {
    onChangeNameTask?: onBlurType;
    onChange?: onChangeType;
    onChangeDescriptionTask?: onBlurType;
    onClickCheck?: onClickType;
    disabled?: boolean;
    principalTask?: boolean;
    isSubtask?: boolean;
    checked?: boolean;
    check?: boolean;
    showTask?: boolean;
    valueTask?: string;
    valueDescription?: string;
    idCheckbox?: string;
    data?: any;
    style?: {};
}
declare const InputTask: (props: InputTaskProps) => JSX.Element;
export default InputTask;

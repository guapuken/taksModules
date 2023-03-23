/// <reference types="react" />
import { onChangeType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './inputLabel.scss';
type typeTypes = 'text' | 'number' | 'email' | 'date';
export interface InputLabelProps {
    type?: typeTypes;
    onChange: onChangeType;
    legend?: string;
    initialValue?: string;
    min?: number;
    max?: number;
    style?: {};
}
declare const InputLabel: (props: InputLabelProps) => JSX.Element;
export default InputLabel;

/// <reference types="react" />
import { onChangeType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './dropdown.scss';
type optionsDropdownTypes = {
    value: string | number;
    label: string;
};
export interface DropdownProps {
    placeHolder?: string;
    options?: optionsDropdownTypes[];
    isMulti?: boolean;
    isSearchable?: boolean;
    onChange: onChangeType;
    initialValue?: optionsDropdownTypes;
    values?: optionsDropdownTypes[];
}
declare const Dropdown: (props: DropdownProps) => JSX.Element;
export default Dropdown;

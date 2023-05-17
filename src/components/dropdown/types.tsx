import { Modo, css, onChangeType, optionsDropdown } from '../../types';
//interface principal
export interface dropdown {
	//requirements
	options: optionsDropdown[];
	onCh: onChangeType;
	// optinal initial values
	values?: optionsDropdown[];
	initialValue?: optionsDropdown;
	//notRequires
	placeHolder?: string;
	isMulti?: boolean;
	isSearchable?: boolean;
	topPosition?: boolean;
	style?: css;
	modo: Modo;
}

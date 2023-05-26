import { Modo, onChangeType, onClickType, optionsDropdown } from '../../../../../types';

export interface modalReasignUserProps {
	// Trigger: any;
	modo: Modo;
	onCl_confirm: onClickType;
	responsables: optionsDropdown[];
	equipos: optionsDropdown[];
	initialValueDropdown?: optionsDropdown;
	onCh_dropdown: onChangeType;
	isOpened: boolean;
	isPM?: boolean;
	data: any;
	setData: Function;
}

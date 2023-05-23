import { Modo, onChangeType, onClickType, optionsDropdown } from '../../../types';

export interface modalReasignUserProps {
	Trigger: any;
	modo: Modo;
	onCl_confirm: onClickType;
	optionsDropdown: optionsDropdown[];
	initialValueDropdown?: optionsDropdown;
	onCh_dropdown: onChangeType;
}

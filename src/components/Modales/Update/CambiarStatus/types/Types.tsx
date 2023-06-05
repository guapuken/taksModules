import { Modo, onChangeType, onClickType, optionsDropdown } from '../../../../../types';

export interface mdlCambiarStatusProps {
	modo: Modo;
	onCl_confirm: onClickType;
	isOpened: boolean;
	setData?: any;
	data?: any;
	onCh_dropdown: onChangeType;
	opcionesDropdown?: optionsDropdown[];
	valorDropdown?: optionsDropdown;
}

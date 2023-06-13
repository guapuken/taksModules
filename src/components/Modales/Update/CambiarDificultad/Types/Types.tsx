import { Modo, onChangeType, onClickType, optionsDropdown } from '../../../../../types';

export interface mdlCambiarDificultadProps {
	setData?: any;
	modo: Modo;
	data?: any;
	isOpened: boolean;
	onCl_confirm: onClickType;
	onCh_dropdown: onChangeType;
	opcionesDropdown?: optionsDropdown[];
	valorDropdown?: optionsDropdown;
}

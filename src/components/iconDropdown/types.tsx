import { Modo, css, onClickType, optionsIcnDrp } from '../../types';

//propiedades definidas en la interfaz
export interface iconDrps {
	options: optionsIcnDrp[];
	onCl?: onClickType;
	icon?: string | any;
	className?: string;
	legend?: string;
	title?: string;
	style?: css;
	iconStyles?: css;
	svg?: any;
	modo: Modo;
	disabled?: boolean;
}

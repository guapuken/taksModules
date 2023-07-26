import { Modo, css, onClickType, size } from '../../../types';

export interface button {
	id?: string;
	onCl: onClickType;
	size?: size;
	//css properties
	style?: css;
	styleIcon?: css;
	textStyle?: css;
	//string properties
	legend?: string;
	icon?: string;
	className?: string;
	//boolean properties
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
	rounded?: boolean;
	disabled?: boolean;
	border?: boolean;
	float?: boolean;
	modo: Modo;
	color?: string;
	valueSuccess?: any;
	successColor?: boolean;
}

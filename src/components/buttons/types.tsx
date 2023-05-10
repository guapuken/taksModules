// types externos
import { Modo, compositions, css, onClickType, size } from '../../types';

export interface buttons {
	onCl_buttons: functions;
	buttons: booleanTypes;
	disabled?: booleanTypes;
	styleIcon?: styles;
	style?: styles;
	keys?: stringTypes;
	legends?: stringTypes;
	colorButtons?: stringTypes;
	icons?: stringTypes;
	colorHover?: stringTypes;
	className?: stringTypes;
	id?: stringTypes;
	size?: size;
	styleComposition?: css;
	composition: compositions;
	rounded?: boolean;
	border?: boolean;
	float?: boolean;
	modo: Modo;
}

// strings
type stringTypes = {
	primary?: string;
	secondary?: string;
	tertiary?: string;
};

// booleans
type booleanTypes = {
	primary?: boolean;
	secondary?: boolean;
	tertiary?: boolean;
};

// estilos
type styles = {
	primary?: css;
	secondary?: css;
	tertiary?: css;
};

// funciones
type functions = {
	primary: onClickType;
	secondary: onClickType;
	tertiary: onClickType;
};

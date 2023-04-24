import { Modo, css } from '../../types';
//definición de la interface y sus datos que recibirá el componente
export interface information {
	width?: number;
	height?: number;
	info?: string;
	positionInfo?:
		| 'left'
		| 'right'
		| 'top'
		| 'bottom'
		| 'left_top'
		| 'left_bottom'
		| 'right_top'
		| 'right_bottom'
		| 'center';
	color?: string;
	iconInfo?: string;
	style?: css;
	className?: string;
	modo: Modo;
}

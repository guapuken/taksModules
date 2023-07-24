import { Modo, css, onClickType } from '../../../../types';
export interface textsProps {
	children: any;
	modo: Modo;
	className?: string;
	style?: css;
	maxLines?: number;
	onClick?: onClickType;
	labels?: any;
}

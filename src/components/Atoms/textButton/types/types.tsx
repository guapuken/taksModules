import { Modo, css, onClickType } from '../../../../types';
export interface textButtonProps {
	children: any;
	modo: Modo;
	onClick: onClickType;
	className?: String;
	style?: css;
}

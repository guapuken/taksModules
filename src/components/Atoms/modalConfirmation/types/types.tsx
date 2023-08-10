import { Modo, onClickType } from '../../../../types';

export interface modalConfirmationProps {
	modo: Modo;
	themeSyle?: string;
	children?: any;
	handleClose: onClickType;
	footer?: any;
	isActive: boolean;
	header?: any;
}

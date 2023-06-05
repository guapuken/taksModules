import { Modo, onClickType } from '../../../../../types';

export interface mdlSeguirTareaProps {
	modo: Modo;
	onCl_confirm: onClickType;
	isOpened: boolean;
	setData: any;
	data?: any;
	notificacionesActivas?: boolean;
}

import { Modo, onClickType } from '../../../types';

export interface modalDeleteTeamProps {
	modo: Modo;
	onCl_confirm: onClickType;
	isOpened: boolean;
	setData?: any;
	data?: any;
}

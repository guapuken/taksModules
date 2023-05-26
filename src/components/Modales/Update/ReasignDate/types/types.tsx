import { Modo, onChangeType, onClickType } from '../../../../../types';

export interface modalReasignDateProps {
	// Trigger: any;
	modo: Modo;
	isOpened: boolean;
	data: any;
	setData: Function;
	endDateValue?: string;
	startDateValue?: string;
	onCh_endDate: onChangeType;
	onCh_startDate: onChangeType;
	onCl_confirm: onClickType;
}

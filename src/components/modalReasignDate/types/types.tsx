import { Modo, onChangeType, onClickType } from '../../../types';

export interface modalReasignDateProps {
	Trigger: any;
	modo: Modo;
	endDateValue?: string;
	startDateValue?: string;
	onCh_endDate: onChangeType;
	onCh_startDate: onChangeType;
	onCl_confirm: onClickType;
}

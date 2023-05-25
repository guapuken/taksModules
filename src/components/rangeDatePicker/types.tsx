import { Modo, css, onChangeType } from '../../types';
export interface rangeDatePicker {
	startDateValue?: string;
	// startDateValue?: Date;
	endDateValue?: string;
	minStartDate?: string;
	maxStartDate?: string;
	minEndDate?: string;
	maxEndDate?: string;
	// endDateValue?: Date;
	style?: css;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onCh_startDate: onChangeType;
	onCh_endDate: onChangeType;
	modo: Modo;
}

import { Modo, css, onChangeType } from '../../types';
export interface rangeDatePicker {
	startDateValue: string;
	// startDateValue?: Date;
	endDateValue: string;
	// endDateValue?: Date;
	style?: css;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onCh_startDate: onChangeType;
	onCh_endDate: onChangeType;
	modo: Modo;
}

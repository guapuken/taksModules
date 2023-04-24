import { Modo, css, onBlurType } from '../../types';
export interface rangeDatePicker {
	startDateValue?: Date;
	endDateValue?: Date;
	style?: css;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onCh_startDate?: onBlurType;
	onCh_endDate?: onBlurType;
	modo: Modo;
}

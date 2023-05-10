import { Modo, css, onBlurType } from '../../types';
export interface rangeDatePicker {
	startDateValue?: string;
	// startDateValue?: Date;
	endDateValue?: string;
	// endDateValue?: Date;
	style?: css;
	disabledStartDate?: boolean;
	disabledEndDate?: boolean;
	onCh_startDate?: onBlurType;
	onCh_endDate?: onBlurType;
	modo: Modo;
}

// types
import { Modo, css, onBlurType, onChangeType } from '../../types';

export interface inputTasks {
	onCh_nameTask: onBlurType;
	onCh_checkbox?: onChangeType;
	onCh_descriptionTask: onBlurType;
	disabled?: boolean;
	principalTask?: boolean;
	isSubtask?: boolean;
	checked?: boolean;
	check?: boolean;
	showTask?: boolean;
	valueTask?: string;
	valueDescription?: string;
	idCheckbox: string;
	data?: any;
	style?: css;
	modo?: Modo;
	id: string;
}

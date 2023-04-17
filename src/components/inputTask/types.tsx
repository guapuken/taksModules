// types
import { Modo, css, onBlurType, onChangeType, onClickType } from '../../types';

export interface inputTasks {
	onChangeNameTask?: onBlurType;
	onChange?: onChangeType;
	onChangeDescriptionTask?: onBlurType;
	onClickCheck?: onClickType;
	disabled?: boolean;
	principalTask?: boolean;
	isSubtask?: boolean;
	checked?: boolean;
	check?: boolean;
	showTask?: boolean;
	valueTask?: string;
	valueDescription?: string;
	idCheckbox?: string;
	data?: any;
	style?: css;
	modo?: Modo;
}

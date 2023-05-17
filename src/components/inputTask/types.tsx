// types
import { Modo, css, onChangeType } from '../../types';

export interface inputTasks {
	onCh_nameTask: onChangeType;
	onCh_checkbox: onChangeType;
	onCh_descriptionTask: onChangeType;
	disabled?: boolean;
	principalTask?: boolean;
	isSubtask?: boolean;
	check: boolean;
	showTask?: boolean;
	valueTask: string;
	valueDescription: string;
	idCheckbox: string;
	style?: css;
	modo: Modo;
	id: string;
}

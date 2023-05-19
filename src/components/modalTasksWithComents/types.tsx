import {
	Modo,
	msnsChats,
	onChangeType,
	onClickType,
	optionsDropdown,
	optionsIcnDrp,
	prioritys,
	tasks,
} from '../../types';

// exportación de la interfaz princiapl
export interface modalTaskWC {}

export interface contentProps {
	//require properties -----------------------------------------------------
	//onChange
	onCh_comment: onChangeType;
	onCh_dropdown: onChangeType;
	//onClick
	onCl_addComment: onClickType;
	onCl_approve: onClickType;
	onCl_confirm: onClickType;
	onCl_reWork: onClickType;
	onCl_close: onClickType;
	completed?: boolean;

	// onCl_reWork: onClickType;
	//string
	taskName: string;
	taskDescription: string;
	reasonsToWorkAgain: optionsDropdown[];
	modo: Modo;
	messages: msnsChats[];
	reasonToRework: { id: string; title: string };
	// optional properties ---------------------------------------------------
	onCh_addFile?: onChangeType;
	subtasks?: subtasksComponent[];
	valueComment?: string;
	isReviewer?: boolean;
	onCl_edit: onClickType;
	onCl_abort: onClickType;
}
// botones que se utilizan
export type functions = {
	onCh_addFile?: onChangeType;
	isReviewer?: boolean;
	onCl_addComment: onClickType;
	onCh_comment: onChangeType;
	onCl_reWork: onClickType;
	onCl_confirm: onClickType;
	onCl_approve: onClickType;
	onCh_dropdown: onChangeType;
	valueReasonToWorkAgain?: optionsDropdown;
	modo: Modo;
	onCl_close: onClickType;
	valueComment?: string;
	reasonsToWorkAgain: optionsDropdown[];
	onCl_edit: onClickType;
	onCl_abort: onClickType;
};
// types del componente complemenetario Item Comments
export type itemComments = {
	messages: msnsChats[];
	valueComment?: string;

	showTasks?: boolean;
	onCl_close: onClickType;
	reasonsToWorkAgain: optionsDropdown[];

	onCh_addFile?: onChangeType;
	onCl_addComment: onClickType;
	onCh_comment: onChangeType;
	onCl_reWork: onClickType;
	onCl_confirm: onClickType;
	onCl_approve: onClickType;
	onCl_edit: onClickType;
	onCl_abort: onClickType;

	onCh_dropdown: onChangeType;
	modo: Modo;
};
// estructura de las subtareas
export type subtasks = {
	id: string;
	taskName: string;
	taskDescription: string;
	complete: boolean;
};

export type subtasksComponent = {
	taskName?: string;
	taskDescription?: string;
	subtasks?: subtasksComponent[];
	completed?: boolean;
};

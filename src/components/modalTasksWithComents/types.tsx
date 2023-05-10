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
	onCh_descriptionTask: onChangeType;
	onCh_nameTask: onChangeType;
	onCh_comment: onChangeType;
	onCh_checkbox: onChangeType;
	onCh_endDate: onChangeType;
	onCh_startDate: onChangeType;
	onCh_dropdown: onChangeType;
	//onClick
	onCl_newTemplate: onClickType;
	onCl_addComment: onClickType;
	onCl_addTask: onClickType;
	onCl_selectPriority: onClickType;
	onCl_delete: onClickType;
	onCl_reminder: onClickType;
	onCl_approve: onClickType;
	onCl_confirm: onClickType;
	onCl_reWork: onClickType;

	// onCl_reWork: onClickType;
	//string
	taskName: string;
	taskDescription: string;
	idTask: string;
	endDateValue: string; // recibe un timestamp YYYY-MM-DD TM HH:MM:SS
	startDateValue: string; // recibe un timestamp YYYY-MM-DD TM HH:MM:SS
	valueResponsable: string;
	modo: Modo;
	messages: msnsChats[];
	templateOptions: optionsIcnDrp[];
	check: boolean;
	reasonToRework: { id: string; title: string };
	prioridadInicial: prioritys;
	// optional properties ---------------------------------------------------
	onCh_addFile?: onChangeType;
	isReviewer?: boolean;
	valueRevision?: string;
	equipos?: optionsIcnDrp[];
	responsables?: optionsIcnDrp[];
	revision?: optionsIcnDrp[];
	subtasks?: tasks[];
}
// botones que se utilizan
export type functions = {
	onCh_addFile?: onChangeType;
	onCl_addComment: onClickType;
	onCh_comment: onChangeType;
	onCl_reWork: onClickType;
	onCl_confirm: onClickType;
	onCl_approve: onClickType;
	onCh_dropdown: onChangeType;
	reasonToRework?: optionsDropdown;
	modo: Modo;
};
// types del componente complemenetario Item Comments
export type itemComments = {
	messages: msnsChats[];
	showTasks?: boolean;
	onCh_addFile?: onChangeType;
	onCl_addComment: onClickType;
	onCh_comment: onChangeType;
	onCl_reWork: onClickType;
	onCl_confirm: onClickType;
	onCl_approve: onClickType;
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

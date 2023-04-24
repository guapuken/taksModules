import { Modo, onChangeType, onClickType, optionsDropdown } from '../../types';

// exportación de la interfaz princiapl
export interface contentProps {
	// propiedades de la tarea principal
	taskName?: String;
	taskComplete?: boolean;
	subtasks?: subtasks[];

	// tema de color
	modo?: Modo;

	// botones
	onCl_addComent?: onClickType;
	onCl_reWork?: onClickType;
	onCl_confirm?: onClickType;
	onCl_approve?: onClickType;

	// on changes
	onCh_addFile?: onChangeType;
	onCh_dropdown?: onChangeType;

	// comentarios
	comments?: comentarios[];
	reasonToRework?: optionsDropdown;
}
// estructura de los comentarios
export type comentarios = {
	user?: string;
	comentario?: string;
	personalMsn?: boolean;
	dateAndTime?: string;
};
// botones que se utilizan
export type functions = {
	onCh_addFile?: onChangeType;
	onCl_addComent?: onClickType;
	onCl_reWork?: onClickType;
	onCl_confirm?: onClickType;
	onCl_approve?: onClickType;
	onCh_dropdown?: onChangeType;
	reasonToRework?: optionsDropdown;
};
// types del componente complemenetario Item Comments
export type itemComments = {
	comments?: comentarios[];
	showTasks?: boolean;
	onCh_addFile?: onChangeType;
	onCl_addComent?: onClickType;
};
// estructura de las subtareas
export type subtasks = {
	taskName?: string;
	taskDescription?: string;
	complete: boolean;
};

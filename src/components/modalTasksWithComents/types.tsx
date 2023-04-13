import { Modo, onChangeType, onClickType } from '../../types';

// exportación de la interfaz princiapl
export interface contentProps {
	// propiedades de la tarea principal
	taskName?: String;
	taskComplete?: boolean;
	subtasks?: subtasks[];

	// tema de color
	modo?: Modo;

	// botones
	onClickAddComent?: onClickType;
	onClickReWork?: onClickType;
	onClickConfirm?: onClickType;
	onClickApprove?: onClickType;

	// on changes
	onChangeAddFile?: onChangeType;
	onChangeDrop?: onChangeType;

	// comentarios
	comments?: comentarios[];
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
	onChangeAddFile?: onChangeType;
	onClickAddComent?: onClickType;
	onClickReWork?: onClickType;
	onClickConfirm?: onClickType;
	onClickApprove?: onClickType;
	onChangeDrop?: onChangeType;
};
// types del componente complemenetario Item Comments
export type itemComments = {
	comments?: comentarios[];
	showTasks?: boolean;
	onChangeAddFile?: onChangeType;
	onClickAddComent?: onClickType;
};
// estructura de las subtareas
export type subtasks = {
	taskName?: string;
	taskDescription?: string;
	complete: boolean;
};

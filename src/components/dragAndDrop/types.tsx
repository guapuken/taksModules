import { Modo, css, onChangeType, onClickType, statusTask, submenusArray } from '../../types';

//componente principal que returna el drag and drop------------------------------------------------------------------------------------------
export interface dragAndDrop {
	tasks: task[];
	modo?: Modo;
	nameBoards?: { [key: string]: string };
	withAside?: boolean;
	width?: number;
	vertical?: boolean;
	horizontal?: boolean;
	Card?: any;
	data?: any;
	onDragStart?: any;
	onDragEnd?: any;
}

// type Status = 'Pendientes' | 'En progreso' | 'Completas';
export type BoardSections = {
	[name: string]: task[];
};
export type screenSize = { width: number; height: number };

// items generados por cada card
export type taskItem = {
	Card?: any;
	data?: any;
};

// tableros
export type boards = {
	id: string;
	title: string;
	tasks: task[];
	data?: any;
	modo: Modo;
	width: number;
	scrSize: screenSize;
	Card?: any;
	styleTaskContainer?: css;
};

export type task = {
	id: string;
	// status: Status;
	status: string;
	//TaskName
	modo?: Modo;
	idNotification: string;
	taskName?: string;
	taskDescription?: string;
	valueResponsable?: string;
	valueRevision?: string;
	subtasks?: number;
	percentTask?: number;
	followNotificationsValue?: boolean;
	statusTask?: statusTask;
	onClickShowDetails?: onClickType;
	onClickEditar?: onClickType;
	onClickFollow?: onClickType;
	onClickRecordatorio?: onClickType;
	onClickComentario?: onClickType;
	onClickFecha?: onClickType;
	onChangeNotificationSwitch?: onChangeType;
	responsables?: submenusArray[];
	equipos?: submenusArray[];
	revision?: submenusArray[];
};

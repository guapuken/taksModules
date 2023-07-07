import { Modo, css, onChangeType, onClickType, statusTask, submenusArray } from '../../types';

//componente principal que returna el drag and drop------------------------------------------------------------------------------------------
export interface dragAndDrop {
	tasks: task[];
	modo: Modo;
	nameBoards: { [key: string]: string };
	withAside?: boolean;
	width?: number;
	vertical?: boolean;
	horizontal?: boolean;
	Card?: any;
	data?: any;
	onDragStart?: any;
	onDragEnd?: any;
	approved?: boolean;
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
	approved?: boolean;
	modo: Modo;
	pendingToReview?: boolean;
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
	property?: any;
	setProperty?: any;
	height?: number;
	setMinHeight?: any;
};

export type task = {
	id: string;
	// status: Status;
	status: string;
	//TaskName
	modo: Modo;
	idNotification: string;
	taskName: string;
	taskDescription: string;
	valueResponsable: string;
	valueRevision?: string;
	subtasks?: number;
	percentTask: number;
	followNotificationsValue: boolean;
	statusTask: statusTask;
	onCl_showDetails: onClickType;
	onCl_edit: onClickType;
	onCl_follow: onClickType;
	onCl_remimder: onClickType;
	onCl_asignTask: onClickType;
	onCl_status: onClickType;
	onCl_reasignDate: onClickType;
	onCh_follow: onChangeType;
	responsables?: submenusArray[];
	equipos?: submenusArray[];
	revision?: submenusArray[];
	approved?: boolean;
};

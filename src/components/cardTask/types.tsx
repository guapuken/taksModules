import { Modo, onChangeType, onClickType, statusTask, submenusArray } from '../../types';

export interface cardTask {
	//aside
	onCl_edit: onClickType;
	onCl_reminder: onClickType;
	onCl_follow: onClickType;
	onCl_reasignDate: onClickType;
	onCl_asignTask: onClickType;
	onCl_status: onClickType;
	follow: boolean;
	// content
	taskName: string;
	taskDescription: string;
	statusTask: statusTask;
	percentTask: number;
	onCl_showDetails: onClickType;
	subtasks?: number;
	// generales
	modo: Modo;
	idTask: string;
}

export type aside = {
	idTask: string;
	onCl_edit: onClickType;
	onCl_follow: onClickType;
	onCl_reminder: onClickType;
	onCl_asignTask: onClickType;
	onCl_reasignDate: onClickType;
	follow: boolean;
	modo: Modo;
};

export type content = {
	onCl_showDetails: onClickType;
	statusTask: statusTask;
	taskName: string;
	taskDescription: string;
	subtasks?: number;
	percentTask: number;
	modo: Modo;
};

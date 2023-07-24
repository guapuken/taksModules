import { Modo, onClickType, statusTask } from '../../../../types';

export interface cardTemplate {
	onCl_delete: onClickType;
	onCl_preview: onClickType;
	onCl_edit: onClickType;
	modo: Modo;
	templateName: string;
	statusTask: statusTask;
	percentTask: number;
	totalTasks?: number;
}

export type aside = {
	onCl_delete: onClickType;
	onCl_preview: onClickType;
	onCl_edit: onClickType;
	modo: Modo;
};

export type content = {
	modo: Modo;
	templateName: string;
	totalTasks?: number;
};

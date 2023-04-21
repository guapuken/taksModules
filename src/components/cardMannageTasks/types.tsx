import { Modo, onClickType, statusTask } from '../../types';

export type cardMannageTasks = {
	onCl_delete?: onClickType;
	onCl_preview?: onClickType;
	onCl_edit?: onClickType;
	title?: string;
	pendingTasks?: number;
	percentTask?: number;
	statusTask?: statusTask;
	modo: Modo;
};

export type content = {
	modo?: Modo;
	title?: string;
	statusTask?: statusTask;
	percentTask?: number;
	pendingTasks?: number;
};

export type aside = {
	onCl_delete?: onClickType;
	onCl_preview?: onClickType;
	onCl_edit?: onClickType;
	modo?: Modo;
};

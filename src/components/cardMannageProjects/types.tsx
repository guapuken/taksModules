import { Modo, onClickType, statusTask } from '../../types';

export interface cardMannageProjects {
	onCl_delete: onClickType;
	onCl_preview: onClickType;
	onCl_edit: onClickType;
	modo: Modo;
	title: string;
	statusTask: statusTask;
	tasks?: number;
	percentTask: number;
	isCampaignTask?: boolean;
}

export type aside = {
	onCl_delete: onClickType;
	onCl_preview: onClickType;
	onCl_edit: onClickType;
	modo: Modo;
	isCampaignTask?: boolean;
};

export type content = {
	modo: Modo;
	title: string;
	statusTask: statusTask;
	onCl_preview: onClickType;
	onCl_edit: onClickType;
	onCl_delete: onClickType;
	percentTask: number;
	tasks?: number;
};

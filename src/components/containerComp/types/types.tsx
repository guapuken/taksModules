import { Modo, css, onClickType } from '../../../types';

export type header = {
	legend: string;
	legendBtn?: string;
	onCl_btn?: onClickType;
};

export interface container {
	children?: any;
	AsideContent?: any;
	FooterContent?: any;
	header?: header;
	onCl_menus: onClicks;
	style?: css;
	headerStyle?: css;
	contentStyle?: css;
	footerStyle?: css;
	modo: Modo;
}
export type onClicks = {
	createTask: onClickType;
	createTemplate: onClickType;
	createTeam: onClickType;
	createProject: onClickType;
	inicio: onClickType;
	mannageTask: onClickType;
	mannageTemplates: onClickType;
	mannageTeams: onClickType;
	mannageProjects: onClickType;
	projectsStatus: onClickType;
};

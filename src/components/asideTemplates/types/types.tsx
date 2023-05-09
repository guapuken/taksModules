import { Modo, onClickType, statusTask } from '../../../types';

// interface principal
export interface aside {
	modo?: Modo;
	visible?: boolean;
	imageNoTasks?: string;
	priText?: string;
	secText?: string;
	tasks?: tasks[];
	legendBtn?: string;
	idSection?: string;
	onCl_btn?: onClickType;
}

// componente NoTasks
export type noTasksProps = {
	imageNoTasks?: string;
	priText?: string;
	secText?: string;
	legendBtn?: string;
	idSection?: string;
	onCl_btn?: onClickType;
};

export type tasks = {
	id: string;
	taskName?: string;
	taskDescription?: string;
	statusTask?: statusTask;
	onCl_showDetails?: onClickType;
};

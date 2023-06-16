import { optionsIcnDrp } from '../../../types';
import { Modo, onChangeType, onClickType, optionsDropdown, statusTask } from '../../../types';
import { iconDrps } from '../../iconDropdown/types';

// interface principal
export interface aside {
	modo: Modo;
	visible?: boolean;
	imageNoTasks?: string;
	priText?: string;
	secText?: string;
	tasks: any[];
	legendBtn?: string;
	idSection?: string;
	onCl_btn?: onClickType;
	onCh_dropdown?: onChangeType;
	initialValueDropdown?: any;
	optionsDropdown?: optionsDropdown[];
	Card: any;
	placeholderDropdown?: string;
	optionsFilter?: optionsIcnDrp[];
	onCl_reorder: onClickType;
	themeStyle?: string;
}

// componente NoTasks
export type noTasksProps = {
	imageNoTasks?: string;
	priText?: string;
	secText?: string;
	legendBtn?: string;
	idSection?: string;
	onCl_btn?: onClickType;
	modo: Modo;
};

export type tasks = {
	id: string;
	taskName: string;
	taskDescription: string;
	statusTask: statusTask;
	onCl_showDetails: onClickType;
};

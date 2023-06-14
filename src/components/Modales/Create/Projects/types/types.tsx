import {
	Modo,
	onChangeType,
	onClickType,
	optionsDropdown,
	optionsIcnDrp,
	subtasksProps,
} from '../../../../../types';

// botones
export type clickButtons = {
	onCl_confirm: onClickType;
	onCl_abort: onClickType;
	edit?: boolean;
	modo: Modo;
};

// interfaz principal
export interface ModalProjectsProps {
	onCl_confirm: onClickType;
	onCl_abort: onClickType;
	onCl_addTask: onClickType;
	onCh_nameProject: onChangeType;
	maxEndDate?: string;
	maxStartDate?: string;
	minEndDate?: string;
	minStartDate?: string;
	projectNameValue: string;
	subtasks?: subtasksProps[];
	templateOptions: optionsIcnDrp[];
	onCl_newTemplate: onClickType;
	modo: Modo;
	idProject: string;
	onCh_asignTeam: onChangeType;
	teamOptions: optionsDropdown[];
	initialTeamValue?: optionsDropdown;
	edit?: boolean;
	onCl_close: onClickType;
	valueDificultad?: {
		id: string;
		title: string;
	};
	onCh_dificultad?: onChangeType;
}

export type content = {
	themeStyle?: string;
	onCh_nameProject: onChangeType;
	projectNameValue: string;
	onCl_addTask: onClickType;
	modo: Modo;
	idProject: string;
	templateOptions: optionsIcnDrp[];
	onCl_newTemplate: onClickType;
	subtasks?: subtasksProps[];
	onCh_asignTeam: onChangeType;
	teamOptions: optionsDropdown[];
	initialTeamValue?: optionsDropdown;
};

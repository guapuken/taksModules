import {
	Modo,
	onBlurType,
	onChangeType,
	onClickType,
	optionsDropdown,
	optionsIcnDrp,
	subtasksProps,
} from '../../types';

// botones
export type clickButtons = {
	onCl_confirm?: onClickType;
	onCl_abort?: onClickType;
	edit?: boolean;
};

// interfaz principal
export interface ModalProjectsProps {
	onCl_confirm?: onClickType;
	onCl_abort?: onClickType;
	onCl_addTask?: onClickType;
	onCh_nameProject?: onBlurType;
	projectNameValue?: string;
	subtasks?: subtasksProps[];
	templateOptions: optionsIcnDrp[];
	onCl_newTemplate: onClickType;
	modo?: Modo;
	idProject: string;
	onCh_asignTeam: onChangeType;
	teamOptions: optionsDropdown[];
	initialTeamValue?: optionsDropdown;
	edit?: boolean;
}

export type content = {
	onCh_nameProject?: onBlurType;
	projectNameValue?: string;
	onCl_addTask?: onClickType;
	modo?: Modo;
	idProject: string;
	templateOptions: optionsIcnDrp[];
	onCl_newTemplate: onClickType;
	subtasks?: subtasksProps[];
	onCh_asignTeam: onChangeType;
	teamOptions: optionsDropdown[];
	initialTeamValue?: optionsDropdown;
};

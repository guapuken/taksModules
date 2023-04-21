import {
	Modo,
	onChangeType,
	onClickType,
	optionsDropdown,
	optionsIcnDrp,
	subtasksProps,
} from '../../types';

// botones
export type clickButtons = {
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
};

// interfaz principal
export interface ModalProjectsProps {
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
	onClickAddTask?: onClickType;
	onChangeName?: onChangeType;
	projectNameValue?: string;
	subtasks?: subtasksProps[];
	templateOptions: optionsIcnDrp[];
	onClickCreateTemplate: onClickType;
	modo?: Modo;
	idProject: string;
	onChangeAsignTeam?: onChangeType;
	teamOptions: optionsDropdown[];
	initialTeamValue?: optionsDropdown;
}

export type content = {
	onChangeName?: onChangeType;
	projectNameValue?: string;
	onClickAddTask?: onClickType;
	modo?: Modo;
	idProject: string;
	templateOptions: optionsIcnDrp[];
	onClickCreateTemplate: onClickType;
	subtasks?: subtasksProps[];
	onChangeAsignTeam?: onChangeType;
	teamOptions: optionsDropdown[];
	initialTeamValue?: optionsDropdown;
};

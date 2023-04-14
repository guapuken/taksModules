import React from 'react';
import {
	Modo,
	onBlurType,
	onChangeType,
	onClickType,
	optionsIcnDrp,
	prioritys,
	submenusArray,
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
	subtasks?: childrenTypes[];
	templateOptions: optionsIcnDrp[];
	onClickCreateTemplate: onClickType;
	modo?: Modo;
}

export type childrenTypes = {
	//Input Task
	idTask: string;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	check?: boolean;
	valueTask?: string;
	valueDescription?: string;
	onChangeNameTask?: onBlurType;
	onChangeDescriptionTask?: onBlurType;
	onChangeCheckbox?: onChangeType;

	//Icon Dates
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onChangeEndDate?: onChangeType;
	onChangeStartDate?: onChangeType;
	startDateValue?: Date;
	endDateValue?: Date;

	//Icon Asign
	responsables: submenusArray[];
	equipos: submenusArray[];
	revision: submenusArray[];
	valueResponsable?: string;
	valueRevision?: string;

	//Icon Priority
	prioridadInicial?: prioritys;
	onClickPrioridad?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onClickEliminar?: onClickType;
	onClickRecordatorio?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: childrenTypes[];

	//botones agregar
	onClickCreateTemplate: onClickType;
	onClickAddTask?: onClickType;
	templateOptions: optionsIcnDrp[];
	modo?: Modo;
};

export type content = {
	onChangeName?: onChangeType;
	projectNameValue?: string;
	onClickAddTask?: onClickType;
	modo?: Modo;
	templateOptions: optionsIcnDrp[];
	onClickCreateTemplate: onClickType;
	subtasks?: childrenTypes[];
};

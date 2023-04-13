import React from 'react';
import { Modo, onBlurType, onChangeType, onClickType } from '../../types';

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
	Children?: childrenTypes[];
	templateOptions?: optionsType[];
	onClickCreateTemplate?: onClickType;
	modo?: Modo;
}

// types
export type submenus = {
	id?: string;
	className?: string;
	onClick?: onClickType;
	title?: string;
};
export type optionsType = {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: onClickType;
	className?: string;
};

export type childrenTypes = {
	//Input Task
	taskDisabled?: boolean;
	taskComplete?: boolean;
	check?: boolean;
	valueTask?: string;
	valueDescription?: string;
	onChangeNameTask?: onBlurType;
	onChangeDescriptionTask?: onBlurType;
	idCheckbox?: string;
	onChangeCheckbox?: onChangeType;

	//Icon Dates
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onChangeEndDate?: onChangeType;
	onChangeStartDate?: onChangeType;
	startDateValue?: Date;
	endDateValue?: Date;

	//Icon Asign
	responsables?: submenus[];
	equipos?: submenus[];
	revision?: submenus[];
	valueResponsable?: string;
	valueRevision?: string;

	//Icon Priority
	prioridadInicial?: 'none' | 'baja' | 'media' | 'alta';
	onClickPrioridad?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsType[];
	onClickEliminar?: onClickType;
	onClickRecordatorio?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	Children?: any;

	//botones agregar
	onClickCreateTemplate?: onClickType;
	onClickAddTask?: onClickType;
	templateOptions?: optionsType[];
	modo?: Modo;
};

export type content = {
	onChangeName?: onChangeType;
	projectNameValue?: string;
	onClickAddTask?: onClickType;
	modo?: Modo;
	templateOptions: optionsType[] | null;
	onClickCreateTemplate?: onClickType;
	Children?: childrenTypes[];
};

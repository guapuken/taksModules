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
	onClickAddTask?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeName?: onChangeType;
	projectNameValue?: string;
	Children?: childrenTypes[];
	templateOptions?: optionsType[];
	onClickCreateTemplate?: (e: React.MouseEvent<HTMLElement>) => void;
	modo?: Modo;
}

// types
export type submenus = {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
};
export type optionsType = {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
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
	onClickPrioridad?: (e: React.MouseEvent<HTMLElement>) => void;

	//Icon MoreOptions
	moreOptions?: optionsType[];
	onClickEliminar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickRecordatorio?: (e: React.MouseEvent<HTMLElement>) => void;

	//addTask
	subtaskForbbiden?: boolean;
	Children?: any;

	//botones agregar
	onClickCreateTemplate?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickAddTask?: (e: React.MouseEvent<HTMLElement>) => void;
	templateOptions?: optionsType[];
	modo?: Modo;
};

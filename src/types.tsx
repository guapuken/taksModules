import React from 'react';
//Exportación de types que se pueden repetir en múltiples archivos
// ---------------------------------------------------------------------------------------------------------
//      themas de color
// ---------------------------------------------------------------------------------------------------------
export type Modo = 'Dark' | 'Light';
// tamaños a usar
export type size = 'small' | 'medium' | 'large';
// export type statusTask = 'onTime' | 'delayed' | 'outOfTime';
export type statusTask = 'onTime' | 'delayed' | 'outOfTime' | 1 | 2 | 3;
// composiciones de botones
export type compositions = 'horizontal' | 'vertical' | 'box';
//tipos de task
export type taskType = 'principal' | 'task' | 'subtask';
// opciones del dropdown
export type optionsDropdown = {
	id: string | number;
	title: string;
};
// prioridades
export type prioritys = 'none' | 'baja' | 'media' | 'alta';
// ---------------------------------------------------------------------------------------------------------
//      icon dropdown
// ---------------------------------------------------------------------------------------------------------
// opciones del iconDropdown
export type optionsIcnDrp = {
	// requirements
	title: string;
	id: string;
	// notRequires
	onClick?: onClickType;
	submenus?: submenusArray[];
	className?: string;
};
//definición la estructura de los submenus del icon dropdown
export interface submenusArray {
	// reqquirements
	id: string;
	title: string;
	// notRequires
	onClick?: onClickType;
	className?: string;
}
// tasks
//INTERFACES
export interface tasks {
	//Input Task
	idTask: string;
	principalTask?: boolean;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	isSubtask?: boolean;
	check?: boolean;
	valueTask?: string;
	valueDescription?: string;
	onClickCheck?: onClickType;
	onCh_nameTask: onChangeType;
	// onCh_nameTask: onBlurType;
	onCh_descriptionTask: onChangeType;
	// onCh_descriptionTask: onBlurType;
	idCheckbox?: string;
	onCh_checkbox?: onChangeType;

	//Icon Dates
	plantillas?: boolean;
	onCh_duration?: onChangeType;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onCh_endDate?: onChangeType;
	onCh_startDate?: onChangeType;
	startDateValue?: Date;
	endDateValue?: Date;
	className?: string;
	durationValue?: string;

	//Icon Asign
	responsables: submenusArray[];
	equipos: submenusArray[];
	revision: submenusArray[];
	valueResponsable?: string;
	valueRevision?: string;

	//Icon Priority
	prioridadInicial?: prioritys;
	onCl_selectPriority?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onCl_delete?: onClickType;
	onCl_reminder?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: subtasksProps[];

	//botones agregar
	onCl_newTemplate: onClickType;
	onCl_addTask?: onClickType;
	templateOptions: optionsIcnDrp[];
	modo?: Modo;
}
//INTERFACES
export interface tasksTemplates {
	//Input Task
	idTask: string;
	taskDisabled?: boolean;
	valueTask?: string;
	valueDescription?: string;

	onCh_nameTask: onBlurType;
	onCh_descriptionTask: onBlurType;

	//Icon Dates
	className?: string;
	durationValue?: string;
	onCh_duration?: onChangeType;

	//Icon Asign
	responsables: submenusArray[];
	equipos: submenusArray[];
	revision: submenusArray[];
	valueResponsable?: string;
	valueRevision?: string;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onCl_delete?: onClickType;
	plantillas?: boolean;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: subtaskTemplates[];

	//botones agregar
	onCl_newTemplate: onClickType;
	onCl_addTask?: onClickType;
	templateOptions: optionsIcnDrp[];
	modo?: Modo;
}

export type subtaskTemplates = {
	//Input Task
	idTask: string;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	check?: boolean;
	valueTask?: string;
	valueDescription?: string;
	onCh_nameTask: onBlurType;
	onCh_descriptionTask: onBlurType;
	onCh_checkbox?: onChangeType;
	onCh_duration?: onChangeType;

	//Icon Dates
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onCh_endDate?: onChangeType;
	onCh_startDate?: onChangeType;
	startDateValue?: Date;
	endDateValue?: Date;
	plantillas?: boolean;

	//Icon Asign
	responsables: submenusArray[];
	equipos: submenusArray[];
	revision: submenusArray[];
	valueResponsable?: string;
	valueRevision?: string;

	//Icon Priority
	prioridadInicial?: prioritys;
	onCl_selectPriority?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onCl_delete?: onClickType;
	onCl_reminder?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: subtasksProps[];

	//botones agregar
	onCl_newTemplate: onClickType;
	onCl_addTask?: onClickType;
	templateOptions: optionsIcnDrp[];
	modo?: Modo;
};
export type subtasksProps = {
	//Input Task
	idTask: string;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	check?: boolean;
	valueTask?: string;
	valueDescription?: string;
	// onCh_nameTask: onBlurType;
	onCh_nameTask: onChangeType;
	// onCh_descriptionTask: onBlurType;
	onCh_descriptionTask: onChangeType;
	onCh_checkbox?: onChangeType;

	//Icon Dates
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onCh_endDate?: onChangeType;
	onCh_startDate?: onChangeType;
	startDateValue?: Date;
	endDateValue?: Date;
	onCh_duration?: onChangeType;

	//Icon Asign
	responsables: submenusArray[];
	equipos: submenusArray[];
	revision: submenusArray[];
	valueResponsable?: string;
	valueRevision?: string;

	//Icon Priority
	prioridadInicial?: prioritys;
	onCl_selectPriority?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onCl_delete?: onClickType;
	onCl_reminder?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: subtasksProps[];

	//botones agregar
	onCl_newTemplate: onClickType;
	onCl_addTask?: onClickType;
	templateOptions: optionsIcnDrp[];
	modo?: Modo;
};
// ---------------------------------------------------------------------------------------------------------
//      funciones
// ---------------------------------------------------------------------------------------------------------
export type onClickType = (e: React.MouseEvent<HTMLElement>) => void;
export type onChangeType = (e: React.FormEvent<HTMLInputElement>) => void;
export type onBlurType = (e: React.FocusEvent<HTMLInputElement>) => void;
// ---------------------------------------------------------------------------------------------------------
//      estilos
// ---------------------------------------------------------------------------------------------------------
export type css = React.CSSProperties;

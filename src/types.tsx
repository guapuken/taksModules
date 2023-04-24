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
	value: string | number;
	label: string;
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
	onChangeNameTask?: onBlurType;
	onChangeDescriptionTask?: onBlurType;
	idCheckbox?: string;
	onChangeCheckbox?: onChangeType;

	//Icon Dates
	plantillas?: boolean;
	onChangeDias?: onChangeType;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onChangeEndDate?: onChangeType;
	onChangeStartDate?: onChangeType;
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
	onClickPrioridad?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onClickEliminar?: onClickType;
	onClickRecordatorio?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: subtasksProps[];

	//botones agregar
	onClickCreateTemplate: onClickType;
	onClickAddTask?: onClickType;
	templateOptions: optionsIcnDrp[];
	modo?: Modo;
}
export type subtasksProps = {
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
	subtasks?: subtasksProps[];

	//botones agregar
	onClickCreateTemplate: onClickType;
	onClickAddTask?: onClickType;
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

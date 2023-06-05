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
	forbbidenDependencies?: boolean;
	principalTask?: boolean;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	isSubtask?: boolean;
	check: boolean;
	valueTask: string;
	valueDescription: string;
	onClickCheck?: onClickType;
	onCh_nameTask: onChangeType;
	maxEndDate?: string;
	maxStartDate?: string;
	minEndDate?: string;
	minStartDate?: string;
	// onCh_nameTask: onChangeType;
	onCh_descriptionTask: onChangeType;
	// onCh_descriptionTask: onChangeType;
	idCheckbox?: string;
	onCh_checkbox: onChangeType;

	//Icon Dates
	plantillas?: boolean;
	onCh_duration?: onChangeType;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onCh_endDate: onChangeType;
	onCh_startDate: onChangeType;
	startDateValue?: string;
	// startDateValue?: Date;
	endDateValue?: string;
	// endDateValue?: Date;
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
	reasignForbidden?: boolean;
	modo?: Modo;
	dependenciesOptions?: optionsIcnDrp[];
	dependencie?: {
		id: string;
		taskName: string;
		onClick?: onClickType;
	} | null;
}
//INTERFACES
export interface tasksTemplates {
	//Input Task
	idTask: string;
	// taskDisabled?: boolean;
	valueTask: string;
	valueDescription: string;
	// check: boolean;
	// onCh_checkbox: onChangeType;
	// onCh_endDate: onChangeType;
	// onCh_startDate: onChangeType;

	onCh_nameTask: onChangeType;
	onCh_descriptionTask: onChangeType;

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
	onCl_delete: onClickType;
	// plantillas?: boolean;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: subtaskTemplates[];

	//botones agregar
	onCl_newTemplate: onClickType;
	onCl_addTask: onClickType;
	templateOptions: optionsIcnDrp[];
	modo: Modo;
}

export type subtaskTemplates = {
	//Input Task
	idTask: string;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	// check: boolean;
	valueTask: string;
	valueDescription: string;
	onCh_nameTask: onChangeType;
	onCh_descriptionTask: onChangeType;
	// onCh_checkbox: onChangeType;
	onCh_duration?: onChangeType;

	//Icon Dates
	// disabledEndDate?: boolean;
	// disabledStartDate?: boolean;
	// onCh_endDate: onChangeType;
	// onCh_startDate: onChangeType;
	// startDateValue: string;
	// endDateValue: string;
	// plantillas?: boolean;

	//Icon Asign
	responsables: submenusArray[];
	equipos: submenusArray[];
	revision: submenusArray[];
	valueResponsable: string;
	valueRevision?: string;

	//Icon Priority
	// prioridadInicial?: prioritys;
	// onCl_selectPriority: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onCl_delete: onClickType;
	// onCl_reminder: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	subtasks?: subtaskTemplates[];

	//botones agregar
	onCl_newTemplate: onClickType;
	onCl_addTask: onClickType;
	templateOptions: optionsIcnDrp[];
	modo: Modo;
};
export type subtasksProps = {
	//Input Task
	idTask: string;
	taskDisabled?: boolean;
	taskComplete?: boolean;
	check: boolean;
	valueTask: string;
	valueDescription: string;
	// onCh_nameTask: onChangeType;
	onCh_nameTask: onChangeType;
	// onCh_descriptionTask: onChangeType;
	onCh_descriptionTask: onChangeType;
	onCh_checkbox: onChangeType;

	//Icon Dates
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	onCh_endDate: onChangeType;
	onCh_startDate: onChangeType;
	startDateValue?: string;
	endDateValue?: string;
	onCh_duration?: onChangeType;

	//Icon Asign
	responsables: submenusArray[];
	equipos: submenusArray[];
	revision: submenusArray[];
	valueResponsable?: string;
	maxEndDate?: string;
	maxStartDate?: string;
	minEndDate?: string;
	minStartDate?: string;
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

/** Estructura de los mensajes que debe de recibir el componente
 * @example -
 *      {
 *          userName: 'Juan Pérez',
 *          message: 'Como estás?',
 *          date: '2023-09-05 GMT-0600 12:00:00'
 *          type: 'Received',
 *          avatar: undefined
 *      }
 * en caso de ser un mensaje del sistema sólo tiene que incluir (type, message, date)
 * @example -
 *      {
 *          type:'System',
 *          message:'Juan Pérez se unió al grupo',
 *          date:'2023-09-05 GMT-0600 12:00:00'
 *      }
 */
export type msnsChats = {
	avatar?: string | undefined;
	type: 'Received' | 'Sent' | 'System';
	userName?: string;
	message: string;
	date: string; // tiene que llegar en timestamp
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

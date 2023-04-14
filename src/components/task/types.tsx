import {
	Modo,
	onBlurType,
	onChangeType,
	onClickType,
	optionsIcnDrp,
	submenusArray,
} from '../../types';

//INTERFACES
export interface tasks {
	//Input Task
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
	prioridadInicial?: 'baja' | 'media' | 'alta';
	onClickPrioridad?: onClickType;

	//Icon MoreOptions
	moreOptions?: optionsIcnDrp[];
	onClickEliminar?: onClickType;
	onClickRecordatorio?: onClickType;

	//addTask
	subtaskForbbiden?: boolean;
	Children?: any;

	//botones agregar
	onClickCreateTemplate: onClickType;
	onClickAddTask?: onClickType;
	templateOptions: optionsIcnDrp[];
	modo?: Modo;
}

export type templateOptions = {
	templateOptions?: optionsIcnDrp[];
	onClickCreateTemplate: onClickType;
};

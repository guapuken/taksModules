import {
	onBlurType,
	onChangeType,
	onClickType,
	optionsIcnDrp,
	prioritys,
	submenusArray,
	subtasksProps,
} from '../../types';

// interface principal
export interface tasksProps {
	content: content;
	footer: footer;
}

export type content = {
	idTask: string;
	check?: boolean;
	onCh_checkbox?: onChangeType;
	equipos: submenusArray[];
	subtasks?: subtasksProps[];

	onCheck?: onChangeType;
	onCh_descriptionTask?: onBlurType;
	onCh_nameTask?: onBlurType;
	onCl_addTask?: onClickType;
	onCl_newTemplate: onClickType;
	onCl_selectPriority?: onClickType;
	onCl_delete?: onClickType;
	onCl_reminder?: onClickType;
	priorityValue?: prioritys;
	revision: submenusArray[];
	valueRevision?: string;
	responsables: submenusArray[];
	taskComplete?: boolean;
	taskDisabled?: boolean;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	endDateValue?: Date;
	startDateValue?: Date;
	valueTask?: string;
	valueDescription?: string;
	valueResponsable?: string;
	subtaskForbbiden?: boolean;
	onCh_startDate?: onChangeType;
	onCh_endDate?: onChangeType;
	templateOptions: optionsIcnDrp[];
	moreOptions?: optionsIcnDrp[];
	className?: string;
};
export type footer = {
	onCl_confirm?: onClickType;
	onCl_abort?: onClickType;
};

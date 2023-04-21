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
	taskCheckValue?: boolean;
	onCheck?: onChangeType;
	equipos: submenusArray[];
	substasks?: subtasksProps[];
	onChangeTaskDescription?: onBlurType;
	onChangeTaskName?: onBlurType;
	onClickAddTask?: onClickType;
	onClickNewTemplate: onClickType;
	onClickPriority?: onClickType;
	onClickDelete?: onClickType;
	onClickReminder?: onClickType;
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
	chCheck?: onChangeType;
	onChangeStartDate?: onChangeType;
	onChangeEndDate?: onChangeType;
	templateOptions: optionsIcnDrp[];
	moreOptions?: optionsIcnDrp[];
	className?: string;
};
export type footer = {
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
};

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
	onChangeDescription?: onBlurType;
	onChangeName?: onBlurType;
	onClickAddTask?: onClickType;
	onClickNewTemplate: onClickType;
	onClickPriority?: onClickType;
	onClickDeleteTask?: onClickType;
	onClickReminder?: onClickType;
	priorityValue?: prioritys;
	revision: submenusArray[];
	valueRevision?: string;
	responsables: submenusArray[];
	taskComplete?: boolean;
	taskDisabled?: boolean;
	onChangeDays?: onChangeType;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	endDateValue?: Date;
	startDateValue?: Date;
	valueTask?: string;
	valueDescription?: string;
	valueResponsable?: string;
	subtaskForbbiden?: boolean;
	onClickCheck?: onClickType;
	onChangeStartDate?: onChangeType;
	onChangeEndDate?: onChangeType;
	isSubtask?: boolean;
	templateOptions: optionsIcnDrp[];
	moreOptions: optionsIcnDrp[];
	plantillas?: boolean;
	className?: string;
};
export type footer = {
	onClickCreate?: onClickType;
	onClickAbort?: onClickType;
};

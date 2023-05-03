import { onChangeType, onClickType, tasksTemplates } from '../../types';
//INTERFACES
export interface modalTemplates {
	onCl_confirm?: onClickType;
	onCl_abort?: onClickType;
	onCl_addTask?: onClickType;
	onCh_templateName?: onChangeType;
	edit?: boolean;
	templateNameValue?: string;
	idTemplate?: string;
	tasks?: tasksTemplates[];
}

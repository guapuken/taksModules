import { Modo, onChangeType, onClickType, statusTask } from '../../types';

export interface cardProject {
	statusTasks?: statusTask;
	modo: Modo;
	onCl_followProject?: onClickType;
	onCl_showDetails?: onClickType;
	onCl_share?: onClickType;
	onCh_follow?: onChangeType;
	idProject?: string;
	// followNotificationsValue?: boolean;
	follow?: boolean;
	incompletedTask?: number;
	completedTask?: number;
	ejecutivo?: string;
	projectName?: string;
}

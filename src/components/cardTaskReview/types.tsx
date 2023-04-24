import { Modo, onClickType, statusTask } from '../../types';

export interface cardTaskReview {
	statusTask?: statusTask;
	onCl_showDetails?: onClickType;
	modo?: Modo;
	taskName?: string;
	taskDescription?: string;
}

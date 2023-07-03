import { Modo, onClickType, optionsDropdown, statusTask } from '../../../../types';

export interface footerCardProps {
	modo: Modo;
	statusTask: statusTask;
	percentTask: number;
	onCl_showDetails?: onClickType;
	legendButton: string;
	moreOptions?: boolean;
	options?: optionsDropdown[];
	progressBar?: boolean;
}

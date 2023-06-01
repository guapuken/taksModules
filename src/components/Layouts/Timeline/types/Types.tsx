import { Modo, onChangeType, onClickType, optionsDropdown, statusTask } from '../../../../types';

export type medios = {
	porcentaje: number;
	nombre: string;
	status: statusTask;
	onClick?: onClickType;
};
export type tasksTimeline = {
	completed?: boolean;
	taskName: string;
	duration: number;
	onCl_showDetails?: onClickType;
	legendBtn?: string;
};
export interface timelineProjectProps {
	tasks: tasksTimeline[];
	nombreProyecto: string;
	fijos?: medios[];
	urbanos?: medios[];
	indoors?: medios[];
	vallas?: medios[];
	modo: Modo;
	onCh_dropdown: onChangeType;
	opcionesDropdown: optionsDropdown[];
	valorInicialDropdown?: optionsDropdown;
	onCl_compartir: onClickType;
}

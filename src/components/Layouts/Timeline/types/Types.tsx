import { Modo, onChangeType, onClickType, optionsDropdown, statusTask } from '../../../../types';

export type visualizacionMedios = {
	arreglo?: medios[] | null;
	modo: Modo;
	titulo?: string;
	tasks?: medios[];
	onCl_selectedMedios?: onClickType;
	percentSitios?: number;
	percentUrbanos?: number;
	percentIndoors?: number;
	percentVallas?: number;
	statusSitios?: statusTask;
	statusUrbanos?: statusTask;
	statusIndoors?: statusTask;
	statusVallas?: statusTask;
	sitiosFijos?: boolean;
	unidadesUrbanas?: boolean;
	sitiosIndoors?: boolean;
	vallasMoviles?: boolean;
	onCh_dropdownRutas: onChangeType;
	optionsRutas: optionsDropdown[];
	valuesRutas?: optionsDropdown[];
};

export type medios = {
	porcentaje: number;
	nombre: string;
	status: statusTask;
	onClick?: onClickType;
	modo?: Modo;
};
export type tasksTimeline = {
	completed?: boolean;
	taskName: string;
	duration: number;
	onCl_showDetails?: onClickType;
	legendBtn?: string;
};
export interface timelineProjectProps {
	onCh_dropdown?: onChangeType;
	optionsDropdown?: optionsDropdown[];
	initialValueDropdown?: optionsDropdown;
	tasks: tasksTimeline[];
	nombreProyecto: string;
	medios?: medios[] | null;
	modo: Modo;
	onCl_compartir: onClickType;
	onCl_selectedMedios: onClickType;
	percentSitios?: number;
	percentUrbanos?: number;
	percentIndoors?: number;
	percentVallas?: number;
	statusSitios?: statusTask;
	statusUrbanos?: statusTask;
	statusIndoors?: statusTask;
	statusVallas?: statusTask;
	onCl_close?: onClickType;
	onCh_dropdownRutas: onChangeType;
	optionsRutas: optionsDropdown[];
	valuesRutas?: optionsDropdown[];
	title?: string;
}

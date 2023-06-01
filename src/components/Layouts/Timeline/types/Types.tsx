import { onClickType, statusTask } from '../../../../types';

export type fijos = {
	porcentajeMedio: number;
	nombreMedio: string;
	statusMedio: statusTask;
	onCl_medio?: onClickType;
};
export type urbanos = {
	porcentajeRuta: number;
	nombreRuta: string;
	statusRuta: statusTask;
	onCl_medio?: onClickType;
};
export type vallas = {
	porcentajeValla: number;
	nombreValla: string;
	statusValla: statusTask;
	onCl_medio?: onClickType;
};
export interface timelineProjectProps {
	fijos?: fijos[];
	urbanos?: urbanos[];
	indoors?: fijos[];
	vallas?: vallas[];
}

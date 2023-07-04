import { Modo, onClickType, statusTask } from '../../../../types';

export interface cardCampaignProps {
	modo: Modo;
	porcentajeFijos?: number | null;
	porcentajeUrbanos?: number | null;
	porcentajeIndoors?: number | null;
	porcentajeVallas?: number | null;
	statusFijos?: statusTask;
	statusUrbanos?: statusTask;
	statusIndoors?: statusTask;
	statusVallas?: statusTask;
	onCl_mostrarDetalles?: onClickType;
	nombreProyecto: string;
	campaignColor?: string;
}

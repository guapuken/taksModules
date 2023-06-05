import { Modo, onClickType } from '../../../../types';

export interface cardHistorialProps {
	modo: Modo;
	nombreTarea: string;
	onCl_tarea?: onClickType;
	asignadoPor?: string;
	vecesRetrabajada?: number | string | null;
}

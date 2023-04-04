import { Modo } from '../../types';

// type Status = 'Pendientes' | 'En progreso' | 'Completas';
export type BoardSections = {
	[name: string]: Task[];
};
export type screenSize = { width: number; height: number };

//Definición de interfaces que se utilizarán------------------------------------------------------------------------------------------
export type submenus = {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
};

export type Task = {
	id: string;
	// status: Status;
	status: string;
	//TaskName
	modo?: Modo;
	idNotification: string;
	taskName?: string;
	taskDescription?: string;
	valueResponsable?: string;
	valueRevision?: string;
	subtasks?: number;
	percentTask?: number;
	followNotificationsValue?: boolean;
	statusTask?: 'onTime' | 'delayed' | 'outOfTime';
	onClickShowDetails?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickEditar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickFollow?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickRecordatorio?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickComentario?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickFecha?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeNotificationSwitch?: (e: React.FormEvent<HTMLInputElement>) => void;
	responsables?: submenus[];
	equipos?: submenus[];
	revision?: submenus[];
};

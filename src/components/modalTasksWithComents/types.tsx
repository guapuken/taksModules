import { Modo, onClickType } from '../../types';

export type contentProps = {
	subtasks?: subtasks[];
	taskName?: String;
	comentarios?: comentarios[];
	personalMsn?: boolean;
	modo?: Modo;
	taskComplete?: boolean;
};
export type subtasks = {
	taskName?: string;
	taskDescription?: string;
	complete: boolean;
};
export type comentarios = {
	user?: string;
	comentario?: string;
	personalMsn?: boolean;
};

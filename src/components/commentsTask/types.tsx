import { Modo, msnsChats, onChangeType, onClickType } from '../../types';

// exportación de interfaz principal
export interface commentsTask {
	modo: Modo;
	messages: msnsChats[];
	onCl_addComment: onClickType;
	onCh_addFile?: onChangeType;
	onCh_comment: onChangeType;
	initialValueComment?: string;
	isActive?: boolean;
	handleClose: onClickType;
}

// commentTaskComponent
export type commentTask = {
	initialValueComment?: string;
	onCl_addComment: onClickType;
	onCh_addFile?: onChangeType;
	idComment: string;
	modo: Modo;
	onCh_comment: onChangeType;
};

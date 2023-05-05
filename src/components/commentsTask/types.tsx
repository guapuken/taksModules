import React from 'react';
import { Modo, onBlurType, onChangeType, onClickType } from '../../types';

// exportación de interfaz principal
export interface commentsTask {
	modo?: Modo;
	comments?: comments[];
	onCl_addComment?: onClickType;
	onCh_addFile?: onChangeType;
	onCh_comment?: onChangeType;
}

// comments component
export type commentsComponent = {
	comments?: comments[];
	onCl_addComment?: onClickType;
	onCh_AddFile?: onChangeType;
};

// estructura de los comentarios
export type comments = {
	id: string | number;
	user?: string;
	comment?: string;
	personalMsn?: boolean;
	dateAndTime?: string;
};

// commentTaskComponent
export type commentTask = {
	onCl_addComment?: onClickType;
	onCh_addFile?: onChangeType;
	idComment?: string;
	onCh_comment: onBlurType;
};

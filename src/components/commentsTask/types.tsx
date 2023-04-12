import React from 'react';
import { Modo, onChangeType, onClickType } from '../../types';

// exportación de interfaz principal
export interface commentsTask {
	modo?: Modo;
	comments?: comments[];
	onClickAddComment?: onClickType;
	onChangeAddFile?: onChangeType;
}

// comments component
export type commentsComponent = {
	comments?: comments[];
	onClickAddComment?: onClickType;
	onChangeAddFile?: onChangeType;
};

// estructura de los comentarios
export type comments = {
	user?: string;
	comment?: string;
	personalMsn?: boolean;
	dateAndTime?: string;
};

// commentTaskComponent
export type commentTask = {
	onClickAddComment?: onClickType;
	onChangeAddFile?: onChangeType;
};

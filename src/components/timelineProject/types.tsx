import React from 'react';
// types
import { Modo, onClickType } from '../../types';

// exportación de interfaz principal
export interface timelineProps {
	modo?: Modo;
	tasks?: task[];
}
// estructura de laas tareas
type task = {
	taskName?: string;
	duration?: number | string;
	completed?: boolean;
	onClickShow?: onClickType;
	legendBtn?: string;
};

// componente de Tasks
export type tasks = {
	completed?: boolean;
	taskName?: string;
	duration?: number | string;
	onClickShow?: onClickType;
	legendBtn?: string;
};

//componente Header

export type header = {
	modo?: Modo;
};

import React from 'react';
// types
import { Modo } from '../../types';

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
	link?: string;
};

// componente de Tasks
export type tasks = {
	completed?: boolean;
	taskName?: string;
	duration?: number | string;
	link?: string;
};

//componente Header

export type header = {
	modo?: Modo;
};

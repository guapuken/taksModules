import React from 'react';
// types
import { Modo, onClickType } from '../../types';

// exportación de interfaz principal
export interface timelineProps {
	modo: Modo;
	tasks: tasks[];
}

// componente de Tasks
export type tasks = {
	completed?: boolean;
	taskName: string;
	duration: number | string;
	onCl_showDetails: onClickType;
	legendBtn?: string;
	modo: Modo;
};

//componente Header

export type header = {
	modo: Modo;
};

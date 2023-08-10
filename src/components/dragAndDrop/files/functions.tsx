import React from 'react';
import { task, BoardSections } from '../types';
//obtenien la tarea por su estatus--------------------------------------------------------------------------------------------------------
export const getTasksByStatus = (tasks: task[], status: string) => {
	return tasks.filter((task) => task.status === status);
};

/**
 * @param {task[]} tasks - tareas con todos sus propiedades
 * @param {string} id - requiere el id de la tarea
 * @returns - la tarea con todas sus propiedades en un objeto
 */
export const getTaskById = (tasks: task[], id: string) => {
	return tasks.find((task) => task.id === id);
};

/**
 * @param {task[]} tasks - tareas con todos sus propiedades
 * @param {object} BoardSection - requiere un objeto con los nombres de los tableros
 * @returns - un objeto con arreglos de cada tarea que contiene cada objeto ejemplo:
    {
        Por hacer: [array2],
        En proceso: [array 10],
        Completas / Revisión: [array 3]
    }
 */
export const initializeBoard = (tasks: task[], BoardSection: any) => {
	const boardSections: BoardSections = {};

	// Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
	Object.keys(BoardSection).forEach((boardSectionKey) => {
		boardSections[boardSectionKey] = getTasksByStatus(tasks, boardSectionKey as string);
	});
	return boardSections;
};

/**
 * @param {BoardSections} boardSections
 * @param {string} id
 * @returns - el nombre del tablero en que se soltó la tarea ejemplo
        Por hacer
 */
export const findBoardSectionContainer = (boardSections: BoardSections, id: string) => {
	if (id in boardSections) {
		return id;
	}

	const container = Object.keys(boardSections).find((key) =>
		boardSections[key].find((item) => item.id === id)
	);
	return container;
};

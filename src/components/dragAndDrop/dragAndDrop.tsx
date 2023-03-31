import React, { useLayoutEffect, useState } from 'react';
//Importaciones de dnd-kit-core----------------------------------------------------------------------------------------------------------
import {
	useSensors,
	useSensor,
	PointerSensor,
	KeyboardSensor,
	DndContext,
	closestCorners,
	DragEndEvent,
	DragStartEvent,
	DragOverEvent,
	DragOverlay,
	DropAnimation,
	defaultDropAnimation,
	// useDroppable,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
//importación de componentes a usar--------------------------------------------------------------------------------------------------
import { TaskItem } from './taskItem/taskItem';
import BoardSection from './boardSection/boardSection';
//importación de funciones a usar----------------------------------------------------------------------------------------------------
//Importación de elementos multimedia a usar------------------------------------------------------------------------------------------
import { useWindowSize } from '../../utils/widthSize';
import { BoardSections, Task } from './types';
//importaciones de estilos globales y de componente
import '../../global.scss';
import css from './dragAndDrop.module.scss';
import { Modo } from '../../types';

//obtenien la tarea por su estatus--------------------------------------------------------------------------------------------------------
const getTasksByStatus = (tasks: Task[], status: string) => {
	return tasks.filter((task) => task.status === status);
};
//Obtiene la tarea por su id--------------------------------------------------------------------------------------------------------------
const getTaskById = (tasks: Task[], id: string) => {
	return tasks.find((task) => task.id === id);
};

const initializeBoard = (tasks: Task[], BoardSection: any) => {
	const boardSections: BoardSections = {};

	// Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
	Object.keys(BoardSection).forEach((boardSectionKey) => {
		// boardSections[boardSectionKey] = getTasksByStatus(tasks, boardSectionKey as Status);
		boardSections[boardSectionKey] = getTasksByStatus(tasks, boardSectionKey as string);
	});
	return boardSections;
};

const findBoardSectionContainer = (boardSections: BoardSections, id: string) => {
	if (id in boardSections) {
		return id;
	}

	const container = Object.keys(boardSections).find((key) =>
		boardSections[key].find((item) => item.id === id)
	);
	return container;
};

//componente principal que returna el drag and drop------------------------------------------------------------------------------------------
export interface DragAndDropProps {
	tasks: Task[];
	modo?: Modo;
	nameBoards?: { [key: string]: string };
	withAside?: boolean;
	width?: number;
	vertical?: boolean;
	horizontal?: boolean;
	Card?: any;
	data?: any;
}
const DragAndDrop = (props: DragAndDropProps) => {
	const scrSize = useWindowSize();
	// desestructuración de propiedades
	const {
		tasks = [
			{
				id: '1',
				status: 'Pendientes',
				taskName: 'Tarea 1',
				idNotification: '1',
				modo: 'Light',
				taskDescription: 'Tarea 1 por hacer',
			},
		],
		modo = 'Light',
		nameBoards = {
			Pendientes: 'Pendientes',
			'En proceso': 'En proceso',
			Completas: 'Completas',
		},
		width = scrSize.width * 3,
		Card,
		data,
	} = props;

	// Crea el estado inicial del tablero con es estatus de cada una de sus tareas
	const initialBoardSections = initializeBoard(tasks, nameBoards);
	// Actualiza el tablero en el que se encuentra cada tarea
	const [boardSections, setBoardSections] = useState<BoardSections>(initialBoardSections);
	// Selecciona la tarea activa
	const [activeTaskId, setActiveTaskId] = useState<null | string>(null);
	/* Using the useSensors hook to create a sensor. */
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	//se encarga de settear el id activo al momento de mover alguna tarea
	const handleDragStart = ({ active }: DragStartEvent) => {
		setActiveTaskId(active.id as string);
	};

	// Se encarga de buscar los contenedores en los que se colocarán los elementos -------------------------------------------------------
	const handleDragOver = ({ active, over }: DragOverEvent) => {
		const activeContainer = findBoardSectionContainer(boardSections, active.id as string);
		const overContainer = findBoardSectionContainer(boardSections, over?.id as string);

		//valida si hubo un cambio dentro del drag del elemento, sino hubo no se ejecuta ninguna acción
		if (!activeContainer || !overContainer || activeContainer === overContainer) {
			return <></>;
		}

		setBoardSections((boardSection: any) => {
			const activeItem = boardSection[activeContainer];
			const overItem = boardSection[overContainer];

			// Busca la posición index de cada elemento dentro del array ------------------------------------------------------------------
			const activeIndex = activeItem.findIndex((item: any) => item.id === active.id);
			const overIndex = overItem.findIndex((item: any) => item.id !== over?.id);
			return {
				...boardSection,
				[activeContainer]: [
					...boardSection[activeContainer].filter((item: any) => item.id !== active.id),
				],
				[overContainer]: [
					...boardSection[overContainer].slice(0, overIndex),
					boardSections[activeContainer][activeIndex],
					...boardSection[overContainer].slice(
						overIndex,
						boardSection[overContainer].length
					),
				],
			};
		});
	};

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		const activeContainer = findBoardSectionContainer(boardSections, active.id as string);
		const overContainer = findBoardSectionContainer(boardSections, over?.id as string);

		if (!activeContainer || !overContainer || activeContainer !== overContainer) {
			return;
		}

		//localiza en qué posición se encuentra el id que se selecciona
		const activeIndex = boardSections[activeContainer].findIndex(
			(task: any) => task.id === active.id
		);
		//localiza en qué posición se encuentra el id que se soltó
		const overIndex = boardSections[overContainer].findIndex(
			(task: any) => task.id === over?.id
		);

		//esta función hace focus en el orden que tienen las tareas dentro del array
		if (activeIndex !== overIndex) {
			setBoardSections((boardSection: any) => {
				//Se encarga de mover el orden del arreglo
				return {
					...boardSection,
					[overContainer]: arrayMove(boardSection[overContainer], activeIndex, overIndex),
				};
			});
		}
		setActiveTaskId(null);
	};

	//Genera los parametros de animación que se utilizan al dejar una tarea en otra posición
	const dropAnimation: DropAnimation = {
		...defaultDropAnimation,
		duration: 300,
	};

	//se encarga de ver qué tarea es la que se encuentra activa
	const task = activeTaskId ? getTaskById(tasks, activeTaskId) : null;
	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCorners}
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onDragEnd={handleDragEnd}
		>
			<div
				className={
					scrSize.width <= 415 ? css.ctnSml : scrSize.width <= 834 ? css.ctnTbl : css.ctn
				}
			>
				{Object.keys(boardSections).map((boardSectionKey) => {
					//genera los elementos droppables
					return (
						<div
							className={
								scrSize.width <= 415
									? css.boardCtnSml
									: scrSize.width <= 834
									? css.boardCtnTbl
									: css.boardCtn
							}
							key={boardSectionKey}
						>
							<BoardSection
								Card={Card}
								data={data}
								scrSize={scrSize}
								width={width}
								id={boardSectionKey}
								title={boardSectionKey}
								tasks={boardSections[boardSectionKey]}
								modo={modo}
							/>
						</div>
					);
				})}
				<DragOverlay dropAnimation={dropAnimation}>
					{task ? <TaskItem data={data} Card={Card} scrSize={scrSize} /> : null}
				</DragOverlay>
			</div>
		</DndContext>
	);
};
export default DragAndDrop;

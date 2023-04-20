import React from 'react';
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
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
//importación de componentes principales--------------------------------------------------------------------------------------------------
import { TaskItem, BoardSection } from './files';
//Importación de elementos multimedia a usar------------------------------------------------------------------------------------------
import { useWindowSize } from '../../utils/windowSize';
import { BoardSections, dragAndDrop } from './types';
// functions to use
import { findBoardSectionContainer, getTaskById, initializeBoard } from './files/functions';
//importaciones de estilos
import './dragAndDrop.scss';

const DragAndDrop = (props: dragAndDrop) => {
	const scrSize = useWindowSize();
	// desestructuración de propiedades
	const datos = { ...props };
	// console.log('props componente inicial: ', datos);
	// inicialización de propiedades
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
	} = props;

	/**
	 * se encarga de recibir el estado inicial de los tableros que incluyen su contenedores princiaples y las tareas con las que cuentaa cada uno, ejemplo:
	 		{
				Por hacer : [
					{id:1, tarea: Hacer dummies},
				],
				En proceso: [],
				Terminadas: [
					{id:2, tarea: Revisar materiales},
					{id:3, tarea: Hacer solicitud de materiales}
				]
			}
	 */
	const [boardSections, setBoardSections] = React.useState<BoardSections>(
		initializeBoard(tasks, nameBoards)
	);

	/**
	 * muestra el id de la tarea que se encuentra activa
	 */
	const [activeTaskId, setActiveTaskId] = React.useState<null | string>(null);

	/* Using the useSensors hook to create a sensor. */
	const sensors = useSensors(
		// useSensor(PointerSensor),
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	//se encarga de settear el id activo al momento de mover alguna tarea
	const handleDragStart = ({ active }: DragStartEvent) => {
		setActiveTaskId(active.id as string);
	};

	/**
	 * @returns - se encarga de colocar la tarea en el talero en el que se suelta
	 */
	const handleDragOver = ({ active, over }: DragOverEvent) => {
		const activeContainer = findBoardSectionContainer(boardSections, active.id as string);

		const overContainer = findBoardSectionContainer(boardSections, over?.id as string);

		//valida si hubo un cambio dentro del drag del elemento, sino hubo no se ejecuta ninguna acción
		if (!activeContainer || !overContainer || activeContainer === overContainer) {
			return <></>;
		}

		setBoardSections((boardSection: any) => {
			// identifica el tablero en el que se encuentra al momento de comenzar a mover
			const activeItem = boardSection[activeContainer];
			// identifica en que tablero se suelta la tarea
			const overItem = boardSection[overContainer];

			// Busca la posición index de cada elemento dentro del array ------------------------------------------------------------------
			const activeIndex = activeItem.findIndex((item: any) => item.id === active.id);
			const overIndex = overItem.findIndex((item: any) => item.id !== over?.id);

			return {
				//se encarga de cargar la información de la tarea que cambiará de posición
				...boardSection,
				[activeContainer]: [
					...boardSection[activeContainer].filter((item: any) => item.id !== active.id),
				],
				// se encarga de colocar la tarea en el tablero en el que se soltó
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

	// reacomoda el arreglo y los tableros
	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		const activeContainer = findBoardSectionContainer(boardSections, active.id as string);
		const overContainer = findBoardSectionContainer(boardSections, over?.id as string);

		if (!activeContainer || !overContainer || activeContainer !== overContainer) {
			return;
		}

		/* index del elemento deltro del id [0,1,2,3,4,5,6...] */
		//index activo
		const activeIndex = boardSections[activeContainer].findIndex(
			(task: any) => task.id === active.id
		);
		//index final
		const overIndex = boardSections[overContainer].findIndex(
			(task: any) => task.id === over?.id
		);

		/* si la tarea cambio de posición dentro del arreglo se hace un moviemineto dentro del arreglo */
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
	const task = activeTaskId ? getTaskById(datos.tasks, activeTaskId) : null;
	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCorners}
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onDragEnd={(e) => {
				handleDragEnd(e);
				datos.onDragEnd({ boards: boardSections, data: e });
			}}
		>
			<div className={`ctn${modo}_DDC`}>
				{Object.keys(boardSections).map((boardSectionKey) => {
					//genera los elementos droppables
					return (
						<div className="boardCtn" key={boardSectionKey}>
							<BoardSection
								Card={datos.Card}
								data={datos.tasks}
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
					{task ? <TaskItem data={task} Card={datos.Card} /> : null}
				</DragOverlay>
			</div>
		</DndContext>
	);
	// return (
	// 	// <Container
	// 	// 	onClick={{}}
	// 	// 	AsideContent={<AsideTemplates modo="Dark" visible />}
	// 	// 	FooterContent={<Footer />}
	// 	// >
	// 	<DndContext
	// 		sensors={sensors}
	// 		collisionDetection={closestCorners}
	// 		onDragStart={handleDragStart}
	// 		onDragOver={handleDragOver}
	// 		onDragEnd={handleDragEnd}
	// 	>
	// 		<div
	// 			className={
	// 				scrSize.width <= 415 ? 'ctnSml' : scrSize.width <= 834 ? 'ctnTbl' : 'ctn'
	// 			}
	// 		>
	// 			{Object.keys(boardSections).map((boardSectionKey) => {
	// 				//genera los elementos droppables
	// 				return (
	// 					<div
	// 						className={
	// 							scrSize.width <= 415
	// 								? 'boardCtnSml'
	// 								: scrSize.width <= 834
	// 								? 'boardCtnTbl'
	// 								: 'boardCtn'
	// 						}
	// 						key={boardSectionKey}
	// 					>
	// 						<BoardSection
	// 							Card={Card}
	// 							data={data}
	// 							scrSize={scrSize}
	// 							width={width}
	// 							id={boardSectionKey}
	// 							title={boardSectionKey}
	// 							tasks={boardSections[boardSectionKey]}
	// 							modo={modo}
	// 						/>
	// 					</div>
	// 				);
	// 			})}
	// 			<DragOverlay dropAnimation={dropAnimation}>
	// 				{task ? <TaskItem data={data} Card={Card} scrSize={scrSize} /> : null}
	// 			</DragOverlay>
	// 		</div>
	// 	</DndContext>
	// 	// </Container>
	// );
};
export default DragAndDrop;

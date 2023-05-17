import React, { Fragment } from 'react';
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
import { TaskItem, BoardSection, NoCard } from './files';
//Importación de elementos multimedia a usar------------------------------------------------------------------------------------------
import { useWindowSize } from '../../utils/windowSize';
import { BoardSections, dragAndDrop } from './types';
// functions to use
import { findBoardSectionContainer, getTaskById, initializeBoard } from './files/functions';
//importaciones de estilos
import './dragAndDrop.scss';
import Carousel from '../carousel/carousel';
import icon from '../../img/bell.svg';

const DragAndDrop = (props: dragAndDrop) => {
	const scrSize = useWindowSize();
	// desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const {
		tasks = [
			{
				id: '1',
				status: 'Pendientes',
				modo: 'Light',
				idNotification: '1',
				taskName: 'Tarea 1',
				taskDescription: 'Tarea 1 por hacer',
				valueResponsable: '',
				followNotificationsValue: false,
				onCh_follow: () => {},
				onCl_asignTask: () => {},
				onCl_edit: () => {},
				onCl_follow: () => {},
				onCl_reasignDate: () => {},
				onCl_remimder: () => {},
				onCl_showDetails: () => {},
				percentTask: 0,
				statusTask: 'onTime',
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

	//
	return scrSize.width < 1024 ? (
		Object.keys(boardSections).map((boardSectionKey) => {
			return (
				<div style={{ width: '95%', margin: '0 auto' }}>
					<Carousel
						data={boardSections[boardSectionKey]}
						Card={(e: any) => {
							return datos.Card ? (
								<div style={{ position: 'relative' }}>
									{datos.approved && (
										<h3
											style={{
												position: 'absolute',
												right: '20px',
												top: '-10px',
												fontSize: '12px',
												background: '#1cbf59',
												padding: '5px',
												borderRadius: '5px',
												color: '#fff',
											}}
										>
											Revisada
										</h3>
									)}
									<datos.Card {...e.property} />
								</div>
							) : (
								<NoCard taskName={e.taskName} />
							);
						}}
						height={scrSize.height / 4}
						titleContent={
							<div
								style={{
									position: 'absolute',
									left: '50%',
									transform: 'translateX(-50%)',
								}}
								key={boardSectionKey}
							>
								<div
									style={{
										display: 'flex',
										gap: '20px',
									}}
								>
									<p>{boardSectionKey}</p>
									<img
										src={icon}
										alt=""
										style={{ height: '20px', width: 'auto' }}
									/>
								</div>
							</div>
						}
					/>
				</div>
			);
		})
	) : (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCorners}
			onDragStart={(e) => {
				handleDragStart(e);
			}}
			onDragOver={(e) => {
				handleDragOver(e);
			}}
			onDragEnd={(e) => {
				handleDragEnd(e);
				if (datos.onDragEnd) {
					datos.onDragEnd({ boards: boardSections, data: e });
				}
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
					{task ? (
						datos.Card ? (
							<TaskItem data={task} Card={datos.Card} />
						) : (
							<NoCard taskName={task.taskName} />
						)
					) : null}
				</DragOverlay>
			</div>
		</DndContext>
	);
};
export default DragAndDrop;

import React, { useLayoutEffect, useState } from 'react';
//importaciones de estilos globales y de componente
import '../../styles.scss';

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
	useDroppable,
} from '@dnd-kit/core';
import {
	sortableKeyboardCoordinates,
	arrayMove,
	verticalListSortingStrategy,
	SortableContext,
	useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
//importación de componentes a usar--------------------------------------------------------------------------------------------------
import Cards from '../cards';
import CardTask from '../cardTask';
//importación de funciones a usar----------------------------------------------------------------------------------------------------
import { returnSize, sizeCard } from '../../utils/cardsUtils';
//Importación de elementos multimedia a usar------------------------------------------------------------------------------------------
import bell from '../../img/bell.svg';
import { windowSize } from '../../utils/widthSize';

//Definición de tipos de datos--------------------------------------------------------------------------------------------------------
type Status = 'Pendientes' | 'En progreso' | 'Completas';
type Modo = 'Dark' | 'Light';

//Definición de interfaces que se utilizarán------------------------------------------------------------------------------------------
export interface DragAndDropProps {
	tasks: Task[];
	modo?: Modo;
}
interface submenus {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
}
interface Task {
	id: string;
	status: Status;
	//TaskName
	modo?: Modo;
	idNotification: string;
	taskName?: string;
	taskDescription?: string;
	valueResponsable?: string;
	valueRevision?: string;
	subtasks?: number;
	percentTask?: number;
	followNotificationsValue?: boolean;
	statusTask?: 'onTime' | 'delayed' | 'outOfTime';
	onClickShowDetails?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickEditar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickFollow?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickRecordatorio?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickComentario?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickFecha?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeNotificationSwitch?: (e: React.FormEvent<HTMLInputElement>) => void;
	responsables?: submenus[];
	equipos?: submenus[];
	revision?: submenus[];
}
interface BoardSections {
	[name: string]: Task[];
}
interface TaskItemProps {
	task: Task;
	modo: 'Dark' | 'Light';
}
interface SortableTaskItemProps {
	children: React.ReactNode;
	id: string;
}
interface BoardSectionProps {
	id: string;
	title: string;
	tasks: Task[];
	modo: Modo;
}

//obtenien la tarea por su estatus--------------------------------------------------------------------------------------------------------
const getTasksByStatus = (tasks: Task[], status: Status) => {
	return tasks.filter((task) => task.status === status);
};
//Obtiene la tarea por su id--------------------------------------------------------------------------------------------------------------
const getTaskById = (tasks: Task[], id: string) => {
	return tasks.find((task) => task.id === id);
};
//Definición del nombre de los diferentes tableros que habrán disponibles -----------------------------------------------------------------
const BOARD_SECTIONS = {
	Pendientes: 'Pendientes',
	'En proceso': 'En proceso',
	Terminadas: 'Terminadas',
};

const initializeBoard = (tasks: Task[]) => {
	const boardSections: BoardSections = {};

	Object.keys(BOARD_SECTIONS).forEach((boardSectionKey) => {
		boardSections[boardSectionKey] = getTasksByStatus(tasks, boardSectionKey as Status);
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

//Componente que retorna el elemto que podrá moverse entre las diferentes columnas ----------------------------------------------------
const TaskItem = ({ task }: TaskItemProps) => {
	return (
		<CardTask
			idNotification={task.id}
			taskName={task.taskName}
			statusTask={task.statusTask}
			onClickShowDetails={task.onClickShowDetails}
			onClickEditar={task.onClickEditar}
			onClickFollow={task.onClickFollow}
			onClickRecordatorio={task.onClickRecordatorio}
			onClickComentario={task.onClickComentario}
			onClickFecha={task.onClickFecha}
			onChangeNotificationSwitch={task.onChangeNotificationSwitch}
			taskDescription={task.taskDescription}
			valueResponsable={task.valueResponsable}
			valueRevision={task.valueRevision}
			followNotificationsValue={task.followNotificationsValue}
			subtasks={task.subtasks}
			percentTask={task.percentTask}
			responsables={task.responsables}
			equipos={task.equipos}
			revision={task.revision}
		/>
	);
};

//Componente que genera el elemento ordenable de cada columna-----------------------------------------------------------------------------
const SortableTaskItem = ({ children, id }: SortableTaskItemProps) => {
	console.log('Children: ', children, 'Id: ', id);
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id,
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0 : 1,
	};

	return (
		<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			{children}
		</div>
	);
};

//Genera los tableros em los que se podrá vaciar la información o soltar los elementos--------------------------------------------------
const BoardSection = ({ id, title, tasks, modo }: BoardSectionProps) => {
	const { setNodeRef } = useDroppable({
		id,
	});
	return (
		<div
			style={{
				position: 'relative',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					background: modo === 'Dark' ? '#282828' : '#fff',
					position: 'sticky',
					top: '0',
					zIndex: '1',
					height: '3rem',
				}}
			>
				<h2 style={{ fontWeight: 'lighter' }}>{title}</h2>
				<img src={bell} alt="" style={{ height: '3rem' }} />
			</div>
			<SortableContext id={id} items={tasks} strategy={verticalListSortingStrategy}>
				<div ref={setNodeRef}>
					{tasks.map((task) => (
						<div
							key={task.id}
							style={{
								marginTop: '2rem',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<SortableTaskItem id={task.id}>
								<TaskItem task={task} modo={modo} />
							</SortableTaskItem>
						</div>
					))}
				</div>
			</SortableContext>
		</div>
	);
};

//componente principal que returna el drag and drop------------------------------------------------------------------------------------------
const DragAndDrop = (props: DragAndDropProps) => {
	const { tasks, modo = 'Light' } = props;
	const generalTasks = tasks;
	const initialBoardSections = initializeBoard(generalTasks);
	const [boardSections, setBoardSections] = useState<BoardSections>(initialBoardSections);
	console.log('boardSections:', boardSections);

	const [activeTaskId, setActiveTaskId] = useState<null | string>(null);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const handleDragStart = ({ active }: DragStartEvent) => {
		setActiveTaskId(active.id as string);
	};

	// Se encarga de buscar los contenedores en los que se colocarán los elementos -------------------------------------------------------
	const handleDragOver = ({ active, over }: DragOverEvent) => {
		const activeContainer = findBoardSectionContainer(boardSections, active.id as string);
		const overContainer = findBoardSectionContainer(boardSections, over?.id as string);

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

		const activeIndex = boardSections[activeContainer].findIndex(
			(task: any) => task.id === active.id
		);
		const overIndex = boardSections[overContainer].findIndex(
			(task: any) => task.id === over?.id
		);

		if (activeIndex !== overIndex) {
			setBoardSections((boardSection: any) => ({
				...boardSection,
				[overContainer]: arrayMove(boardSection[overContainer], activeIndex, overIndex),
			}));
		}

		setActiveTaskId(null);
	};

	const dropAnimation: DropAnimation = {
		...defaultDropAnimation,
	};

	const task = activeTaskId ? getTaskById(generalTasks, activeTaskId) : null;

	console.log(windowSize().width);
	return (
		<div
			style={{
				width: windowSize().width <= 768 ? sizeCard() + 'rem' : '100vw',
			}}
		>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCorners}
				onDragStart={handleDragStart}
				onDragOver={handleDragOver}
				onDragEnd={handleDragEnd}
			>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '2rem',
					}}
				>
					{Object.keys(boardSections).map((boardSectionKey) => {
						return (
							<div
								style={{
									width:
										windowSize().width <= 768
											? `calc(${windowSize().width}rem + 2rem)`
											: `calc(${sizeCard()}rem + 2rem)`,
									// background: 'red',
									maxHeight:
										windowSize().width <= 768
											? `calc(${windowSize().height / 4 / 10}rem - 2rem)`
											: '70vh',
									overflow: 'auto',
								}}
								key={boardSectionKey}
							>
								<BoardSection
									id={boardSectionKey}
									title={boardSectionKey}
									tasks={boardSections[boardSectionKey]}
									modo={modo}
								/>
							</div>
						);
					})}
					<DragOverlay dropAnimation={dropAnimation}>
						{task ? <TaskItem task={task} modo={modo} /> : null}
					</DragOverlay>
				</div>
			</DndContext>
		</div>
	);
};
export default DragAndDrop;

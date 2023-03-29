import React, { useLayoutEffect, useState } from 'react';
//importaciones de estilos globales y de componente
import '../../styles.scss';
import css from './dragAndDrop.module.scss';

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
import AsideTemplates from '../asideTemplates';
import CardMembersTeam from '../cardMembersTeam';
import Optionmenu from '../optionmenu';
import Container from '../containerComp';
import Dropdown from '../dropdown';
import Button from '../button';

//Definición de tipos de datos--------------------------------------------------------------------------------------------------------
type Status = 'Pendientes' | 'En progreso' | 'Completas';
type Modo = 'Dark' | 'Light';
type BoardSections = {
	[name: string]: Task[];
};

//Definición de interfaces que se utilizarán------------------------------------------------------------------------------------------
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

//obtenien la tarea por su estatus--------------------------------------------------------------------------------------------------------
/**
 * "Get all tasks that have a status that matches the status argument."
 * The function takes two arguments: tasks and status.
 * The tasks argument is an array of Task objects.
 * The status argument is a Status enum.
 * The function returns an array of Task objects.
 * The function uses the filter method to return a new array of Task objects that have a status that
 * matches the status argument
 * @param {Task[]} tasks - Task[] - this is the array of tasks that we want to filter
 * @param {Status} status - Status - This is the type of the status parameter.
 * @returns An array of tasks that have a status of "status"
 */
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
interface TaskItemProps {
	task: Task;
	modo: 'Dark' | 'Light';
}
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
interface SortableTaskItemProps {
	children: React.ReactNode;
	id: string;
}
const SortableTaskItem = ({ children, id }: SortableTaskItemProps) => {
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
interface BoardSectionProps {
	id: string;
	title: string;
	tasks: Task[];
	modo: Modo;
}
const BoardSection = ({ id, title, tasks, modo }: BoardSectionProps) => {
	const { setNodeRef } = useDroppable({
		id,
	});
	return (
		<div className={modo === 'Dark' ? css.dropableCtnDark : css.dropableCtn}>
			<div className={css.ctnTitle}>
				<h2>{title}</h2>
				<img src={bell} alt="" />
			</div>
			<div>
				<SortableContext id={id} items={tasks} strategy={verticalListSortingStrategy}>
					<div ref={setNodeRef}>
						{tasks.map((task) => (
							<div className={css.draggableCtn} key={task.id}>
								<SortableTaskItem id={task.id}>
									<TaskItem task={task} modo={modo} />
								</SortableTaskItem>
							</div>
						))}
					</div>
				</SortableContext>
			</div>
		</div>
	);
};

//componente principal que returna el drag and drop------------------------------------------------------------------------------------------
export interface DragAndDropProps {
	tasks: Task[];
	modo?: Modo;
	heightBoard?: string;
}
const DragAndDrop = (props: DragAndDropProps) => {
	const { tasks, modo = 'Light', heightBoard = '85vh' } = props;
	const generalTasks = tasks;
	const initialBoardSections = initializeBoard(generalTasks);
	console.log('initialBoardSections-----------------');
	console.table(initialBoardSections);
	const [boardSections, setBoardSections] = useState<BoardSections>(initialBoardSections);
	console.log('boardSections------------------------');
	console.table(boardSections);
	const [activeTaskId, setActiveTaskId] = useState<null | string>(null);
	console.log('activeTaskId-------------------------');
	console.table(activeTaskId);

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

		//
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
		duration: 500,
	};

	const Footer = () => (
		<div style={{ zIndex: '10' }}>
			<div style={{ display: 'flex', marginTop: '1rem' }}>
				<h2>Equipo</h2>
				<div style={{ width: '20rem', margin: '0 1rem' }}>
					<Dropdown
						onChange={() => {}}
						options={[
							{ label: 'TI', value: 'TI' },
							{ label: 'Página IMJ', value: 'Página IMJ' },
						]}
					/>
				</div>
				<Button legend="Asignación rápida" primary />
			</div>
			<div style={{ display: 'flex', marginTop: '1rem' }}>
				<CardMembersTeam />
				<CardMembersTeam />
				<CardMembersTeam />
				<CardMembersTeam />
				<CardMembersTeam />
				<CardMembersTeam />
			</div>
		</div>
	);
	//se encarga de ver qué tarea es la que se encuentra activa
	const task = activeTaskId ? getTaskById(generalTasks, activeTaskId) : null;
	return (
		// <Container
		// AsideContent={() => <AsideTemplates />}
		// header={{
		// moduleName: 'Tareas Pendientes',
		// legendBtnModule: 'Crear tarea nueva',
		// onClickBtnModule: () => {},
		// }}
		// onClick={{
		// createProject: () => {},
		// inicio: () => {},
		// mannageProjects: () => {},
		// mannageTask: () => {},
		// mannageTeams: () => {},
		// mannageTemplates: () => {},
		// projectsStatus: () => {},
		// createTask: () => {},
		// createTeam: () => {},
		// createTemplate: () => {},
		// }}
		// FooterContent={Footer}
		// >
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
					// background: 'red',
					gap: '2rem',
					overflow: 'auto',
					maxHeight: '65vh' /* '85vh' */,
				}}
			>
				{Object.keys(boardSections).map((boardSectionKey) => {
					//genera los elementos droppables
					return (
						<div
							className={css.boardCtn}
							style={{ height: heightBoard }}
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
		// </Container>
	);
};
export default DragAndDrop;

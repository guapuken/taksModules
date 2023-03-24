import React, { useState } from 'react';
import '../../styles.scss';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
	horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import CardTask from '../cardTask';
import Cards from '../cards';

function SortableItem(props: any) {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
		id: props.id,
	});
	const {
		status,
		followNotificationsValue,
		onClickShowDetails = () =>
			alert('Change the function ShowDetails with onClickShowDetails property'),
		onChangeNotificationSwitch,
		taskName = 'Nombre de tarea',
		taskDescription = 'Descripción de tarea',
		subtasks = 0,
		valueResponsable,
		valueRevision,
		responsables,
		equipos,
		revision,
		percentTask,
		idNotification = 'task',
		onClickFollow = () => alert('seguir tarea'),
		onClickRecordatorio = () => alert('agregar recordatorio'),
		onClickEditar = () => alert('editar tarea'),
		onClickComentario = () => alert('agregar comentario'),
		onClickFecha = () => alert('reasignar fecha de entrega'),
	} = props.id;
	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	return (
		<div
			ref={setNodeRef}
			style={{ position: 'relative', ...style }}
			{...attributes}
			{...listeners}
		>
			<div style={{ background: 'blue', margin: ' 1rem 0', padding: '5rem' }}>
				<h1>{props.id}</h1>
			</div>
			{/* <Cards Content={() => props.id} /> */}
			{/* <CardTask
				status={status}
				followNotificationsValue={followNotificationsValue}
				onClickShowDetails={onClickShowDetails}
				onChangeNotificationSwitch={onChangeNotificationSwitch}
				taskName={taskName}
				taskDescription={taskDescription}
				subtasks={subtasks}
				valueResponsable={valueResponsable}
				valueRevision={valueRevision}
				responsables={responsables}
				equipos={equipos}
				revision={revision}
				percentTask={percentTask}
				idNotification={idNotification}
				onClickFollow={onClickFollow}
				onClickRecordatorio={onClickRecordatorio}
				onClickEditar={onClickEditar}
				onClickComentario={onClickComentario}
				onClickFecha={onClickFecha}
			/> */}
		</div>
	);
}

const responsables = [
	{
		title: 'Kaori Soto',
	},
	{
		title: 'Jorge Correo',
	},
	{
		title: 'Adrian Romero',
	},
];
const equipos = [
	{
		title: 'Creative',
	},
	{
		title: 'Traffic',
	},
	{
		title: 'Planning',
	},
];
const tasks = [
	{
		// id: '1',
		status: 'outOfTime',
		followNotificationsValue: false,
		onClickShowDetails: () => alert('ver detalles de la tarea 1'),
		onChangeNotificationSwitch: () =>
			alert('Cambiar estado del seguimiento de la notificación'),
		taskName: 'Dummies CDMX',
		taskDescription: 'Hacer los dummies de la campaña de IZZI',
		// subtasks:{subtasks},
		valueResponsable: 'Olaf Ruvalcaba',
		valueRevision: 'Jorge Correa',
		responsables: responsables,
		equipos: { equipos },
		revision: responsables,
		percentTask: 70,
		idNotification: '12356',
		// onClickFollow: () => alert('Seguir tarea'),
		onClickRecordatorio: () => alert('crear recordatorio'),
		onClickEditar: () => alert('editar'),
		onClickComentario: () => alert('ver comentarios y tarea'),
		onClickFecha: () => alert('reasignar fecha1'),
	},
	{
		// id: '2',
		status: 'outOfTime',
		followNotificationsValue: false,
		onClickShowDetails: () => alert('ver detalles de la tarea 1'),
		onChangeNotificationSwitch: () =>
			alert('Cambiar estado del seguimiento de la notificación'),
		taskName: 'Dummies Irapuato',
		taskDescription: 'Hacer los dummies de la campaña de IZZI',
		// subtasks:{subtasks},
		valueResponsable: 'Olaf Ruvalcaba',
		valueRevision: 'Jorge Correa',
		responsables: responsables,
		equipos: { equipos },
		revision: responsables,
		percentTask: 70,
		idNotification: '25362',
		// onClickFollow: () => alert('Seguir tarea'),
		onClickRecordatorio: () => alert('crear recordatorio'),
		onClickEditar: () => alert('editar'),
		onClickComentario: () => alert('ver comentarios y tarea'),
		onClickFecha: () => alert('reasignar fecha1'),
	},
];
export interface DragAndDropProps {}
const DragAndDrop = () => {
	// const [languages, setLanguages] = useState(tasks);
	const [languages, setLanguages] = useState(['tasks', 'Task2']);
	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<div style={{ width: '50vw', height: '100vh', background: 'red' }}>
				<h3>The best programming languages</h3>
				<SortableContext items={languages} strategy={verticalListSortingStrategy}>
					{languages.map((language) => {
						return <SortableItem id={language} />;
					})}
				</SortableContext>
			</div>
		</DndContext>
	);

	// const moveArray = (items: any) => {
	// 	const activeIndex = items.indexOf(active.id);
	// 	const overIndex = items.indexOf(over.id);
	// 	arrayMove();
	// };
	function handleDragEnd(event: any) {
		console.log('dragEnd called');
		const { active, over } = event;
		console.log('Active: ', active.id);
		console.log('Over: ', over.id);

		if (active.id !== over.id) {
			setLanguages((items: any) => {
				const activeIndex = items.indexOf(active.id);
				const overIndex = items.indexOf(over.id);
				arrayMove();
			});
		}
	}
};
export default DragAndDrop;

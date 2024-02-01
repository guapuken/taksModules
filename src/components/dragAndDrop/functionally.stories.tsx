import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import DragAndDrop from '.';
import { ButtonCompound, GetIcons } from '../../CompoundComponents';
import { CardTask } from '../../components';
import AsideTemplates from '../asideTemplates/asideTemplates';
import Container from '../containerComp/container';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [notifications, setNotifications] = React.useState(false);
	const [dragEnd, setDragEnd] = React.useState({});
	React.useEffect(() => { }, [notifications]);
	const [tasks, setTasks] = useState([
		{
			modo: 'Light',
			onCl_asignTask: () => { },
			onCl_reasignDate: () => { },
			onCl_remimder: {} as any,
			onCl_showDetails: {} as any,
			valueResponsable: '',
			id: '1',
			idNotification: '1',
			status: 'To Do',
			taskName: 'darle un sape a Adan',
			taskDescription: 'no pues creo que no',
			statusTask: 'outOfTime',
			percentTask: 25,
			valueRevision: 'Jorge Correa',
			followNotificationsValue: notifications,
			onCl_follow: () => {
				setNotifications(!notifications);
			},
			onCl_edit: () => alert('editar'),
			onCh_follow: () => alert('editar'),
			onCl_status: () => alert('hola'),
		},
		{
			modo: 'Light',
			id: '2',
			idNotification: '2',
			onCl_edit: () => alert('editar'),
			onCl_showDetails: () => alert('editar'),
			status: 'To Do',
			taskName: 'Hacer las tareas del día siguiente',
			taskDescription: 'no pues creo que no',
			statusTask: 1,
			percentTask: 25,
			onCl_follow: () => {
				setNotifications(!notifications);
			},
			onCl_remimder: {} as any,
			followNotificationsValue: notifications,
			onCl_asignTask: () => { },
			onCl_status: () => alert('hola'),
			valueResponsable: "",
			onCl_reasignDate: () => { },
			onCh_follow: () => setNotifications(!notifications),
		},
	])

	const onClick = () => setTasks([
		{
			modo: 'Light',
			onCl_asignTask: () => { },
			onCl_reasignDate: () => { },
			onCl_remimder: {} as any,
			onCl_showDetails: {} as any,
			valueResponsable: '',
			id: '1',
			idNotification: '1',
			status: 'To Do',
			taskName: 'darle un sape a Adan',
			taskDescription: 'no pues creo que no',
			statusTask: 'outOfTime',
			percentTask: 25,
			valueRevision: 'Jorge Correa',
			followNotificationsValue: notifications,
			onCl_follow: () => {
				setNotifications(!notifications);
			},
			onCl_edit: () => alert('editar'),
			onCh_follow: () => alert('editar'),
			onCl_status: () => alert('hola'),
		},
		{
			modo: 'Light',
			id: '2',
			idNotification: '2',
			onCl_edit: () => alert('editar'),
			onCl_showDetails: () => alert('editar'),
			status: 'Progress',
			taskName: 'Hacer las tareas',
			taskDescription: 'no pues creo que no',
			statusTask: 1,
			percentTask: 25,
			onCl_follow: () => {
				setNotifications(!notifications);
			},
			onCl_remimder: {} as any,
			followNotificationsValue: notifications,
			onCl_asignTask: () => { },
			onCl_status: () => alert('hola'),
			valueResponsable: "",
			onCl_reasignDate: () => { },
			onCh_follow: () => setNotifications(!notifications),
		}])

	return (
		<Container>
			<ButtonCompound color="red" onClick={onClick}>
				<ButtonCompound.Legend>Cambiar</ButtonCompound.Legend>
				<ButtonCompound.Svg><GetIcons icon='prioridad' size={30} fill="#fff" /></ButtonCompound.Svg>
			</ButtonCompound>
			<DragAndDrop
				modo="Dark"
				Card={CardTask}
				tasks={tasks}
				nameBoards={{
					'To Do': 'To Do',
					Progress: 'Progress',
					Done: 'Done',
				}}
			/>
		</Container >
	);
}
storiesOf('Pruebas funcionalidad/drag and drop', module).add('setData', () => <DemoComponent />);

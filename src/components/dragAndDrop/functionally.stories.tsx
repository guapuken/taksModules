import React from 'react';
import DragAndDrop from '.';
import { storiesOf } from '@storybook/react';
import { CardTask } from '../../components';
import Container from '../containerComp/container';
import AsideTemplates from '../asideTemplates/asideTemplates';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [notifications, setNotifications] = React.useState(false);
	const [dragEnd, setDragEnd] = React.useState({});
	React.useEffect(() => {}, [notifications]);

	return (
		<Container AsideContent={<AsideTemplates />}>
			<DragAndDrop
				modo="Dark"
				Card={CardTask}
				tasks={[
					{
						modo: 'Light',
						diasAtraso: 3,
						onCl_asignTask: () => {},
						onCl_reasignDate: () => {},
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
						taskName: 'Hacer las tareas del día siguiente',
						taskDescription: 'no pues creo que no',
						statusTask: 1,
						percentTask: 25,
						onCl_follow: () => {
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,

						onCh_follow: () => setNotifications(!notifications),
					},
					{
						modo: 'Light',
						id: '3',
						idNotification: '3',
						status: 'To Do',
						taskName: 'decirle gracias a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 2,
						percentTask: 25,
						onCl_follow: () => {
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,
						onCl_edit: () => alert('editar'),

						onCh_follow: () => setNotifications(!notifications),
					},
					{
						modo: 'Light',
						id: '4',
						idNotification: '4',
						status: 'To Do',
						taskName: 'decirle gracias a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 1,
						percentTask: 25,
						onCl_follow: () => {
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,
						onCl_edit: () => alert('editar'),

						onCh_follow: () => setNotifications(!notifications),
					},
					{
						modo: 'Light',
						id: '5',
						idNotification: '5',
						status: 'Done',
						taskName: 'decirle gracias a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 1,
						percentTask: 25,
						onCl_follow: () => {
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,
						onCl_edit: () => alert('editar'),

						onCh_follow: () => setNotifications(!notifications),
					},
				]}
				nameBoards={{
					'To Do': 'To Do',
					Progress: 'Progress',
					Done: 'Done',
				}}
			/>
		</Container>
	);
}
storiesOf('Pruebas funcionalidad/drag and drop', module).add('setData', () => <DemoComponent />);

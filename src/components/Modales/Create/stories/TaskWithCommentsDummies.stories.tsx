import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTaskWithComments from '../TasksWithComments/modalTaskWithComents';

function DemoComponent(props: any) {
	return (
		<ModalTaskWithComments
			onCl_close={() => alert('Cerrar')}
			onCl_reWork={() => {}}
			// isReviewer
			reasonToRework={{ id: '1', title: 'No hay material' }}
			onCh_comment={(e) => console.log('comments: ', e.target)}
			onCl_addComment={(e) => alert('addComment: ')}
			onCl_approve={(e) => alert('aprobar: ')}
			taskName="Dummies plazas principales Name"
			taskDescription="Dummies plazas principales Description"
			modo="Light"
			onCl_abort={() => alert('cancelar')}
			onCl_edit={() => alert('editar')}
			isReviewer
			isCampaignTask
			reasonsToWorkAgain={[]}
			valueComment={''}
			messages={[
				{
					userName: 'Kaori Soto',
					type: 'Received',
					message:
						'Por que aún no se termina si eso tiene que estar montado a más tardar el martes por la mañana',
					date: '2023-05-09 GMT-0600 12:00:00',
				},
				{
					userName: 'Giselle Ascencio',
					message: 'Hubo unos problemas al recibir los artes de parte del cliente',
					date: '2023-05-09 GMT-0600 13:00:00',
					type: 'Sent',
				},
				{
					userName: 'Giselle Ascencio',
					message: 'Pero ya estamos en eso',
					date: '2023-05-09 GMT-0600 13:01:00',
					type: 'Sent',
				},
				{
					userName: 'Kaori Soto',
					type: 'Received',
					message: 'Perfecto, quedo al pendiente',
					date: '2023-05-09 GMT-0600 13:15:00',
				},
			]}
			onCh_addFile={() => {}}
			subtasks={[
				{
					taskName: 'Dummies CDMX',
					taskDescription: 'Dummies de la plaza CDMX',
					subtasks: [
						{
							taskName: 'Dummies GDL',
							taskDescription: 'Hacer dummies',
							subtasks: [
								{
									taskName: 'Dummies GDL',
									taskDescription: 'Hacer dummies',
								},
								{
									taskName: 'Dummies GDL',
									taskDescription: 'Hacer dummies',
									completed: true,
								},
							],
						},
						{
							taskName: 'Dummies GDL',
							taskDescription: 'Hacer dummies',
							completed: true,
						},
					],
				},
				{
					taskName: 'Dummies CDMX',
					taskDescription: 'Dummies de la plaza CDMX',
					completed: true,
					subtasks: [
						{
							taskName: 'Dummies GDL',
							taskDescription: 'Hacer dummies',
							completed: true,
						},
						{
							taskName: 'Dummies GDL',
							taskDescription: 'Hacer dummies',
							completed: true,
						},
					],
				},
			]}
			onCh_dropdown={(e) => console.log(e)}
			onCl_confirm={() => alert('confirmar')}
		/>
	);
}

// creación de stories
storiesOf('Modales/Creación/TaskWithComments/Ejemplos/Dummies', module).add('Dummies', () => (
	<DemoComponent />
));

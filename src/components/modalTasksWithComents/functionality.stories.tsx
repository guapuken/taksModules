import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTaskWithComments from '.';
import { optionsType } from '../modalTeams/types';
import { autoIncrementalId } from '../../utils/functions/functions';

type options = {
	id: string;
	title: string;
};
function DemoComponent(props: any) {
	const [check, setCheck] = React.useState(false);
	return (
		<ModalTaskWithComments
			onCh_descriptionTask={(e) => console.log('descriptionTask: ', e.target.value)}
			onCh_nameTask={(e) => console.log('nameTask: ', e.target.value)}
			onCh_comment={(e) => console.log('comments: ', e.target.value)}
			onCh_checkbox={(e) => {
				setCheck(!check);
			}}
			onCh_endDate={(e) => console.log('endDate: ', e.target.value)}
			onCh_startDate={(e) => console.log('startDate: ', e.target.value)}
			onCl_newTemplate={(e) => alert('newtemplate: ')}
			onCl_addComment={(e) => alert('addComment: ')}
			onCl_approve={(e) => alert('aprobar: ')}
			onCl_addTask={(e) => alert('addTask: ')}
			onCl_selectPriority={(e) => alert('seleconCl_selectPriority: ')}
			onCl_delete={(e) => alert('delete: ')}
			onCl_reminder={(e) => alert('reminder: ')}
			taskName="Dummies plazas principales Name"
			taskDescription="Dummies plazas principales Description"
			idTask={String(autoIncrementalId())}
			endDateValue="2023-09-05 GMT-0600 00:00:00"
			startDateValue="2023-09-05 GMT-0600 00:00:00"
			modo="Light"
			messages={[
				{
					userName: 'kaori Soto',
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
					userName: 'kaori Soto',
					type: 'Received',
					message: 'Perfecto, quedo al pendiente',
					date: '2023-05-09 GMT-0600 13:15:00',
				},
			]}
			templateOptions={[
				{
					id: String(autoIncrementalId()),
					title: 'Espectaculares',
				},
				{
					id: String(autoIncrementalId()),
					title: 'Muros',
				},
			]}
			check={check}
			prioridadInicial="baja"
			onCh_addFile={() => {}}
			isReviewer={false}
			valueResponsable="Juan"
			equipos={[{ id: String(autoIncrementalId()), title: 'Creative' }]}
			responsables={[{ id: String(autoIncrementalId()), title: 'Juan' }]}
			revision={[{ id: String(autoIncrementalId()), title: 'Juan' }]}
			subtasks={[
				{
					equipos: [],
					idTask: String(autoIncrementalId()),
					onCh_descriptionTask: () => {},
					onCh_nameTask: () => {},
					onCl_newTemplate: () => {},
					responsables: [],
					revision: [],
					templateOptions: [],
					valueTask: 'Dummies CDMX',
					valueDescription: 'Dummies de la plaza CDMX',
					check: false,
				},
				{
					equipos: [],
					idTask: String(autoIncrementalId()),
					onCh_descriptionTask: () => {},
					onCh_nameTask: () => {},
					onCl_newTemplate: () => {},
					responsables: [],
					revision: [],
					templateOptions: [],
					valueTask: 'Dummies CDMX',
					valueDescription: 'Dummies de la plaza CDMX',
					check: true,
				},
			]}
			onCh_dropdown={(e) => console.log(e)}
			onCl_confirm={() => alert('confirmar')}
		/>
	);
}

// creación de stories
storiesOf('Pruebas funcionalidad/task with comments modal', module).add('setData', () => (
	<DemoComponent />
));

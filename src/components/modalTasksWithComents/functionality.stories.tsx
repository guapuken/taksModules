import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTaskWithComments from '.';
import { optionsType } from '../modalTeams/types';

type options = {
	id: string;
	title: string;
};
function DemoComponent(props: any) {
	const [file, setFile] = React.useState('');

	const [reasonToReWork, setReasonToReWork] = React.useState<options>();

	// consoles para ver que funcionen correctamente los setteos
	// console.clear();
	console.log('Archivo', file);
	console.log('Retrabajar: ', reasonToReWork);

	return (
		<ModalTaskWithComments
			taskName="Dummies plazas principales"
			taskComplete={false}
			subtasks={[
				{
					taskName: 'Dummies CDMX',
					taskDescription: 'Dummies de la plaza CDMX',
					complete: false,
				},
				{
					taskName: 'Dummies MTY',
					taskDescription: 'Dummies de la plaza CDMX',
					complete: false,
				},
				{
					taskName: 'Dummies GDL',
					taskDescription: 'Dummies de la plaza CDMX',
					complete: true,
				},
			]}
			modo="Dark"
			onCl_addComent={() => alert('Agregar comentario')}
			onCl_confirm={() => alert('confirmar retrabajar')}
			onCl_reWork={() => alert('Retrabajar tarea')}
			onCl_approve={() => alert('Aprobar tarea')}
			onCh_dropdown={(e) => setReasonToReWork(e)}
			onCh_addFile={(e) => setFile(e.value)}
			comments={[
				{
					user: 'kaori Soto',
					comentario:
						'Por que aún no se termina si eso tiene que estar montado a más tardar el martes por la mañana',
					dateAndTime: 'hace 5 minutos',
				},
				{
					user: 'Giselle Ascencio',
					comentario: 'Hubo unos problemas al recibir los artes de parte del cliente',
					personalMsn: true,
					dateAndTime: 'hace 3 minutos',
				},
			]}
		/>
	);
}

// creación de stories
storiesOf('Pruebas funcionalidad/task with comments modal', module).add('setData', () => (
	<DemoComponent />
));

import React from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTaskWithComments from '.';

function DemoComponent(props: any) {
	const [file, setFile] = React.useState('');
	const [reasonToReWork, setReasonToReWork] = React.useState('');

	// consoles para ver que funcionen correctamente los setteos
	console.clear();
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
			onClickAddComent={() => alert('Agregar comentario')}
			onClickConfirm={() => alert('confirmar retrabajar')}
			onClickReWork={() => alert('Retrabajar tarea')}
			onClickApprove={() => alert('Aprobar tarea')}
			onChangeDrop={(e) => setReasonToReWork(e.value)}
			onChangeAddFile={(e) => setFile(e.target.value)}
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

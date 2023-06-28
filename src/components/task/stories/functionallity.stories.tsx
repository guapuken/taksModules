import React, { Fragment, useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';

import { Task } from '../..';

function DemoComponent() {
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [priority, setPriority] = useState('baja');
	const [dependencie, setDependencie] = useState(null);
	const [dependencie2, setDependencie2] = useState(null);
	const [check, setCheck] = useState(false);

	const [dificultad, setDificultad] = useState({
		id: '4',
		title: 'Dificil',
	});

	useEffect(() => {
		console.log({ check, dependencie });
	}, [check]);
	// console.log(check);
	return (
		<Fragment>
			<Task
				check={check}
				modo="Light"
				valueDificultad={dificultad}
				onCh_dificultad={(e) =>
					setDificultad({ id: e.target.id, title: e.target.outerText })
				}
				// isPM
				// haveSubPersonal
				principalTask
				// plantillas
				onCh_checkbox={() => setCheck(!check)}
				//
				equipos={[]}
				idTask="1"
				onCh_descriptionTask={(e) => setDescription(e.target.value)}
				onCh_nameTask={(e) => {}}
				responsables={[]}
				revision={[]}
				forbbidenDependencies
				prioridadInicial={'none'}
				valueResponsable="Hola"
				valueRevision="Adios"
				// onCl_selectPriority={()=>}
				templateOptions={[]}
				valueTask={'name'}
				onCh_endDate={(e) => setStartDate(e.target.value)}
				onCh_startDate={(e) => setEndDate(e.target.value)}
				valueDescription={description}
				endDateValue={endDate}
				startDateValue={startDate}
				subtasks={[
					{
						check: check,
						onCh_checkbox: () => setCheck(!check),
						onCh_endDate: () => {},
						onCh_startDate: () => {},
						valueDescription: description,
						valueTask: 'name',
						equipos: [],
						idTask: '2',
						valueDificultad: 5,
						dependence: dependencie,
						dependenciesOptions: [
							{
								id: '1',
								title: 'Dummies CDMX',
								onClick: (e) => {
									console.log(e);
									setDependencie({ id: '1', title: 'Dummies CDMX' });
								},
							},
							{ id: '2', title: 'Bloqueos' },
						],
						onCh_descriptionTask: (e) => setDescription(e.target.value),
						onCh_nameTask: (e) => {},
						onCl_newTemplate: () => alert('newTemplate'),
						responsables: [],
						revision: [],
						templateOptions: [],
						endDateValue: '2023-09-05 00:00:00',
						startDateValue: '2023-09-05 00:00:00',
					},
					{
						check: check,
						onCh_checkbox: () => setCheck(!check),
						onCh_endDate: () => {},
						onCh_startDate: () => {},
						valueDescription: description,
						valueTask: 'name',
						equipos: [],
						idTask: '3',
						valueDificultad: 5,
						dependence: dependencie,
						dependenciesOptions: [
							{
								id: '1',
								title: 'Dummies CDMX',
								onClick: (e) => {
									console.log(e);
									setDependencie({ id: '1', title: 'Dummies CDMX' });
								},
							},
							{ id: '2', title: 'Bloqueos' },
						],
						onCh_descriptionTask: (e) => setDescription(e.target.value),
						onCh_nameTask: (e) => {},
						onCl_newTemplate: () => alert('newTemplate'),
						responsables: [],
						revision: [],
						templateOptions: [],
						endDateValue: '2023-09-05 00:00:00',
						startDateValue: '2023-09-05 00:00:00',
					},
				]}
			/>
		</Fragment>
	);
}
storiesOf('Pruebas funcionalidad/tasks', module).add('setData', () => <DemoComponent />);

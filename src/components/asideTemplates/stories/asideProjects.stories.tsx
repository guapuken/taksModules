import React from 'react';

import { storiesOf } from '@storybook/react';
import { AsideTemplates, CardProject } from '../..';

storiesOf('Átomos/aside/Examples/projects', module).add('projects', () => (
	<AsideTemplates
		onCl_reorder={{} as any}
		modo="Dark"
		priText={`Sin tareas por el momento?`}
		secText={`Déjate de huevonadas 😎`}
		legendBtn="Nueva tarea"
		optionsDropdown={[
			{
				id: 'revisar',
				title: 'Proyectos activos',
			},
			{
				id: 'revisión',
				title: 'Tareas activas',
			},
		]}
		initialValueDropdown={{ id: 'revisar', title: 'Proyectos activos' }}
		placeholderDropdown="Selecciona la visualización"
		tasks={[
			{
				id: '1',
				onCl_showDetails: () => alert('Ver detalles de proyecto'),
				projectName: 'UBER EATS-5263-ESP-NOV',
				ejecutivo: 'Juan Almada',
				statusTasks: 2,
				completedTask: 15,
				incompletedTask: 2,
			},
			{
				id: '2',
				onCl_showDetails: () => alert('Ver detalles de proyecto'),
				projectName: 'MC DONALDS-4658-MUR-ENE',
				ejecutivo: 'Andrea Ramírez',
				statusTasks: 3,
				completedTask: 7,
				incompletedTask: 8,
			},
			{
				id: '3',
				onCl_showDetails: () => alert('Ver detalles de proyecto'),
				projectName: 'ELECTROLIT-7862-VLM-DIC',
				ejecutivo: 'Ramón Ruiz',
				statusTasks: 1,
				completedTask: 1,
				incompletedTask: 3,
			},
			{
				id: '4',
				onCl_showDetails: () => alert('Ver detalles de proyecto'),
				projectName: 'NETFLIX TERROR-4562-ESP-MAR',
				ejecutivo: 'Juan Almada',
				statusTasks: 3,
				completedTask: 1,
				incompletedTask: 3,
			},
		]}
		Card={CardProject}
	/>
));

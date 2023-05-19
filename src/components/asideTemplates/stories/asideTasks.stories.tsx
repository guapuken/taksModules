import React from 'react';

import { storiesOf } from '@storybook/react';
import { AsideTemplates, CardTaskReview } from '../..';

storiesOf('Átomos/aside/Examples/tasksReview', module).add('tasksReview', () => (
	<AsideTemplates
		onCl_reorder={{} as any}
		modo="Light"
		priText={`Sin tareas por el momento?`}
		secText={`Déjate de huevonadas 😎`}
		legendBtn="Nueva tarea"
		optionsDropdown={[
			{
				id: 'revisar',
				title: 'Tareas por revisar',
			},
			{
				id: 'revisión',
				title: 'Tareas en revisión',
			},
		]}
		initialValueDropdown={{ id: 'revisar', title: 'Tareas por revisar' }}
		placeholderDropdown="Selecciona la visualización"
		tasks={[
			{
				id: '25',
				taskName: 'a shgn kgs dgsnd khsgdh nskdj gnksjh dnghkjs dng',
				taskDescription: 'Recordar hacer los dummies de la campaña de uber',
				statusTask: 2,
				onCl_showDetails: () => alert('ver detalles'),
			},
			{
				id: '2',
				taskName: 'z',
				taskDescription: 'Recordar hacer los dummies de la campaña de uber',
				statusTask: 3,
				onCl_showDetails: () => alert('ver detalles'),
			},
			{
				id: '30',
				taskName: 'k',
				taskDescription: 'Recordar hacer los dummies de la campaña de uber',
				statusTask: 1,
				onCl_showDetails: () => alert('ver detalles'),
			},
			{
				id: '1',
				taskName: 'd',
				taskDescription: 'Recordar hacer los dummies de la campaña de uber',
				statusTask: 3,
				onCl_showDetails: () => alert('ver detalles'),
			},
		]}
		Card={CardTaskReview}
	/>
));

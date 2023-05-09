import { Meta, Story } from '@storybook/react';
import React from 'react';
// componente principal
import AsideTemplates from '../asideTemplates';
// types
import { aside } from '../types/types';

// utilidades del storybook
import { boolean, functions, modo, object, text } from '../../../storyUtils';

// componentes auxiliares
import Cards from '../../cards';

// creación de plantilla donde se colocará el componente
const Template: Story<aside> = (args) => <AsideTemplates {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {
	// isWhite: true,
	visible: true,
	modo: 'Dark',
};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	visible: true,
	modo: 'Dark',
	priText: `Sin tareas por el momento?`,
	secText: `Déjate de huevonadas 😎`,
	legendBtn: 'Nueva tarea',
	tasks: [
		{
			id: '1',
			taskName: 'Hacer Dummies',
			taskDescription: 'Recordar hacer los dummies de la campaña de uber',
			statusTask: 3,
			onCl_showDetails: () => alert('ver detalles'),
		},
		{
			id: '1',
			taskName: 'Hacer Dummies',
			taskDescription: 'Recordar hacer los dummies de la campaña de uber',
			statusTask: 3,
			onCl_showDetails: () => alert('ver detalles'),
		},
		{
			id: '1',
			taskName: 'Hacer Dummies',
			taskDescription: 'Recordar hacer los dummies de la campaña de uber',
			statusTask: 3,
			onCl_showDetails: () => alert('ver detalles'),
		},
		{
			id: '1',
			taskName: 'Hacer Dummies',
			taskDescription: 'Recordar hacer los dummies de la campaña de uber',
			statusTask: 3,
			onCl_showDetails: () => alert('ver detalles'),
		},
	],
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará / nombre del componente
	title: 'Átomos/aside',
	component: AsideTemplates,
	//definición de argumentos
	argTypes: {
		visible: boolean(),
		modo: modo(),
		priText: text(),
		secText: text(),
		legendBtn: text(),
		tasks: object(),
		imageNoTasks: text(),
		idSection: text(),
		onCl_btn: functions(),
	},
} as Meta;

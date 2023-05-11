import React from 'react';
import { Meta, Story } from '@storybook/react';
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

const tareasRevisar = [
	{
		id: '25',
		taskName: 'a',
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
];
const tareasRevision = [
	{
		id: '25',
		taskName: 'a',
		taskDescription: 'Recordar hacer los dummies de la campaña de uber',
		statusTask: 2,
		onCl_showDetails: () => alert('ver detalles'),
	},
];
//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	visible: true,
	modo: 'Dark',
	priText: `Sin tareas por el momento?`,
	secText: `Déjate de huevonadas 😎`,
	legendBtn: 'Nueva tarea',
	tasks: tareasRevisar,
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

import React from 'react';

//importación de elementos del storybook para usar
import { Meta, Story } from '@storybook/react';
//importación de componente principal
import ModalTaskWithComents from '.';

//Creación de plantilla donde se colocarán las historias
const Template: Story = (args) => <ModalTaskWithComents {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	personalMsn: true,
	comentarios: [
		{
			user: 'Jorge correa',
			comentario: ' para cuándo queda lista?',
			personalMsn: false,
			dateAndTime: 'hace 10 minutos',
		},
		{
			user: 'Victor Galván',
			comentario: ' en cuanto se pueda queda al 100',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			user: 'Kaori Soto',
			comentario: 'tiene que queda listo hoy',
			personalMsn: false,
			dateAndTime: 'hace 1 minutos',
		},
		{
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			user: 'Jorge correa',
			comentario: ' para cuándo queda lista?',
			personalMsn: false,
			dateAndTime: 'hace 10 minutos',
		},
		{
			user: 'Victor Galván',
			comentario: ' en cuanto se pueda queda al 100',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			user: 'Kaori Soto',
			comentario: 'tiene que queda listo hoy',
			personalMsn: false,
			dateAndTime: 'hace 1 minutos',
		},
		{
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
	],
	subtasks: [
		{
			taskName: 'Dummies GDL',
			taskDescription: 'Realizar dummies de GDL',
			complete: true,
		},
		{
			taskName: 'Dummies MTY',
			taskDescription: 'Realizar dummies de MTY',
			complete: false,
		},
		{
			taskName: 'Dummies MER',
			taskDescription: 'Realizar dummies de MER',
			complete: true,
		},
		{
			taskName: 'Dummies CDMX',
			taskDescription: 'Realizar dummies de CDMX',
			complete: true,
		},
		{
			taskName: 'Dummies CDMX',
			taskDescription: 'Realizar dummies de CDMX',
			complete: true,
		},
		{
			taskName: 'Dummies CDMX',
			taskDescription: 'Realizar dummies de CDMX',
			complete: true,
		},
	],
	taskComplete: true,
};

//exportación de valores default
export default {
	title: 'Modales/task with coments',
	component: ModalTaskWithComents,
	//definición de argumentos
	argTypes: {},
} as Meta;

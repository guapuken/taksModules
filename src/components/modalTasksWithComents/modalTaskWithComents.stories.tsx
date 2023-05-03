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
	comments: [
		{
			id: '1',
			user: 'Jorge correa',
			comentario: ' para cuándo queda lista?',
			personalMsn: false,
			dateAndTime: 'hace 10 minutos',
		},
		{
			id: '2',
			user: 'Victor Galván',
			comentario: ' en cuanto se pueda queda al 100',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			id: '3',
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			id: '4',
			user: 'Kaori Soto',
			comentario: 'tiene que queda listo hoy',
			personalMsn: false,
			dateAndTime: 'hace 1 minutos',
		},
		{
			id: '5',
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			id: '6',
			user: 'Jorge correa',
			comentario: ' para cuándo queda lista?',
			personalMsn: false,
			dateAndTime: 'hace 10 minutos',
		},
		{
			id: '7',
			user: 'Victor Galván',
			comentario: ' en cuanto se pueda queda al 100',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			id: '8',
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
		{
			id: '9',
			user: 'Kaori Soto',
			comentario: 'tiene que queda listo hoy',
			personalMsn: false,
			dateAndTime: 'hace 1 minutos',
		},
		{
			id: '10',
			user: 'Victor Galván',
			comentario: 'ya es muy poco lo que falta',
			personalMsn: true,
			dateAndTime: 'hace 2 minutos',
		},
	],
	subtasks: [
		{
			id: '11',
			taskName: 'Dummies GDL',
			taskDescription: 'Realizar dummies de GDL',
			complete: true,
		},
		{
			id: '12',
			taskName: 'Dummies MTY',
			taskDescription: 'Realizar dummies de MTY',
			complete: false,
		},
		{
			id: '13',
			taskName: 'Dummies MER',
			taskDescription: 'Realizar dummies de MER',
			complete: true,
		},
		{
			id: '14',
			taskName: 'Dummies CDMX',
			taskDescription: 'Realizar dummies de CDMX',
			complete: true,
		},
		{
			id: '15',
			taskName: 'Dummies CDMX',
			taskDescription: 'Realizar dummies de CDMX',
			complete: true,
		},
		{
			id: '16',
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

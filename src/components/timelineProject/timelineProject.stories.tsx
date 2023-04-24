import React from 'react';

// utilidades de storybook
import { Story, Meta } from '@storybook/react';
// componente principal
import TimelineProject from '.';
// interface
import { timelineProps } from './types';

// creación de plantilla en la que se colocará la historia
const Template: Story<timelineProps> = (args) => <TimelineProject {...args} />;

// componente en su estado inicial
export const InitialState = Template.bind({});

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	//
	tasks: [
		{
			taskName: 'Dummies',
			duration: 3,
			completed: true,
		},
		{
			taskName: 'PDC',
			duration: 1,
			completed: true,
		},
		{
			taskName: 'Envío de prueba de color',
			duration: 3,
			completed: false,
		},
		{
			taskName: 'Aprobación de prueba de color',
			// duration: 'Depende del cliente los',
			completed: false,
		},
		{
			taskName: 'Impresión',
			duration: 2,
			completed: false,
		},
		{
			taskName: 'Envío e instalación',
			duration: 10,
			completed: false,
		},
		{
			taskName: 'Reporte fotográfico',
			duration: 2,
			completed: false,
			onClickShow: () => alert('Redirigiendo a testigos...'),
			legendBtn: 'Ir a testigos',
		},
		{
			taskName: 'Reporte fotográfico',
			duration: 2,
			completed: false,
			onClickShow: () => alert('Redirigiendo a testigos...'),
			legendBtn: 'Ir a testigos',
		},
		{
			taskName: 'Reporte fotográfico',
			duration: 2,
			completed: false,
			onClickShow: () => alert('Redirigiendo a testigos...'),
			legendBtn: 'Ir a testigos',
		},
		{
			taskName: 'Retiro',
			duration: 2,
			completed: false,
			onClickShow: () => alert('Redirigiendo a testigos...'),
			legendBtn: 'Ir a testigos',
		},
	],
};

// exportación de historia y argumentos
export default {
	title: 'Línea de tiempo',
	component: TimelineProject,
} as Meta;

import React from 'react';
//importación de elementos del storybook que se utilizarán para definir las historias
import { Meta, Story } from '@storybook/react';
//importación del componente y su interfaz que utilizará para definir sus propiedades
import CardMannageTemplates from '../MannageTemplates/cardMannageTemplate';
import { cardTemplate } from '../MannageTemplates/types/types';
// utilidades para el storybook
import { functions, modo, number, statusTasks, text } from '../../../storyUtils';

//creación de plantilla en la que se colocarán los elementos
const Template: Story<cardTemplate> = (args) => <CardMannageTemplates {...args} />;

//estado inicial del componente
export const initialState = Template.bind({});
initialState.args = {};

//estado del componente con propiedades
export const withProperties = Template.bind({});
withProperties.args = {
	onCl_delete: () => alert('Eliminar'),
	onCl_preview: () => alert('Previsualizar'),
	onCl_edit: () => alert('editar'),
	templateName: 'Espectaculares',
	totalTasks: 15,
};

//exportación de valores por default
export default {
	//titulo de la carpeta en la que se exportará y el título que se le asignará al componente
	title: 'Cards de gestión/templates',
	component: CardMannageTemplates,

	// definición de tipos de datos que reciben los argumentos que se reciben
	argTypes: {
		onCl_delete: functions(),
		onCl_preview: functions(),
		onCl_edit: functions(),
		modo: modo(),
		templateName: text(),
		statusTask: statusTasks(),
		percentTask: number(),
		totalTasks: number(),
	},
} as Meta;

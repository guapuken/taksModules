import React from 'react';
//importación de elementos de storybook que se usarán
import { Meta, Story } from '@storybook/react';
//importación de componente principal
import OptionMenu, { OptionMenuProps } from './optionmenu';

const Template: Story<OptionMenuProps> = (args) => <OptionMenu {...args} />;

// estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	menus: {
		conCategoria: [
			{
				title: 'Tarea',
				menus: [
					{
						title: 'Nueva',
						onClick: () => alert('Nueva tarea'),
					},
					{
						title: 'Gestionar',
						onClick: () => alert('Navegar a gestión'),
					},
				],
			},
			{
				title: 'Plantillas',
				menus: [
					{
						title: 'Nueva',
						onClick: () => alert('Nueva plantilla'),
					},
					{
						title: 'Gestionar',
						onClick: () => alert('Navegar a gestión'),
					},
				],
			},
			{
				title: 'Proyectos',
				menus: [
					{
						title: 'Nuevo',
						onClick: () => alert('Nuevo proyecto'),
					},
					{
						title: 'Gestionar',
						onClick: () => alert('Navegar a gestión'),
					},
				],
			},
			{
				title: 'Gráficas de avances',
				menus: [
					{
						title: 'Generales',
						onClick: () => alert('Proyectos'),
					},
					{
						title: 'Personales',
						onClick: () => alert('Proyectos'),
					},
				],
			},
		],
		sinCategoria: [
			{
				title: 'Inicio',
				onClick: () => alert('inicio'),
			},
		],
	},
};

//exportación default de valores
export default {
	//nombre de la carpeta en l que se agrupará y el nombre del componente
	title: 'Átomos/menu',
	component: OptionMenu,
	//definición de argumentos
	argTypes: {
		modo: {
			control: {
				type: 'select',
				options: ['Dark', 'Light'],
			},
		},
	},
} as Meta;

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
				id: '1',
				title: 'Tarea',
				menus: [
					{
						id: '6',
						title: 'Nueva',
						onClick: () => alert('Nueva tarea'),
					},
					{
						id: '7',
						title: 'Gestionar',
						onClick: () => alert('Navegar a gestión'),
					},
				],
			},
			{
				id: '2',
				title: 'Plantillas',
				menus: [
					{
						id: '8',
						title: 'Nueva',
						onClick: () => alert('Nueva plantilla'),
					},
					{
						id: '9',
						title: 'Gestionar',
						onClick: () => alert('Navegar a gestión'),
					},
				],
			},
			{
				id: '3',
				title: 'Proyectos',
				menus: [
					{
						id: '10',
						title: 'Nuevo',
						onClick: () => alert('Nuevo proyecto'),
					},
					{
						id: '11',
						title: 'Gestionar',
						onClick: () => alert('Navegar a gestión'),
					},
				],
			},
			{
				id: '4',
				title: 'Gráficas de avances',
				menus: [
					{
						id: '12',
						title: 'Generales',
						onClick: () => alert('Proyectos'),
					},
					{
						id: '13',
						title: 'Personales',
						onClick: () => alert('Proyectos'),
					},
				],
			},
		],
		sinCategoria: [
			{
				id: '5',
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

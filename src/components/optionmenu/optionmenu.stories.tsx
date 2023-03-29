import { Meta, Story } from '@storybook/react';
import React from 'react';
import OptionMenu, { OptionMenuProps } from './optionmenu';

const Template: Story<OptionMenuProps> = (args) => <OptionMenu {...args} />;
export const Basic = Template.bind({});
Basic.args = {
	menus: [
		{
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
					title: 'Gráfica de avances',
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
		},

		{
			sinCategoria: [
				{
					title: 'Inicio',
					onClick: () => alert('inicio'),
				},
				// {
				// 	title: 'KPI"s',
				// 	onClick: () => alert('inicio'),
				// },
			],
		},
	],
};
export default {
	title: 'Optionmenu',
	component: OptionMenu,
} as Meta;

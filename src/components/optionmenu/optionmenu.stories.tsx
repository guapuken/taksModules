import { Meta, Story } from '@storybook/react';
import React from 'react';
import Optionmenu, { OptionmenuProps } from './optionmenu';

const Template: Story<OptionmenuProps> = (args) => <Optionmenu {...args} />;
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
	component: Optionmenu,
} as Meta;

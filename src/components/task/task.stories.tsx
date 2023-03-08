import { Meta, Story } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import Task, { TaskProps } from './task';

const Template: Story<TaskProps> = (args) => <Task {...args} />;

//Ejemplo de estructura de datos de usuario
const usuarios = [
	{
		id: 1,
		userData: {
			nombre: 'Olaf Ruvalcaba',
			nombrePuesto: 'Desarrollador',
		},
		area_trabajo: 'TI',
	},
	{
		id: 2,
		userData: {
			nombre: 'Denisse Alejandra',
			nombrePuesto: 'Diseñador UX/UI',
		},
		area_trabajo: 'TI',
	},
	{
		id: 3,
		userData: {
			nombre: 'Adan Guzmán',
			nombrePuesto: 'Desarrollador',
		},
		area_trabajo: 'TI',
	},
	{
		id: 4,
		userData: {
			nombre: 'René Carrillo',
			nombrePuesto: 'Desarrollador',
		},
		area_trabajo: 'TI',
	},
	{
		id: 5,
		userData: {
			nombre: 'Victor Galván',
			nombrePuesto: 'Diseñador UX/UI',
		},
		area_trabajo: 'TI',
	},
	{
		id: 6,
		userData: {
			nombre: 'Ivan Flores',
			nombrePuesto: 'Project Mannager',
		},
		area_trabajo: 'TI',
	},
	{
		id: 7,
		userData: {
			nombre: 'Jorge Correa',
			nombrePuesto: 'Gerente de TI',
		},
		area_trabajo: 'TI',
	},
];
//Ejemplo de estructura de datos de equipos
const equipos = [
	{
		id: 1,
		nombre: 'TI',
		encargado: {
			id: 1,
			userData: {
				nombre: 'Olaf Ruvalcaba',
				nombrePuesto: 'Desarrollador',
			},
			area_trabajo: 'TI',
		},
		integrantes: [
			{
				id: 2,
				userData: {
					nombre: 'Ivan Flores',
					nombrePuesto: 'Project Mannager',
				},
				area_trabajo: 'TI',
			},
			{
				id: 2,
				userData: {
					nombre: 'Olaf Ruvalcaba',
					nombrePuesto: 'Fullstack',
				},
				area_trabajo: 'TI',
				usuarios_dependientes: [
					{
						id: 3,
						userData: {
							nombre: 'Adan Guzman',
							nombrePuesto: 'Desarrollador',
						},
						area_trabajo: 'TI',
					},
					{
						id: 4,
						userData: {
							nombre: 'Rene Carrillo',
							nombrePuesto: 'Desarrollador',
						},
						area_trabajo: 'TI',
					},
				],
			},
		],
	},
];

console.log(usuarios);
usuarios.map((e) => {
	console.log(`Nombre: ${e.userData.nombre} \nId: ${e.id}`);
});
const dataUsers = usuarios.map((user) => {
	return {
		title: user.userData.nombre,
		area: user.area_trabajo,
		id: user.id,
		onClick: () => {},
	};
});

export const Initial = Template.bind({});
Initial.args = {
	// responsables: usuarios,
	responsables: dataUsers.map((e) => e),
	revision: dataUsers.map((e) => e),
	prioridadInicial: 'alta',
	// valueResponsable: 'Creative',
	// valueRevision: 'Adrian Moreno',
	onClickEliminar: () => alert('hola'),
	onClickRecordatorio: () => alert('perro'),
	moreOptions: [
		{ title: 'Encontrar tarea', onClick: () => alert('encontrar') },
		{ title: 'Seguir tarea', onClick: () => alert('seguimiento') },
		{ title: 'Buscar coincidencias', onClick: () => alert('coincidencias') },
	],
	plantillas: true,
};

const Childrens = [] as any;
console.log(Childrens);
export const Tasks = Template.bind({});
Tasks.args = {
	//Input Task
	principalTask: true,
	taskDisabled: false,
	taskComplete: false,
	check: false,
	onClickCheck: () => alert('check'),
	// onChangeNameTask: () => alert('change Task'),
	// onChangeDescriptionTask: () => alert('change description task'),
	// valueTask: ,
	// valueDescription: ,

	//Icon Dates
	onChangeDias: () => alert('change días'),
	plantillas: false,

	//Icon Asign
	responsables: [{ title: 'Olaf' }],
	equipos: [{ title: 'TI' }],
	revision: [{ title: 'Jorge' }],
	valueResponsable: 'Olaf Ruvalcaba',
	valueRevision: 'Jorge Correa',

	//Icon Priority
	onClickPrioridad: () => alert('change priority'),
	// prioridadInicial: 'baja',

	//Icon MoreOptions
	onClickEliminar: () => alert('eliminando'),
	onClickRecordatorio: () => alert('Creando recordatorio'),
	// moreOptions: ,

	// subtaskForbbiden: true,
	onClickAddTask: Childrens.push(<Task />),
	Children: () => (
		<>
			<Task
				// isSubtask
				Children={() => (
					<>
						<Task isSubtask />
					</>
				)}
			/>
			<Task />
			<Task />
		</>
	),
	// Children: Childrens.length > 0 ? () => Childrens.map((e) => e) : () => <></>,
	templateOptions: [
		{
			title: 'Espectaculares',
			onClick: () => alert('hola'),
		},
		{
			title: 'Muros',
			onClick: () => alert('hola'),
		},
		{
			title: 'Vallas',
			onClick: () => alert('hola'),
		},
	],
};

export default {
	title: 'Task',
	component: Task,
} as Meta;

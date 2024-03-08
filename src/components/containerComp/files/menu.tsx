import React from 'react';
import { OptionMenu } from '../../../components';

const Menu = (props: any) => {
	const { onClick, modo, isPM } = props;

	// definición de menús exclusivos del PM
	const menusExclisivosPM = {
		id: 'teamsMenus',
		title: 'Equipos',
		menus: [
			{
				id: 'newTeam',
				title: 'Crear equipo',
				onClick: onClick?.createTeam,
			},
			{
				id: 'mannageTeam',
				title: 'Gestionar equipos',
				onClick: onClick?.mannageTeams,
			},
		],
	};

	// definición de los menús que pueden ver todos los usuarios
	let menusOperativos = [
		{
			id: 'tasksMenus',
			title: 'Tareas',
			menus: [
				{
					id: 'newTask',
					title: 'Crear tarea',
					onClick: onClick?.createTask,
				},
				{
					id: 'mannageTask',
					title: 'Gestionar tareas',
					onClick: onClick?.mannageTask,
				},
				{
					id: 'taskHistory',
					title: 'Historial de tareas',
					onClick: onClick?.historyTask,
				},
			],
		},
		{
			id: 'teamsMenus',
			title: 'Equipos',
			menus: [
				{
					id: 'newTeam',
					title: 'Crear equipo',
					onClick: onClick?.createTeam,
				},
				{
					id: 'mannageTeam',
					title: 'Gestionar equipos',
					onClick: onClick?.mannageTeams,
				},
			]
		},
		{
			id: 'templatesMenus',
			title: 'Plantillas',
			menus: [
				{
					id: 'newTemplate',
					title: 'Crear plantilla',
					onClick: onClick?.createTemplate,
				},
				{
					id: 'mannageTemplate',
					title: 'Gestionar plantillas',
					onClick: onClick?.mannageTemplates,
				},
			],
		},
		{
			id: 'projectsMenus',
			title: 'Proyectos',
			menus: [
				{
					id: 'newProject',
					title: 'Crear proyecto',
					onClick: onClick?.createProject,
				},
				{
					id: 'mannageProjects',
					title: 'Gestionar proyectos',
					onClick: onClick?.mannageProjects,
				},
				{
					id: 'statusProjects',
					title: 'Estatus de proyectos',
					onClick: onClick?.projectsStatus,
				},
				{
					id: 'statusCampanhas',
					title: 'Estatus de campañas',
					onClick: onClick?.campaignStatus,
				},
				{
					id: 'statusPostventa',
					title: 'Postventa',
					onClick: onClick?.postventa,
				},
			],
		},
	];

	// Si el usuario que está usando es PM se muestra el menú exclusivo del PM
	/* isPM ? */ menusOperativos.push(menusExclisivosPM) /* : menusOperativos */;

	return (
		<div style={{ zIndex: '1' }}>
			<OptionMenu
				modo={modo}
				menus={{
					sinCategoria: [
						{
							id: 'home',
							title: 'Inicio',
							onClick: onClick?.inicio,
						},
					],
					conCategoria: menusOperativos,
				}}
			/>
		</div>
	);
};
export default Menu;

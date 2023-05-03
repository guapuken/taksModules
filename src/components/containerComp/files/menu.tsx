import React from 'react';
import { OptionMenu } from '../../../components';

const Menu = (props: any) => {
	const { onClick, modo } = props;
	return (
		<div style={{ zIndex: '2' }}>
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
					conCategoria: [
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
							],
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
							],
						},
					],
				}}
			/>
		</div>
	);
};
export default Menu;

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
							title: 'Inicio',
							onClick: onClick?.inicio,
						},
					],
					conCategoria: [
						{
							title: 'Tareas',
							menus: [
								{
									title: 'Crear tarea',
									onClick: onClick?.createTask,
								},
								{
									title: 'Gestionar tareas',
									onClick: onClick?.mannageTask,
								},
							],
						},
						{
							title: 'Plantillas',
							menus: [
								{
									title: 'Crear plantilla',
									onClick: onClick?.createTemplate,
								},
								{
									title: 'Gestionar plantillas',
									onClick: onClick?.mannageTemplates,
								},
							],
						},
						{
							title: 'Equipos',
							menus: [
								{
									title: 'Crear equipo',
									onClick: onClick?.createTeam,
								},
								{
									title: 'Gestionar equipos',
									onClick: onClick?.mannageTeams,
								},
							],
						},
						{
							title: 'Proyectos',
							menus: [
								{
									title: 'Crear proyecto',
									onClick: onClick?.createProject,
								},
								{
									title: 'Gestionar proyectos',
									onClick: onClick?.mannageProjects,
								},
								{
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

import React from 'react';

// importación de estilos
import '../../global.scss';
import { onClickType } from '../../utils/types/typesUtils';
import Button from '../button';
import OptionMenu from '../optionmenu';
import css from './container.module.scss';

type header = {
	moduleName?: string;
	legendBtnModule?: string;
	onClickBtnModule?: onClickType;
};
interface onClicks {
	createTask?: onClickType;
	createTemplate?: onClickType;
	createTeam?: onClickType;
	createProject?: onClickType;
	inicio?: onClickType;
	mannageTask?: onClickType;
	mannageTemplates?: onClickType;
	mannageTeams?: onClickType;
	mannageProjects?: onClickType;
	projectsStatus?: onClickType;
}
interface menuActions {
	// refs: refs;
	onClick: onClicks;
}
interface Containerprops {
	children: any;
	AsideContent?: any;
	FooterContent?: any;
	aside?: boolean;
	header?: header;
	footer?: boolean;
	// refs: refs;
	onClick: onClicks;
}

const Menu = (props: menuActions) => {
	const { onClick } = props;
	return (
		<div style={{ zIndex: '2' }}>
			<OptionMenu
				menus={{
					sinCategoria: [
						{
							title: 'Inicio',
							onClick: onClick.inicio,
						},
					],
					conCategoria: [
						{
							title: 'Tareas',
							menus: [
								{
									title: 'Crear tarea',
									onClick: onClick.createTask,
								},
								{
									title: 'Gestionar tareas',
									onClick: onClick.mannageTask,
								},
							],
						},
						{
							title: 'Plantillas',
							menus: [
								{
									title: 'Crear plantilla',
									onClick: onClick.createTemplate,
								},
								{
									title: 'Gestionar plantillas',
									onClick: onClick.mannageTemplates,
								},
							],
						},
						{
							title: 'Equipos',
							menus: [
								{
									title: 'Crear equipo',
									onClick: onClick.createTeam,
								},
								{
									title: 'Gestionar equipos',
									onClick: onClick.mannageTeams,
								},
							],
						},
						{
							title: 'Proyectos',
							menus: [
								{
									title: 'Crear proyecto',
									onClick: onClick.createProject,
								},
								{
									title: 'Gestionar proyectos',
									onClick: onClick.mannageProjects,
								},
								{
									title: 'Estatus de proyectos',
									onClick: onClick.projectsStatus,
								},
							],
						},
					],
				}}
			/>
		</div>
	);
};

const Container = (props: Containerprops) => {
	const { children, AsideContent, header, FooterContent, onClick } = props;
	return (
		<div className={css.ctn}>
			<div className={css.menu}>
				<Menu onClick={onClick} />
			</div>
			{AsideContent && <div className={css.asideCtn}>{AsideContent}</div>}
			<div className={AsideContent ? css.ctnChildren_FtrAsd : css.ctnChildren_Ftr}>
				{header && (
					<div className={css.header}>
						<h2 style={{ marginRight: '1rem' }}>{header.moduleName}</h2>
						<Button
							legend={header.legendBtnModule}
							primary
							onClick={header.onClickBtnModule}
						/>
					</div>
				)}
				<div className={FooterContent ? css.childrenFtr : css.children}>{children}</div>
				{FooterContent && <div className={css.footer}>{FooterContent}</div>}
			</div>
		</div>
	);
};

export default Container;

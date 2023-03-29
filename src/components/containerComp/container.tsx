import React from 'react';

// importación de estilos
import '../../styles.scss';
import { onClickType } from '../../utils/types/typesUtils';
import Button from '../button';
import OptionMenu from '../optionmenu';
import css from './container.module.scss';

type header = {
	moduleName?: string;
	legendBtnModule?: string;
	onClickBtnModule?: onClickType;
};
interface refs {
	inicio?: string;
	mannageTask?: string;
	mannageTemplates?: string;
	mannageTeams?: string;
	mannageProjects?: string;
	projectsStatus?: string;
}
interface onClicks {
	createTask?: onClickType;
	createTemplate?: onClickType;
	createTeam?: onClickType;
	createProject?: onClickType;
}
interface menuActions {
	refs: refs;
	onClick: onClicks;
}
interface Containerprops {
	children: any;
	AsideContent?: any;
	FooterContent?: any;
	aside?: boolean;
	header?: header;
	footer?: boolean;
	refs: refs;
	onClick: onClicks;
}

const Menu = (props: menuActions) => {
	const { refs, onClick } = props;
	return (
		<div style={{ zIndex: '2' }}>
			<OptionMenu
				menus={{
					sinCategoria: [
						{
							title: 'Inicio',
							href: refs.inicio,
						},
					],
					conCategoria: [
						{
							title: 'Tareas',
							menus: [
								{
									title: 'Crear nueva',
									onClick: onClick.createTask,
								},
								{
									title: 'Gestionar existentes',
									href: refs.mannageTask,
								},
							],
						},
						{
							title: 'Plantillas',
							menus: [
								{
									title: 'Crear nueva',
									onClick: onClick.createTemplate,
								},
								{
									title: 'Gestionar existentes',
									href: refs.mannageTemplates,
								},
							],
						},
						{
							title: 'Equipos',
							menus: [
								{
									title: 'Crear nuevo',
									onClick: onClick.createTeam,
								},
								{
									title: 'Gestionar existentes',
									href: refs.mannageTeams,
								},
							],
						},
						{
							title: 'Proyectos',
							menus: [
								{
									title: 'Crear nuevo',
									onClick: onClick.createProject,
								},
								{
									title: 'Gestionar existentes',
									href: refs.mannageProjects,
								},
								{
									title: 'Estatus de proyectos',
									href: refs.projectsStatus,
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
	const { children, AsideContent, header, FooterContent, refs, onClick } = props;
	return (
		<div className={css.ctn}>
			<Menu refs={refs} onClick={onClick} />
			{AsideContent && <div className={css.asideCtn}>{<AsideContent />}</div>}
			<div className={AsideContent ? css.childrenCtn : css.childrenCtnNoAside}>
				{header && (
					<div
						style={{
							display: 'flex',
							height: '7vh',
							// background: 'red',
							alignItems: 'center',
						}}
					>
						<h2 style={{ marginRight: '1rem' }}>{header.moduleName}</h2>
						<Button
							legend={header.legendBtnModule}
							primary
							onClick={header.onClickBtnModule}
						/>
					</div>
				)}
				<div style={{ height: FooterContent ? '65vh' : '85vh' }}>{children}</div>
				{FooterContent && (
					<div
						style={{
							height: '20vh',
							background: 'red',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						{<FooterContent />}
					</div>
				)}
			</div>
		</div>
	);
};

export default Container;

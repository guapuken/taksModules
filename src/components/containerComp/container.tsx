import React from 'react';

//componentes auxiliares
import Button from '../button';
// componentes principales
import { Menu } from './files';
// importación de estilos
import css from './container.module.scss';
// types
import { container } from './types';

// types que se usan en documentación NO BORRAR
import { header, onClicks } from './types';
import { Modo } from '../../types';

/** documentación de componente
 * @param {any} props.children - recibe un children dentro del componente o cualquier elemento
 * @param {any} props.AsideContent - recibe componente o cualquier elemento
 * @param {any} props.FooterContent - recibe componentes o cualquier elemento
 * @param {header} props.header - recibe un objecto con 3 propiedades que son:
		mduleName
		legendBtnModule
		onClickBtnModule
 * @param {onClicks} props.onClick - recibe un obejeto de funciones que son:
		createTask
		createTemplate
		createTeam
		createProject
		inicio
		mannageTask
		mannageTemplates
		mannageTeams
		mannageProjects
		projectsStatus	
* @param {React.CSSProperties} props.style - recibe un objeto con estilos de css
* @param {React.CSSProperties} props.headerStyle - recibe un objeto con estilos de css
* @param {React.CSSProperties} props.contentStyle - recibe un objeto con estilos de css
* @param {React.CSSProperties} props.footerStyle - recibe un objeto con estilos de css
* @param {Modo} props.modo - recibe la propiedad de selección de temas disponible
 * @returns - contenedor que incluye el aside, menu, un contenido y un footer
 */
const Container = (props: container) => {
	// desestructuración de propiedades
	const datos = { ...props };
	return (
		<div className={css.ctn} style={datos.style}>
			<div className={css.menu}>
				<Menu modo={datos.modo} onClick={datos.onClick} />
			</div>
			{datos.AsideContent && <div className={css.asideCtn}>{datos.AsideContent}</div>}
			<div className={datos.AsideContent ? css.ctnChildren_FtrAsd : css.ctnChildren_Ftr}>
				{datos.header && (
					<div className={css.header} style={datos.headerStyle}>
						<h2 style={{ marginRight: '10px' }}>{datos.header.moduleName}</h2>
						{datos.header.legendBtnModule && datos.header.onClickBtnModule && (
							<Button
								legend={datos.header.legendBtnModule}
								primary
								onCl_button={datos.header.onClickBtnModule}
							/>
						)}
					</div>
				)}
				<div
					className={
						!datos.FooterContent || datos.FooterContent === null
							? css.children
							: css.childrenFtr
					}
					style={datos.contentStyle}
				>
					{datos.children}
				</div>
				{datos.FooterContent && (
					<div style={datos.footerStyle} className={css.footer}>
						{datos.FooterContent}
					</div>
				)}
			</div>
		</div>
	);
};

export default Container;

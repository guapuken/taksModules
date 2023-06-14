import React from 'react';

//componentes auxiliares
import { Button } from '../../components';
// componentes principales
import { Menu } from './files';
// importación de estilos
import './styles/container.scss';
// types
import { container } from './types/container';

// types que se usan en documentación NO BORRAR
import { Modo, onClickType } from '../../types';
import { header } from './types/header';
import { onClicks } from './types/aside';

/** documentación de componente
 * @param {any} props.children - recibe un children dentro del componente o cualquier elemento
 * @param {any} props.AsideContent - recibe componente o cualquier elemento
 * @param {any} props.FooterContent - recibe componentes o cualquier elemento
 * @param {header} props.header - recibe un objecto con 3 propiedades que son:
		legend
		legendBtn
		onCl_btn
 * @param {onClicks} props.onCl_menus - recibe un obejeto de funciones que son:
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
const Container = ({
	children,
	AsideContent,
	FooterContent,
	header,
	onCl_menus,
	style,
	headerStyle,
	contentStyle,
	footerStyle,
	modo = 'Light',
	isPM,
}: container) => {
	// desestructuración de propiedades
	return (
		<div
			className={`ctn${modo}_CtnC`}
			style={style}
			as-ctn={AsideContent !== null ? 'wthAsd' : 'noAsd'}
		>
			<div className={'menu'} style={{ zIndex: 1 }}>
				<Menu modo={modo} onClick={onCl_menus} isPM={isPM} />
			</div>
			{AsideContent !== null && <div className={'asideCtn'}>{AsideContent}</div>}
			<div className={`ctnChild${AsideContent ? 'Asd' : ''}${FooterContent ? 'Ftr' : ''}`}>
				{header && (
					<div className={'header'} style={headerStyle}>
						<h3>{header.legend}</h3>
						{header.legendBtn && header.onCl_btn && (
							<Button
								size="small"
								legend={header.legendBtn}
								primary
								onCl={header.onCl_btn}
								modo={modo}
							/>
						)}
					</div>
				)}
				<div className="children" style={contentStyle}>
					{children}
				</div>
				{FooterContent && (
					<div style={footerStyle} className={'footer'}>
						{FooterContent}
					</div>
				)}
			</div>
		</div>
	);
};

export default Container;

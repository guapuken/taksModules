import React from 'react';

import Button from '../button';
import { Menu } from './files';
// importación de estilos
import css from './container.module.scss';
// types
import { container } from './types';

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
						<Button
							legend={datos.header.legendBtnModule}
							primary
							onClick={datos.header.onClickBtnModule}
						/>
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

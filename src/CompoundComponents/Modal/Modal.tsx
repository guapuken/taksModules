import React, { ReactNode } from 'react';
import './Modal.scss';
import Header from './helpers/Header';
import { Modo } from '../../types';
import Contenido from './helpers/Contenido';
import Footer from './helpers/Footer';

interface Modal {
	onClickBg?: () => any;
	children: ReactNode;
	modo: Modo;
	[key: string]: any;
}

const Modal = ({ modo, onClickBg, children, ...props }: Modal) => {
	return (
		<div className={`Compound_Modal`}>
			<div className="Compound_Modal__bg" onClick={onClickBg} />
			<div
				{...props}
				theme-config={modo}
				className={`Compound_Modal__contenido ${props.className}`}
				style={{ width: props?.width, height: props?.height, ...props?.style }}
			>
				{children}
			</div>
		</div>
	);
};

Modal.Header = Header;
Modal.Contenido = Contenido;
Modal.Footer = Footer;
export default Modal;

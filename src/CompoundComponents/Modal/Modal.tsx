import React, { ReactNode } from 'react';
import { Modo, onClickType } from '../../types';
import { Title } from '../../components/Atoms';
import GetIcons from '../Atoms/Icon/getIcons';
import './styles/Modal.scss';
import './styles/Header.scss';
import './styles/Contenido.scss';
import './styles/Footer.scss';
import { ButtonCompound } from '..';

// ! EXPORTACIÓN DE HEADER
interface HeaderModal {
	modo: Modo;
	children: string;
	closeIcon?: boolean;
	onClickClose?: onClickType;
	[key: string]: any;
}
const Header = ({ closeIcon, onClickClose, modo, children, ...props }: HeaderModal) => {
	return (
		<div {...props} className="Compound_Modal__Header">
			<Title modo={modo} style={{ textTransform: 'none' }}>
				{children}
			</Title>
			{closeIcon && (
				<ButtonCompound onClick={onClickClose}>
					<GetIcons strokeWidth={'6px'} size={30}>
						<GetIcons.Close fill="var(--errorColor)" />
					</GetIcons>
				</ButtonCompound>
			)}
		</div>
	);
};

// ! EXPORTACIÓN DE CONTENIDO
interface Contenido {
	children: any;
	[key: string]: any;
}
const Contenido = ({ children, ...props }: Contenido) => {
	return (
		<div {...props} className={`Compound_Modal__Contenido ${props?.className}`}>
			{children}
		</div>
	);
};

// ! EXPORTACIÓN DE FOOTER
interface Footer {
	children: any;
	[key: string]: any;
}
const Footer = ({ children, ...props }: Footer) => {
	return (
		<div {...props} className={`Compound_Modal__Footer ${props?.className}`}>
			{children}
		</div>
	);
};

// ! EXPORTACIÓN DE MODAL PRINCIPAL
interface Modal {
	onClickBg?: onClickType;
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

import React from 'react';
import { onClickType } from './types/typesUtils';

//Regresa el contenedor general del aside
export const AsideContainer = ({ children }: any) => {
	return <div className="ContainerAsideCardTeamComponent">{children}</div>;
};

//Retorna un button con una imagen del tamaño de 3rem
interface AsideButtonItemProps {
	onClick?: onClickType;
	src?: string;
	title?: string;
}
export const AsideButtonItem = (props: AsideButtonItemProps) => {
	const { onClick, src, title } = props;
	return (
		<button onClick={onClick} title={title}>
			<img src={src} alt={title} style={{ height: '3rem' }} />
		</button>
	);
};

export const ButtonsArray = ({ children, style, vertical }: any) => {
	return (
		<div
			className={`buttonsArray${vertical ? 'Vertical' : 'Horizontal'}`}
			style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', ...style }}
		>
			{children}
		</div>
	);
};

interface ButtonItemProps {
	children?: any;
	img?: string;
	alt?: string;
	onClick?: onClickType;
}
export const ButtonItem = (props: ButtonItemProps) => {
	const { children, img, alt, onClick } = props;
	return (
		<button style={{ width: 'auto', height: '3rem', cursor: 'pointer' }} onClick={onClick}>
			{img && <img src={img} alt={alt} style={{ width: '100%', height: '100%' }} />}
			{children}
		</button>
	);
};

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

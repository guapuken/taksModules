import React from 'react';
// funciones
import { useWindowSize } from '../../utils/windowSize';
// componentes
import Cards from '../cards';
//types
import { Modo, onChangeType, onClickType, statusTask } from '../../types';
//importación de componentes principales
import { Content, Aside } from './files';

// import './cardProject.scss';
interface submenus {
	id?: number | string;
	className?: string;
	onClick?: onClickType;
	title?: string;
}
export interface CardTaskProps {
	onClickShowDetails?: onClickType;
	onClickEditar?: onClickType;
	onClickFollow?: onClickType;
	onClickRecordatorio?: onClickType;
	onClickComentario?: onClickType;
	onClickFecha?: onClickType;
	onChangeNotificationSwitch?: onChangeType;
	statusTask?: statusTask;
	taskName?: string;
	taskDescription?: string;
	valueResponsable?: string;
	valueRevision?: string;
	idNotification: string;
	followNotificationsValue?: boolean;
	subtasks?: number;
	percentTask?: number;
	responsables?: submenus[];
	equipos?: submenus[];
	revision?: submenus[];
	modo?: Modo;
}
const CardTask = (props: CardTaskProps) => {
	const scrSize = useWindowSize();

	//Definición de los argumentos
	const properties = {
		rounded: true,
		Content: () => <Content {...props} />,
		Aside: scrSize.width >= 834 ? () => <Aside {...props} /> : null,
		modo: props.modo,
	};
	return <Cards {...properties} />;
};

export default CardTask;

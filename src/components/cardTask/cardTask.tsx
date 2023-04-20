import React from 'react';
// funciones
import { useWindowSize } from '../../utils/windowSize';
// componentes
import Cards from '../cards';
//types
import { Modo, onChangeType, onClickType, statusTask, submenusArray } from '../../types';
//importación de componentes principales
import { Content, Aside } from './files';

export interface CardTaskProps {
	idTask: string;
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
	responsables?: submenusArray[];
	equipos?: submenusArray[];
	revision?: submenusArray[];
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

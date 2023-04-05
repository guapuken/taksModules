import React from 'react';
// types
import { Modo, onClickType, statusTask } from '../../types';
// componentes auxiliares
import { Cards } from '../../components';
// componentes principales
import { Content } from './files';
// estilos
import './cardProject.scss';

export interface CardProjectProps {
	status?: statusTask;
	modo: Modo;
	onClickFollowProject?: onClickType;
	onClickShowDetails?: onClickType;
	onClickShare?: onClickType;
	followNotificationsValue?: boolean;
	progress?: number;
	incompletedTask?: number;
	completedTask?: number;
	ejecutivo?: string;
	projectName?: string;
}
const CardProject = (props: CardProjectProps) => {
	return <Cards rounded Content={() => <Content {...props} />} modo={props.modo} />;
};

export default CardProject;

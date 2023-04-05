import React from 'react';
import './cardProject.scss';
import { Modo, onClickType, statusTask } from '../../types';
import { Content } from './files';
import { Cards } from '../../components';

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

import React from 'react';
import { ButtonItem, ButtonsArray } from '../../utils/asideUtils';
import { CardContainer, SimpleButtonText, Spans } from '../../utils/cardsUtils';
import { percent } from '../../utils/percent';
import { onClickType } from '../../utils/types/typesUtils';
import Cards from '../cards';
import Notifications from '../notifications';
import ProgressBar from '../progressBar';
import './cardProject.scss';
type statusTypes = 'onTime' | 'delayed' | 'outOfTime';
export interface CardProjectProps {
	progress?: number;
	status?: statusTypes;
	onClickFollowProject?: onClickType;
	onClickShowDetails?: onClickType;
	onClickShare?: onClickType;
	tasks?: {}[];
	completedTask?: number;
	ejecutivo?: string;
	projectName?: string;
	followNotificationsValue?: boolean;
}
const CardProject = (props: CardProjectProps) => {
	const {
		status,
		onClickFollowProject = () =>
			alert('Change the function FollowProject with onClickFollowProject property'),
		followNotificationsValue,
		onClickShowDetails = () =>
			alert('Change the function ShowDetails with onClickShowDetails property'),
		onClickShare = () => alert('Change the function share with onClickShare property'),
		completedTask = 0,
		// incompletedTask = 0,
		ejecutivo = 'Nombre del ejecutivo',
		projectName = 'Nombre de proyecto',
		tasks,
	} = props;

	//Content card
	const ContentCard = () => {
		return (
			<CardContainer>
				<div className="ContainerTitleAndiconsCardProject">
					<h4 className="TextOverflow" style={{ WebkitLineClamp: 2 }} title={projectName}>
						{projectName}
					</h4>
					<ButtonsArray>
						<ButtonItem img={require('../../img/share.svg')} onClick={onClickShare} />
						<ButtonItem>
							<Notifications checkValue={followNotificationsValue} />
						</ButtonItem>
					</ButtonsArray>
				</div>

				<SimpleButtonText style={{ fontSize: '1.4rem' }}>
					<Spans boldLegend="Ejecutivo: " legend={ejecutivo} positionBold="start" />
				</SimpleButtonText>
				<SimpleButtonText style={{ position: 'absolute', bottom: '0', fontSize: '1.3rem' }}>
					<Spans
						boldLegend={completedTask}
						legend="tareas terminadas"
						positionBold="start"
					/>
					<Spans
						boldLegend={tasks ? tasks.length - completedTask : 0}
						legend="tareas pendientes"
						positionBold="start"
						styleBold={{ marginLeft: '1rem' }}
					/>
				</SimpleButtonText>
				<div className="ContainerProgressBarAndShowDetails">
					<ProgressBar
						status={status}
						valor={tasks ? percent(tasks.length, completedTask) : 0}
						width={42.5}
						onClick={onClickShowDetails}
						styleContent={{ cursor: 'pointer' }}
					/>
					<SimpleButtonText
						legend="mostrar detalles..."
						onClick={onClickShowDetails}
						style={{ fontSize: '1.4rem' }}
					/>
				</div>
			</CardContainer>
		);
	};

	//Definición de los argumentos
	const properties = {
		rounded: true,
		width: 45.5,
		height: 15.5,
		Content: ContentCard,
	};
	return <Cards {...properties} />;
};

export default CardProject;

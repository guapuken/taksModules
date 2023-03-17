import React from 'react';
import { AsideContainer, ButtonItem, ButtonsArray } from '../../utils/asideUtils';
import {
	CardContainer,
	involucrados,
	returnSize,
	SimpleButtonText,
	sizeCard,
	Spans,
} from '../../utils/cardsUtils';
import { onChangeType, onClickType } from '../../utils/types/typesUtils';
import { windowSize } from '../../utils/widthSize';
import Cards from '../cards';
import Notifications from '../notifications';
import ProgressBar from '../progressBar';
import { IconAsign } from '../task/complements/iconAsign';
// import './cardProject.scss';
type submenus = {
	id?: number | string;
	className?: string;
	onClick?: onClickType;
	title?: string;
};
type statusTypes = 'onTime' | 'delayed' | 'outOfTime';
export interface CardTaskProps {
	onClickShowDetails?: onClickType;
	onClickEditar?: onClickType;
	onClickFollow?: onClickType;
	onClickRecordatorio?: onClickType;
	onClickComentario?: onClickType;
	onClickFecha?: onClickType;
	onChangeNotificationSwitch?: onChangeType;
	status?: statusTypes;
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
}
const CardTask = (props: CardTaskProps) => {
	const {
		status,
		followNotificationsValue,
		onClickShowDetails = () =>
			alert('Change the function ShowDetails with onClickShowDetails property'),
		onChangeNotificationSwitch,
		taskName = 'Nombre de tarea',
		taskDescription = 'Descripción de tarea',
		subtasks = 0,
		valueResponsable,
		valueRevision,
		responsables,
		equipos,
		revision,
		percentTask,
		idNotification = 'task',
		onClickFollow = () => alert('seguir tarea'),
		onClickRecordatorio = () => alert('agregar recordatorio'),
		onClickEditar = () => alert('editar tarea'),
		onClickComentario = () => alert('agregar comentario'),
		onClickFecha = () => alert('reasignar fecha de entrega'),
	} = props;

	const heightCard = 19;
	//Content card
	const ContentCard = () => {
		const titleCard = (
			<h5 className="TextOverflow" style={{ WebkitLineClamp: 2 }} title={taskName}>
				{taskName}
			</h5>
		);
		return (
			<CardContainer>
				{windowSize().width > 768 && (
					<div
						className={`ContainerTitleAndiconsCardProject${
							sizeCard() * 10 < 350 ? 'Small' : ''
						}`}
					>
						<IconAsign
							involucrados={involucrados(valueResponsable, valueRevision)}
							responsables={responsables}
							equipos={equipos}
							revision={revision}
							valueResponsable={valueResponsable}
							valueRevision={valueRevision}
							style={{ marginRight: '2rem' }}
						/>
						<Notifications
							idNotification={idNotification}
							onChange={onChangeNotificationSwitch}
							checkValue={followNotificationsValue}
						/>
					</div>
				)}
				{titleCard}
				<SimpleButtonText style={{ fontSize: '1.4rem' }}>
					<span
						className="TextOverflow"
						style={{ WebkitLineClamp: 1, fontSize: 'inherit' }}
						title={taskDescription}
					>
						{taskDescription}
					</span>
				</SimpleButtonText>
				<SimpleButtonText style={{ position: 'absolute', bottom: '0', fontSize: '1.3rem' }}>
					<Spans boldLegend={subtasks} legend="subtareas más" />
				</SimpleButtonText>
				<div className="ContainerProgressBarAndShowDetails">
					<ProgressBar
						status={status}
						valor={percentTask}
						width={returnSize()}
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

	//Aside content
	const AsideContent = () => {
		return (
			<AsideContainer>
				<ButtonsArray
					buttons={[
						{
							img: require('../../img/editar.svg'),
							onClick: onClickEditar,
							titleToShow: 'Editar',
						},
						{
							img: require('../../img/calendario.svg'),
							onClick: onClickFecha,
							titleToShow: 'Reasignar fecha',
						},
						{
							// img: require('../../img/bell.svg'),
							onClick: onClickComentario,
							titleToShow: 'Asignar tarea',
						},
						{
							// img: require('../../img/bell.svg'),
							onClick: onClickFollow,
							titleToShow: followNotificationsValue
								? 'Dejar de seguir tarea'
								: 'Seguir tarea',
						},
						{
							// img: require('../../img/bell.svg'),
							onClick: onClickRecordatorio,
							titleToShow: 'Programar recordatorio',
						},
					]}
					vertical
					size={heightCard}
				/>
			</AsideContainer>
		);
	};

	//Definición de los argumentos
	const properties = {
		rounded: true,
		width: returnSize(),
		// height:  sizeCard() * 10 < 400 ?  19  : 15.5 ,
		height: heightCard,
		Content: ContentCard,
		Aside: AsideContent,
	};
	return <Cards {...properties} />;
};

export default CardTask;

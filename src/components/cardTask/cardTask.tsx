import React from 'react';
import { AsideContainer, ButtonsArray } from '../../utils/asideUtils';
import {
	CardContainer,
	involucrados,
	returnSize,
	SimpleButtonText,
	sizeCard,
	Spans,
} from '../../utils/cardsUtils';
import { windowSize } from '../../utils/widthSize';
import Cards from '../cards';
import Notifications from '../notifications';
import ProgressBar from '../progressBar';
import { IconAsign } from '../task/complements/iconAsign';
import editIcon from '../../img/editar.svg';
import calendarIcon from '../../img/calendario.svg';
import '../../styles.scss';

// import './cardProject.scss';
interface submenus {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
}
export interface CardTaskProps {
	onClickShowDetails?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickEditar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickFollow?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickRecordatorio?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickComentario?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickFecha?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeNotificationSwitch?: (e: React.FormEvent<HTMLInputElement>) => void;
	status?: 'onTime' | 'delayed' | 'outOfTime';
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
							img: editIcon,
							onClick: onClickEditar,
							titleToShow: 'Editar',
						},
						{
							img: calendarIcon,
							onClick: onClickFecha,
							titleToShow: 'Reasignar fecha',
						},
						{
							onClick: onClickComentario,
							titleToShow: 'Asignar tarea',
						},
						{
							onClick: onClickFollow,
							titleToShow: followNotificationsValue
								? 'Dejar de seguir tarea'
								: 'Seguir tarea',
						},
						{
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

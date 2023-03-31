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
import { useWindowSize } from '../../utils/widthSize';
import Cards from '../cards';
import Notifications from '../notifications';
import ProgressBar from '../progressBar';
import { IconAsign } from '../task/complements/iconAsign';
import editIcon from '../../img/editar.svg';
import calendarIcon from '../../img/calendario.svg';
import '../../global.scss';
import { Modo, onChangeType, onClickType, statusTask } from '../../utils/types/types';

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
	const heightCard = scrSize.width >= 834 ? 15 : scrSize.height / 4 / 10 - 6;

	const {
		statusTask,
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
		modo,
	} = props;

	//Content card
	const ContentCard = () => {
		const titleCard = (
			<p
				className="TextOverflow"
				style={{ WebkitLineClamp: 2, color: '#000' }}
				title={taskName}
			>
				{taskName}
			</p>
		);
		return (
			<CardContainer>
				{/* {useWindowSize().width > 768 && (
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
				)} */}
				{titleCard}
				<SimpleButtonText
					style={{ fontSize: '1.4rem', color: '#00000075', lineHeight: '1.3' }}
				>
					<span
						className="TextOverflow"
						style={{
							WebkitLineClamp: scrSize.width >= 834 ? 2 : 1,
							fontSize: 'inherit',
						}}
						title={taskDescription}
					>
						{taskDescription}
					</span>
				</SimpleButtonText>

				{/* A button that shows the number of subtasks. */}
				<SimpleButtonText style={{ position: 'absolute', bottom: '0', fontSize: '1.3rem' }}>
					<Spans boldLegend={subtasks} legend="más" />
				</SimpleButtonText>
				<div className="ContainerProgressBarAndShowDetails">
					<ProgressBar
						status={statusTask}
						valor={percentTask}
						width={scrSize.width / 2 / 10 - 3}
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
		width: scrSize.width / 10 / 2 - 2,
		// height:  sizeCard() * 10 < 400 ?  19  : 15.5 ,
		height: heightCard,
		Content: ContentCard,
		Aside: scrSize.width >= 834 ? AsideContent : null,
		modo: modo,
	};
	console.log(scrSize.width / 10 - 7 /* * 0.25 - 7 */);
	return <Cards {...properties} />;
};

export default CardTask;

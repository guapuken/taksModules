import React from 'react';
import { ButtonItem, ButtonsArray } from '../../utils/asideUtils';
import { CardContainer, returnSize, SimpleButtonText, Spans } from '../../utils/cardsUtils';
import { percent } from '../../utils/percent';
import { windowSize } from '../../utils/widthSize';
import Cards from '../cards';
import Notifications from '../notifications';
import ProgressBar from '../progressBar';
import shareIcon from '../../img/share.svg';
import '../../styles.scss';
import './cardProject.scss';

export interface CardProjectProps {
	progress?: number;
	status?: 'onTime' | 'delayed' | 'outOfTime';
	onClickFollowProject?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickShowDetails?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickShare?: (e: React.MouseEvent<HTMLElement>) => void;
	incompletedTask?: number;
	completedTask?: number;
	ejecutivo?: string;
	projectName?: string;
	followNotificationsValue?: boolean;
}
const CardProject = (props: CardProjectProps) => {
	const {
		status,
		followNotificationsValue,
		onClickShowDetails = () =>
			alert('Change the function ShowDetails with onClickShowDetails property'),
		onClickShare = () => alert('Change the function share with onClickShare property'),
		completedTask = 0,
		incompletedTask = 0,
		ejecutivo = 'Nombre del ejecutivo',
		projectName = 'Nombre de proyecto',
	} = props;
	const heightCard = 15.5;

	console.log('Tasks', incompletedTask + completedTask);
	//Content card
	const ContentCard = () => {
		return (
			<CardContainer>
				<div
					className="ContainerTitleAndiconsCardProject"
					style={{ justifyContent: 'space-between' }}
				>
					<h4 className="TextOverflow" style={{ WebkitLineClamp: 2 }} title={projectName}>
						{projectName}
					</h4>
					<ButtonsArray size={heightCard}>
						<ButtonItem img={shareIcon} onClick={onClickShare} />
						<ButtonItem>
							<Notifications checkValue={followNotificationsValue} />
						</ButtonItem>
					</ButtonsArray>
				</div>

				<SimpleButtonText style={{ fontSize: '1.4rem' }}>
					<Spans boldLegend="Ejecutivo: " legend={ejecutivo} positionBold="start" />
				</SimpleButtonText>
				<SimpleButtonText style={{ position: 'absolute', bottom: '0', fontSize: '1.3rem' }}>
					{windowSize().width > 1750 && (
						<Spans
							boldLegend={completedTask}
							legend="tareas terminadas"
							positionBold="start"
						/>
					)}
					<Spans
						boldLegend={incompletedTask}
						legend="tareas pendientes"
						positionBold="start"
						styleBold={{ marginLeft: '1rem' }}
					/>
				</SimpleButtonText>
				<div className="ContainerProgressBarAndShowDetails">
					<ProgressBar
						status={status}
						valor={
							completedTask === 0 || incompletedTask === 0
								? 0
								: percent(completedTask + incompletedTask, completedTask)
						}
						width={returnSize() + 3}
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
		width: returnSize() + 5,
		height: heightCard,
		Content: ContentCard,
	};
	return <Cards {...properties} />;
};

export default CardProject;

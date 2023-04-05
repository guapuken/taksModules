import React from 'react';
// ---------------------------------------------------------------------------------------------------------
//      eementos auxiliares
// ---------------------------------------------------------------------------------------------------------
// componentes
import { CardContainer, SimpleButtonText, Spans, TitleCard } from '../../../utils/cardsUtils';
import { AsideContainer, ButtonItem, ButtonsArray } from '../../../utils/asideUtils';
import { Notifications, ProgressBar } from '../../../components';
// funciones
import { useWindowSize } from '../../../utils/windowSize';
import { percent } from '../../../utils/percent';
import { cardW } from '../../../utils/functions/functions';
//archivos multimedia
import shareIcon from '../../../img/share.svg';
// estilos
import '../cardProject.scss';

// ---------------------------------------------------------------------------------------------------------
//      creación de componente
// ---------------------------------------------------------------------------------------------------------
const Content = (props: any) => {
	// desestructuración de propiedades
	const {
		modo,
		projectName = 'Projecto',
		followNotificationsValue,
		onClickShare,
		ejecutivo = 'Ejecutivo',
		status,
		completedTask = 0,
		incompletedTask = 10,
		onClickShowDetails,
		onChangeNotificationSwitch,
		idNotification,
	} = props;
	return (
		<CardContainer className="ctn_CProjectC">
			<div className="title">
				<TitleCard modo={modo} title={projectName} className="ttlProject" />
			</div>
			<div className="ctnBtns">
				<ButtonItem
					img={shareIcon}
					onClick={onClickShare}
					style={{ marginBottom: '10px' }}
				/>
				<Notifications
					modo={modo}
					idNotification={idNotification}
					onChange={onChangeNotificationSwitch}
					checkValue={followNotificationsValue}
				/>
			</div>
			<div className="ctnEjecutivoBtns">
				<SimpleButtonText style={{ fontSize: '14px' }}>
					<Spans boldLegend="Ejecutivo: " legend={ejecutivo} positionBold="start" />
				</SimpleButtonText>
			</div>

			<div className=".ctnProgressBar_showDtls">
				<ProgressBar
					status={status}
					valor={
						completedTask === 0 || incompletedTask === 0
							? 0
							: percent(completedTask + incompletedTask, completedTask)
					}
					width={cardW(false) - 3}
					onClick={onClickShowDetails}
					styleContent={{ cursor: 'pointer' }}
				/>
				<div className="ftr">
					<SimpleButtonText style={{ fontSize: '14px' }}>
						{useWindowSize().width > 1750 && (
							<Spans
								boldLegend={completedTask}
								legend="tareas terminadas"
								positionBold="start"
							/>
						)}
						<Spans
							boldLegend={incompletedTask}
							legend="pendientes"
							positionBold="start"
							styleBold={{ marginLeft: '10px' }}
						/>
					</SimpleButtonText>
					<SimpleButtonText
						legend="mostrar detalles..."
						onClick={onClickShowDetails}
						style={{ fontSize: '14px' }}
					/>
				</div>
			</div>
		</CardContainer>
	);
};

export default Content;

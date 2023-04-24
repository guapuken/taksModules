import React from 'react';

//componentes auxiliares
import { CardContainer, SimpleButtonText, Spans, TitleCard } from '../../../utils/cardsUtils';
import { ProgressBar } from '../../../components';
//funciones auxiliares
import { cardW } from '../../../utils/functions/functions';
// estilos
import '../cardTask.scss';

//componente principal
const Content = ({
	taskName = 'Tarea',
	taskDescription = 'Descripción',
	statusTask,
	percentTask,
	onCl_showDetails,
	subtasks = 0,
	modo,
}: any) => {
	return (
		<CardContainer className={`ctn${modo === 'Dark' ? 'Dark' : ''}_CTaskC`}>
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
			<div className="ctnTexts">
				<div>
					<TitleCard modo={modo} title={taskName} />
					<SimpleButtonText className="descTask">
						<span className="TextOverflow" title={taskDescription}>
							{taskDescription}
						</span>
					</SimpleButtonText>
				</div>
			</div>

			<div className="ctnProgressBar_showDtls">
				<ProgressBar
					status={statusTask}
					valor={percentTask}
					width={cardW(true)}
					onClick={onCl_showDetails}
					styleContent={{ cursor: 'pointer' }}
				/>
				<div className="ctnDtls">
					<SimpleButtonText className="tasks">
						<Spans boldLegend={subtasks} legend="más" />
					</SimpleButtonText>
					<SimpleButtonText
						className="showDtls"
						legend="mostrar detalles..."
						onClick={onCl_showDetails}
					/>
				</div>
			</div>
		</CardContainer>
	);
};

export default Content;

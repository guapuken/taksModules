import React from 'react';
// componentes auxiliares
import { CircularProgressBar } from '../../../components';
import { CardContainer } from '../../../utils/cardsUtils';
import { SimpleContainer, TextBoldLight, TextButton, Texts, Title } from '../../Atoms';
// types
import { cardProject } from '../types';
// funciones
import { percent } from '../../../utils/percent';
// estilos
import '../cardProject.scss';

// ---------------------------------------------------------------------------------------------------------
//      creación de componente
// ---------------------------------------------------------------------------------------------------------
const Content = ({
	modo,
	projectName = 'Projecto',
	ejecutivo = 'Ejecutivo',
	statusTasks,
	completedTask = 0,
	incompletedTask = 10,
	onCl_showDetails,
}: cardProject) => {
	return (
		<CardContainer className="ctn_CProjectC">
			<SimpleContainer className="infoCtn">
				<SimpleContainer className="title">
					<Title modo={modo} className="ttlProject" maxLines={1}>
						{projectName}
					</Title>
				</SimpleContainer>
				<SimpleContainer className="ctnEjecutivoBtns">
					<TextBoldLight
						modo={modo}
						boldLegend="Ejecutivo: "
						legend={ejecutivo}
						positionBold="start"
					/>
				</SimpleContainer>
			</SimpleContainer>
			<SimpleContainer className="ftr">
				<SimpleContainer className="progress">
					<CircularProgressBar
						percentTask={
							completedTask === 0 || incompletedTask === 0
								? 0
								: percent(completedTask + incompletedTask, completedTask)
						}
						statusTask={statusTasks}
						size={40}
					/>
					<Texts modo={modo}>{`${
						completedTask === 0 || incompletedTask === 0
							? 0
							: percent(completedTask + incompletedTask, completedTask)
					}%`}</Texts>
				</SimpleContainer>
				<SimpleContainer>
					<TextButton modo={modo} onClick={onCl_showDetails}>
						Mostrar detalles...
					</TextButton>
				</SimpleContainer>
			</SimpleContainer>
		</CardContainer>
	);
};

export default Content;

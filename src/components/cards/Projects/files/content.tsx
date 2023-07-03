import React from 'react';
// componentes auxiliares
import { CardContainer } from '../../../../utils/cardsUtils';
import { SimpleContainer, TextBoldLight, Title } from '../../../Atoms';
// types
import { cardProject } from '../types';
import FooterCard from '../../UtilsCards/FooterCard';
import { percent } from '../../../../utils/percent';
// funciones
// estilos
import '../styles/cardProject.scss';

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
		<SimpleContainer className="cardProjects">
			<SimpleContainer className="cardProjects__info">
				<Title modo={modo} className="cardProjects__info-title" maxLines={1}>
					{projectName}
				</Title>
				<TextBoldLight modo={modo} boldLegend="Ejecutivo: " legend={ejecutivo} />
			</SimpleContainer>
			<FooterCard
				modo={modo}
				legendButton="Ver más..."
				progressBar
				onCl_showDetails={onCl_showDetails}
				percentTask={
					completedTask === 0 && incompletedTask === 0
						? 0
						: percent(completedTask + incompletedTask, completedTask)
				}
				statusTask={statusTasks}
			/>
		</SimpleContainer>
	);
};
export default Content;

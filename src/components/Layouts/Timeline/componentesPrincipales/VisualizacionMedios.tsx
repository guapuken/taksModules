import React from 'react';
import { SimpleContainer, Title, ValidationComponent } from '../../../Atoms';
import Medio from './Medio';
import { medios, visualizacionMedios } from '../types/Types';

const VisualizacionMedios = ({ arreglo, modo, titulo }: visualizacionMedios) => {
	return (
		<ValidationComponent validate={arreglo}>
			<SimpleContainer
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Title style={{ margin: '15px 0' }} modo={modo}>
					{titulo}
				</Title>
				<SimpleContainer className="timelineProject__contenido-medios-individual">
					{arreglo?.map((element: medios) => (
						<Medio
							modo={modo}
							porcentaje={element.porcentaje}
							nombre={element.nombre}
							status={element.status}
							onClick={element.onClick}
						/>
					))}
				</SimpleContainer>
			</SimpleContainer>
		</ValidationComponent>
	);
};

export default VisualizacionMedios;

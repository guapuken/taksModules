import React from 'react';
import { SimpleContainer, Title, ValidationComponent } from '../../../Atoms';
import Medio from './Medio';
import { medios } from '../types/Types';

const VisualizacionMedios = ({ arreglo, modo, titulo }) => {
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
				<SimpleContainer className="CtnMedios_TimelineProject">
					{arreglo?.map((element: medios) => (
						<Medio
							modo={modo}
							percentTask={element.porcentaje}
							projectName={element.nombre}
							statusTask={element.status}
							onCl_medio={element.onClick}
						/>
					))}
				</SimpleContainer>
			</SimpleContainer>
		</ValidationComponent>
	);
};

export default VisualizacionMedios;

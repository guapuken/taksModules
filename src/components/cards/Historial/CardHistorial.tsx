import React from 'react';
import { SimpleContainer, TextBoldLight, Title } from '../../Atoms';
import { Cards } from '../../../components';
import { cardHistorialProps } from './types/Types';

const CardHistorial = ({
	modo,
	nombreTarea,
	onCl_tarea,
	asignadoPor,
	vecesRetrabajada,
}: cardHistorialProps) => {
	return (
		<Cards
			modo={modo}
			Content={() => (
				<SimpleContainer
					style={{ padding: '10px', cursor: 'pointer' }}
					onClick={onCl_tarea}
				>
					<Title
						modo={modo}
						style={{ marginBottom: '10px' }}
						maxLines={1}
						title={nombreTarea}
					>
						{nombreTarea}
					</Title>
					<TextBoldLight
						boldLegend={'Asignada por: '}
						legend={asignadoPor}
						modo={modo}
						style={{ opacity: '.7' }}
					/>
					<TextBoldLight
						boldLegend={'Veces retrabajada: '}
						legend={vecesRetrabajada ?? 0}
						style={{ opacity: '.7' }}
					/>
				</SimpleContainer>
			)}
			rounded
		/>
	);
};

export default CardHistorial;

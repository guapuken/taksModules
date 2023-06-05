import React, { useState } from 'react';
import { ImportantText, SimpleContainer, Texts } from '../../../Atoms';
import { Buttons, ModalConfirmation } from '../../../../components';
import { modalRecordatorioProps } from './types/Types';

const MdlRecordatorio = ({
	modo,
	onCl_confirmar,
	isOpened,
	setData,
	onCh_fechaRecordatorio,
	valueRecordatorio,
}: modalRecordatorioProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={<ImportantText modo={modo}>Recordatorios de tareas</ImportantText>}
				isActive={isOpened}
				modo={modo}
				footer={
					<Buttons
						buttons={{ primary: true, secondary: true }}
						composition="horizontal"
						modo={modo}
						onCl_buttons={{
							tertiary: {} as any,
							primary: onCl_confirmar,
							secondary: () => setData(null),
						}}
						legends={{
							primary: valueRecordatorio
								? 'Reprogramar recordatorio'
								: 'Programar recordatorio',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>Programar un recordatorio para el día y la hora:</Texts>
				<input
					type="datetime-local"
					onChange={onCh_fechaRecordatorio}
					value={valueRecordatorio}
					style={{
						marginTop: '10px',
						outline: 'none',
						border: 'none',
						boxShadow: '0 0 10px #dedede',
						padding: '10px',
						borderRadius: '5px',
					}}
				/>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlRecordatorio;

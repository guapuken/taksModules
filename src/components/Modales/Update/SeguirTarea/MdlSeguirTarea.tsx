import React from 'react';
import { ImportantText, SimpleContainer, Texts } from '../../../Atoms';
import ModalConfirmation from '../../../Atoms/modalConfirmation/ModalConfirmation';
import { Buttons } from '../../../../components';
import { mdlSeguirTareaProps } from './types/Types';

const MdlSeguirTarea = ({
	modo,
	onCl_confirm,
	isOpened,
	setData,
	data,
	notificacionesActivas,
}: mdlSeguirTareaProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						{`${
							notificacionesActivas ? 'Desactivar' : 'Activar'
						} las notificaciones de la tarea ${data?.taskName}`}
					</ImportantText>
				}
				isActive={isOpened}
				modo={modo}
				footer={
					<Buttons
						buttons={{ primary: true, secondary: true }}
						composition="horizontal"
						modo={modo}
						onCl_buttons={{
							tertiary: {} as any,
							primary: onCl_confirm,
							secondary: () => setData(null),
						}}
						legends={{
							primary: 'Confirmar',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>
					{!notificacionesActivas
						? 'A partir de este momento recibirás las notificaciones de esta tarea'
						: 'A partir de este momento dejarás de recibir notificaciones de esta tarea'}
				</Texts>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlSeguirTarea;

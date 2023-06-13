import React from 'react';
import { ImportantText, ModalConfirmation, SimpleContainer, Texts } from '../../../Atoms';
import { Buttons, Dropdown } from '../../../../components';

import { mdlCambiarDificultadProps } from './Types/Types';

const MdlCambiarDificultad = ({
	setData,
	modo,
	data,
	isOpened,
	onCl_confirm,
	onCh_dropdown,
	opcionesDropdown,
	valorDropdown,
}: mdlCambiarDificultadProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						¿Estás seguro de querer cambiar dificultad de la tarea {data?.taskName}?
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
							primary: 'Cambiar estatus',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>
					Recuerda que para cambiar la dificultad de la tarea tienes que seleccionar el
					motivo por el cual lo estás haciendo
				</Texts>
				<Dropdown
					modo={modo}
					onCh={onCh_dropdown}
					options={opcionesDropdown ?? []}
					initialValue={valorDropdown}
					placeHolder="Selecciona el motivo del cambio"
					style={{ marginTop: '10px' }}
				/>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlCambiarDificultad;

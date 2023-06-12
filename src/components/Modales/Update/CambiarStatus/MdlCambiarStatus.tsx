import React from 'react';
import { ImportantText, SimpleContainer, Texts } from '../../../Atoms';
import ModalConfirmation from '../../../Atoms/modalConfirmation/ModalConfirmation';
import { Buttons, Dropdown } from '../../../../components';
import { mdlCambiarStatusProps } from './types/Types';

const MdlCambiarStatus = ({
	modo,
	onCl_confirm,
	isOpened,
	setData,
	data,
	onCh_dropdown,
	opcionesDropdown,
	valorDropdown,
}: mdlCambiarStatusProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						Cambiar status de la tarea {data?.taskName}
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
					Recuerda que puedes cambiar el estatus de la tarea siempre que lo necesites
				</Texts>
				<Dropdown
					modo={modo}
					onCh={onCh_dropdown}
					options={opcionesDropdown ?? []}
					initialValue={valorDropdown}
					placeHolder="Selecciona el nuevo estatus"
					style={{ marginTop: '10px' }}
				/>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlCambiarStatus;

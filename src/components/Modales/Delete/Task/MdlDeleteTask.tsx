import React from 'react';
import { SimpleContainer, ModalConfirmation, ImportantText, Texts } from '../../../Atoms';
import { Buttons } from '../../../../components';
import { Modo, onClickType } from '../../../../types';

export interface modalDeleteTaskProps {
	modo: Modo;
	onCl_confirm: onClickType;
	isOpened: boolean;
	setData?: any;
	data?: any;
}

const MdlDeleteTask = ({ modo, onCl_confirm, isOpened, setData, data }: modalDeleteTaskProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						{`Estás seguro de eliminar la tarea ${
							data?.taskName ? `"${data.taskName}"` : ''
						}`}
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
							primary: 'Eliminar tarea',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>Si eliminas la tarea ya no podrás recuperarla</Texts>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlDeleteTask;

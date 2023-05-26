import React from 'react';
import { SimpleContainer, ModalConfirmation, ImportantText, Texts } from '../../../Atoms';
import { Buttons } from '../../../../components';
import { Modo, onClickType } from '../../../../types';

export interface modalDeleteProjectProps {
	modo: Modo;
	onCl_confirm: onClickType;
	isOpened: boolean;
	setData?: any;
	data?: any;
}

const MdlDeleteProject = ({
	modo,
	onCl_confirm,
	isOpened,
	setData,
	data,
}: modalDeleteProjectProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						{`Estás seguro de eliminar el proyecto ${
							data?.projectName ? `"${data.projectName}"` : ''
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
							primary: 'Eliminar proyecto',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>
					Si eliminas el proyecto se eliminarán las tareas que contiene y ya no podrás
					recuperarlas
				</Texts>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlDeleteProject;

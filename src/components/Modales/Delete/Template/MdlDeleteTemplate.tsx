import React from 'react';
import { SimpleContainer, ModalConfirmation, ImportantText, Texts } from '../../../Atoms';
import { Buttons } from '../../../../components';
import { Modo, onClickType } from '../../../../types';

export interface modalDeleteTemplateProps {
	modo: Modo;
	onCl_confirm: onClickType;
	isOpened: boolean;
	setData?: any;
	data?: any;
}

const MdlDeleteTemplate = ({
	modo,
	onCl_confirm,
	isOpened,
	setData,
	data,
}: modalDeleteTemplateProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						{`Estás seguro de eliminar la plantilla ${
							data?.templateName ? `"${data.templateName}"` : ''
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
							primary: 'Eliminar plantilla',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>Si eliminas la plantilla ya no podrás recuperarla</Texts>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlDeleteTemplate;

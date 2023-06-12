import React from 'react';
import { SimpleContainer, ModalConfirmation, ImportantText, Texts } from '../../../Atoms';
import { Buttons } from '../../../../components';
import { Modo, onClickType } from '../../../../types';

export interface modalDeleteTeamProps {
	modo: Modo;
	onCl_confirm: onClickType;
	isOpened: boolean;
	setData?: any;
	data?: any;
}

const MdlDeleteTeam = ({ modo, onCl_confirm, isOpened, setData, data }: modalDeleteTeamProps) => {
	return (
		<SimpleContainer>
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={
					<ImportantText modo={modo}>
						{`Estás seguro de eliminar el equipo ${
							data?.teamName ? `"${data.teamName}"` : ''
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
							primary: 'Eliminar equipo',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>Si lo eliminas ya no podrás recuperarlo</Texts>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlDeleteTeam;

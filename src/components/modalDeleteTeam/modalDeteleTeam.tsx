import React from 'react';
import useModal from '../Atoms/hooks/useModal.jsx';
import { ImportantText, SimpleContainer, Texts, ValidationComponent } from '../Atoms';
import ModalConfirmation from '../Atoms/modalConfirmation/ModalConfirmation';
import { Buttons, RangeDatePicker } from '../../components';
import { modalDeleteTeamProps } from './types/types';

const ModalDeleteTeam = ({
	// Trigger,
	modo,
	onCl_confirm,
	isOpened,
	setData,
	data,
}: modalDeleteTeamProps) => {
	// const { isOpened, setIsOpened, toggle: handleClick } = useModal();
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

export default ModalDeleteTeam;

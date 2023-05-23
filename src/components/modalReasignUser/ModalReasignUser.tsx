import React from 'react';
import { useModal } from '../Atoms/hooks/useModal';
import { ImportantText, SimpleContainer, ValidationComponent } from '../Atoms';
import ModalConfirmation from '../Atoms/modalConfirmation/ModalConfirmation';
import Buttons from '../buttons';
import Dropdown from '../dropdown/dropdown';
import { modalReasignUserProps } from './types/types';

const ModalReasignUser = ({
	Trigger,
	modo,
	onCl_confirm,
	optionsDropdown,
	initialValueDropdown,
	onCh_dropdown,
}: modalReasignUserProps) => {
	const { isOpened, setIsOpened, toggle: handleClick } = useModal();
	return (
		<SimpleContainer>
			<SimpleContainer>
				<ValidationComponent validate={Trigger}>
					<Trigger onClick={handleClick} />
				</ValidationComponent>
			</SimpleContainer>
			<ModalConfirmation
				handleClose={() => setIsOpened(false)}
				header={<ImportantText modo={modo}>Reasignar tarea a alguien más</ImportantText>}
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
							secondary: () => setIsOpened(false),
						}}
						legends={{
							primary: 'Reasignar tarea',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Dropdown
					modo={modo}
					onCh={onCh_dropdown}
					placeHolder="Seleccione el nuevo encargado"
					options={optionsDropdown}
					style={{ marginTop: '20px', minWidth: '40%' }}
					isSearchable
					initialValue={initialValueDropdown}
				/>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default ModalReasignUser;

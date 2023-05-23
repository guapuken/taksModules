import React from 'react';
import useModalWidthData from '../Atoms/hooks/useModalWidthData.jsx';
import { ImportantText, SimpleContainer, ValidationComponent } from '../Atoms';
import ModalConfirmation from '../Atoms/modalConfirmation/ModalConfirmation';
import Buttons from '../buttons';
import Dropdown from '../dropdown/dropdown';
import { modalReasignUserProps } from './types/types';

const ModalReasignUser = ({
	modo,
	onCl_confirm,
	optionsDropdown,
	initialValueDropdown,
	onCh_dropdown,
	isOpened,
	setData,
}: modalReasignUserProps) => {
	// const { isOpened, setData, data: handleClick } = useModalWidthData();
	return (
		<SimpleContainer>
			{/* <SimpleContainer>
				<ValidationComponent validate={Trigger}>
					<Trigger onClick={handleClick} />
				</ValidationComponent>
			</SimpleContainer> */}
			<ModalConfirmation
				handleClose={() => setData(null)}
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
							secondary: () => setData(null),
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

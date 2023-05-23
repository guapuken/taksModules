import React from 'react';
import useModal from '../Atoms/hooks/useModal.jsx';
import { ImportantText, SimpleContainer, ValidationComponent } from '../Atoms';
import ModalConfirmation from '../Atoms/modalConfirmation/ModalConfirmation';
import { Buttons, RangeDatePicker } from '../../components';
import { modalReasignDateProps } from './types/types';

const ModalReasignDate = ({
	Trigger,
	modo,
	endDateValue,
	onCh_endDate,
	startDateValue,
	onCh_startDate,
	onCl_confirm,
}: modalReasignDateProps) => {
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
				header={<ImportantText modo={modo}>Reasignar fecha de entrega</ImportantText>}
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
							primary: 'Cambiar fecha',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<RangeDatePicker
					endDateValue={endDateValue ?? ''}
					modo={modo}
					onCh_endDate={onCh_endDate}
					startDateValue={startDateValue ?? ''}
					onCh_startDate={onCh_startDate}
					style={{ marginTop: '20px', minWidth: '40%' }}
				/>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default ModalReasignDate;

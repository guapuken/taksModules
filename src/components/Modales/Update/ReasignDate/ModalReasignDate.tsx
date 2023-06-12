import React from 'react';
import { ImportantText, SimpleContainer, Texts } from '../../../Atoms';
import ModalConfirmation from '../../../Atoms/modalConfirmation/ModalConfirmation';
import { Buttons, RangeDatePicker } from '../../../../components';
import { modalReasignDateProps } from './types/types';

const MdlReasignDate = ({
	// Trigger,
	modo,
	endDateValue,
	onCh_endDate,
	startDateValue,
	onCh_startDate,
	onCl_confirm,
	isOpened,
	setData,
	data,
}: modalReasignDateProps) => {
	// const { isOpened, setIsOpened, toggle: handleClick } = useModal();
	return (
		<SimpleContainer>
			{/* <SimpleContainer>
				<ValidationComponent validate={Trigger}>
					<Trigger onClick={handleClick} />
				</ValidationComponent>
			</SimpleContainer> */}
			<ModalConfirmation
				handleClose={() => setData(null)}
				header={<ImportantText modo={modo}>Reasignar Fecha de entrega</ImportantText>}
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
							primary: 'Cambiar fecha',
							secondary: 'Cancelar',
						}}
					/>
				}
			>
				<Texts modo={modo}>
					Recuerda que si reasignas las fechas de entrega puedes atrasar procesos
					siguientes
				</Texts>
				<RangeDatePicker
					endDateValue={data?.endDateValue}
					modo={modo}
					onCh_endDate={onCh_endDate}
					startDateValue={data?.startDateValue}
					onCh_startDate={onCh_startDate}
					style={{ marginTop: '20px', minWidth: '40%' }}
				/>
			</ModalConfirmation>
		</SimpleContainer>
	);
};

export default MdlReasignDate;

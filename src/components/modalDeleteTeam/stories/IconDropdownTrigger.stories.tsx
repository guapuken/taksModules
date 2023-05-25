import React from 'react';

import { storiesOf } from '@storybook/react';
import ModalDeleteTeam from '../modalDeteleTeam';
import useModalWithData from '../../Atoms/hooks/useModalWithData';
import IconDropdown from '../../iconDropdown/iconDropdown';
import ModalReasignDate from '../../modalReasignDate/ModalReasignDate';

storiesOf('Modales/ModalDeleteTeam/Examples/Icon Dropdown Trigger', module).add(
	'Icon Dropdown Trigger',
	() => {
		const {
			isOpened: isOpenedDeleteTeam,
			setData: setDataDeleteTeam,
			data: dataDeleteTeam,
		} = useModalWithData();
		const {
			isOpened: isOpenedReasignDate,
			setData: setDataReasignDate,
			data: dataReasignDate,
		} = useModalWithData();
		return (
			<div>
				<IconDropdown
					modo="Dark"
					options={[
						{
							id: '1',
							title: 'Eliminar',
							onClick: () =>
								setDataDeleteTeam({ id: '1', teamName: 'Equipo Dinamita' } as any),
						},
						{
							id: '1',
							title: 'Asignar fecha',
							onClick: () =>
								setDataReasignDate({
									startDateValue: '2023-05-05 00:00:00',
									endDateValue: '2023-05-06 00:00:00',
								} as any),
						},
					]}
				/>
				<ModalDeleteTeam
					isOpened={isOpenedDeleteTeam()}
					setData={setDataDeleteTeam}
					modo="Dark"
					onCl_confirm={() => {}}
					data={dataDeleteTeam}
				/>
				<ModalReasignDate
					isOpened={isOpenedReasignDate()}
					setData={setDataReasignDate}
					data={dataReasignDate}
					modo="Dark"
					onCh_endDate={{} as any}
					onCh_startDate={{} as any}
					onCl_confirm={{} as any}
				/>
			</div>
		);
	}
);

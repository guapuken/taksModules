import React from 'react';
import { storiesOf } from '@storybook/react';

import MdlReasignDate from '../ReasignDate/ModalReasignDate';
import IconDropdown from '../../../iconDropdown/iconDropdown';
import useModalWithData from '../../../Atoms/hooks/useModalWithData.jsx';

storiesOf('Modales/Reasign Date/Examples/icon trigger', module).add('icon trigger', () => {
	const { data, setData, isOpened } = useModalWithData();
	return (
		<div>
			<IconDropdown
				modo="Light"
				options={[
					{
						id: '1',
						title: 'Reasignar Fecha',
						onClick: () =>
							setData({
								id: '1',
								endDateValue: '2023-05-12 GMT 12:00:12',
								startDateValue: '2023-05-12 GMT 12:00:12',
							} as any),
					},
					{
						id: '2',
						title: 'Reasignar usuario',
					},
					{
						id: '3',
						title: 'Reasignar recordatorio',
					},
				]}
			/>
			<MdlReasignDate
				isOpened={isOpened()}
				setData={setData}
				data={data}
				modo="Light"
				onCh_endDate={{} as any}
				onCh_startDate={{} as any}
				onCl_confirm={() => alert('confirmar')}
			/>
		</div>
	);
});

import React from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignDate from '../ModalReasignDate';
import IconDropdown from '../../iconDropdown/iconDropdown';
import useModalWithData from '../../Atoms/hooks/useModalWithData.jsx';

storiesOf('Modales/modalReasignDate/Examples/text trigger', module).add('text trigger', () => {
	const { data, setData, isOpened } = useModalWithData();
	return (
		<div>
			<IconDropdown
				modo="Light"
				options={[
					{
						id: '1',
						title: 'Reasignar Fecha',
						onClick: () => setData({ id: '1', title: 'Reasignar fecha' } as any),
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
			<ModalReasignDate
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

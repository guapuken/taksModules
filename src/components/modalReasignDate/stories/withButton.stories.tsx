import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignDate from '../ModalReasignDate';
import Button from '../../button/Button';
import useModalWithData from '../../Atoms/hooks/useModalWithData';

storiesOf('Modales/modalReasignDate/Examples/button trigger', module).add('button trigger', () => {
	const { setData, data, isOpened } = useModalWithData();
	const [date, setDate] = useState({
		startDate: '2023-05-06 GTM-600 00:00:00',
		endDate: '2023-05-06 GTM-600 00:01:00',
	});
	return (
		<div>
			<Button modo="Light" onCl={() => setData(date as any)} />
			<ModalReasignDate
				data={data}
				isOpened={isOpened()}
				setData={setData}
				modo="Light"
				endDateValue={date.endDate}
				startDateValue={date.startDate}
				onCh_endDate={(e) => setDate(e.target.value)}
				onCh_startDate={(e) => setDate(e.target.value)}
				onCl_confirm={() => alert('confirmar')}
			/>
		</div>
	);
});

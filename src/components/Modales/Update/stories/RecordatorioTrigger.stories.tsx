import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import MdlRecordatorio from '../Recordatorio/MdlRecordatorio';
import { SimpleContainer } from '../../../Atoms';
import Button from '../../../button/Button';
import useModalWithData from '../../../Atoms/hooks/useModalWithData';

storiesOf('Modales/Update/Recordatorio/Ejemplo/ButtonTrigger', module).add('ButtonTrigger', () => {
	const [fecha, setFecha] = useState('');
	const { setData, data, isOpened } = useModalWithData();
	console.log(fecha);
	return (
		<SimpleContainer>
			<Button modo="Light" onCl={() => setData({ id: '1', title: '1' }) as any} />
			<MdlRecordatorio
				isOpened={isOpened()}
				setData={setData}
				modo="Light"
				onCl_confirmar={() => {}}
				valueRecordatorio="2023-12-26T00:00:00"
				onCh_fechaRecordatorio={(e) => setFecha(e.target.value)}
			/>
		</SimpleContainer>
	);
});

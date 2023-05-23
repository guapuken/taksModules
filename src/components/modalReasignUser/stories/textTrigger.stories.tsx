import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignUser from '../ModalReasignUser';
import { Texts } from '../../Atoms';
import { users } from '../data/example';
import useModalWithData from '../../Atoms/hooks/useModalWithData';

storiesOf('Modales/modalReasignUser/Examples/text trigger', module).add('text trigger', () => {
	const [user, setUser] = useState(null as any);
	const { data, setData, isOpened } = useModalWithData();
	return (
		<div>
			<Texts modo="Light" onClick={() => setData({ id: '1', title: '2' } as any)}>
				Hola
			</Texts>
			<ModalReasignUser
				// Trigger={(e) => <Texts modo="Light" {...e} children={'Reasignar Tarea'} />}
				modo="Light"
				data={data}
				setData={setData}
				isOpened={isOpened()}
				optionsDropdown={users}
				onCl_confirm={() => alert('confirmar')}
				onCh_dropdown={(e) => setUser(e)}
				initialValueDropdown={user}
			/>
		</div>
	);
});

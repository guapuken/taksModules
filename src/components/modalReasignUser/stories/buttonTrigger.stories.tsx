import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignUser from '../ModalReasignUser';
import { users } from '../data/example';
import Button from '../../button/Button';
import useModalWithData from '../../Atoms/hooks/useModalWithData';

storiesOf('Modales/modalReasignUser/Examples/button trigger', module).add('button trigger', () => {
	const [user, setUser] = useState(null as any);
	const { isOpened, setData, data } = useModalWithData();
	return (
		<div>
			<Button onCl={() => setData({ id: '1', title: 'Ana' } as any)} modo="Light" />
			<ModalReasignUser
				data={data}
				setData={setData}
				isOpened={isOpened()}
				modo="Light"
				optionsDropdown={users}
				onCl_confirm={() => alert('confirmar')}
				onCh_dropdown={(e) => setUser(e)}
				initialValueDropdown={user}
			/>
		</div>
	);
});

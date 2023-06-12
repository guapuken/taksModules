import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import MdlReasignUser from '../ReasignUser/ModalReasignUser';
import { Texts } from '../../../Atoms';
import { teams, users } from '../ReasignUser/data/example';
import useModalWithData from '../../../Atoms/hooks/useModalWithData';

storiesOf('Modales/Reasign User/Examples/text trigger', module).add('text trigger', () => {
	const [user, setUser] = useState(null as any);
	const { data, setData, isOpened } = useModalWithData();
	return (
		<div>
			<Texts modo="Light" onClick={() => setData({ id: '1', title: '2' } as any)}>
				Hola
			</Texts>
			<MdlReasignUser
				isPM
				modo="Light"
				data={data}
				setData={setData}
				isOpened={isOpened()}
				responsables={users}
				equipos={teams}
				onCl_confirm={() => alert('confirmar')}
				onCh_dropdown={(e) => setUser(e)}
				initialValueDropdown={users[0]}
			/>
		</div>
	);
});

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignUser from '../ModalReasignUser';
import { Texts } from '../../Atoms';
import { users } from '../data/example';

storiesOf('Modales/modalReasignUser/Examples/text trigger', module).add('text trigger', () => {
	const [user, setUser] = useState(null as any);
	return (
		<ModalReasignUser
			Trigger={(e) => <Texts modo="Light" {...e} children={'Reasignar Tarea'} />}
			modo="Light"
			optionsDropdown={users}
			onCl_confirm={() => alert('confirmar')}
			onCh_dropdown={(e) => setUser(e)}
			initialValueDropdown={user}
		/>
	);
});

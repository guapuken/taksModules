import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignUser from '../ModalReasignUser';
import { users } from '../data/example';
import Button from '../../button/Button';

storiesOf('Modales/modalReasignUser/Examples/button trigger', module).add('button trigger', () => {
	const [user, setUser] = useState(null as any);
	return (
		<ModalReasignUser
			Trigger={(e) => (
				<Button modo="Light" {...e} onCl={e.onClick} legend={'Reasignar tarea'} />
			)}
			modo="Light"
			optionsDropdown={users}
			onCl_confirm={() => alert('confirmar')}
			onCh_dropdown={(e) => setUser(e)}
			initialValueDropdown={user}
		/>
	);
});

import React from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignDate from '../ModalReasignDate';
import Button from '../../button/Button';

storiesOf('Modales/modalReasignDate/Examples/button trigger', module).add('button trigger', () => (
	<ModalReasignDate
		Trigger={(e) => <Button modo="Light" onCl={e.onClick} />}
		modo="Light"
		onCh_endDate={{} as any}
		onCh_startDate={{} as any}
		onCl_confirm={() => alert('confirmar')}
	/>
));

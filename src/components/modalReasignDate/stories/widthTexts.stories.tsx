import React from 'react';
import { storiesOf } from '@storybook/react';

import ModalReasignDate from '../ModalReasignDate';
import { Texts } from '../../Atoms';

storiesOf('Modales/modalReasignDate/Examples/text trigger', module).add('text trigger', () => (
	<ModalReasignDate
		Trigger={(e) => <Texts modo="Light" {...e} children={'Clic here'} />}
		modo="Light"
		onCh_endDate={{} as any}
		onCh_startDate={{} as any}
		onCl_confirm={() => alert('confirmar')}
	/>
));

import React from 'react';
import { storiesOf } from '@storybook/react';

import TextBoldLight from '../textBoldLight/TextBoldLight';

storiesOf('Gral-Atoms/TextBoldLight', module).add('TextBoldLight', () => (
	<TextBoldLight
		legend={'Guadalajara'}
		boldLegend={'Ciudad: '}
		positionBold="start"
		modo="Light"
	/>
));

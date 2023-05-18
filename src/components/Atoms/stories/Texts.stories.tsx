import React from 'react';
import { storiesOf } from '@storybook/react';

import Texts from '../texts/Texts';

export function DemoComponent() {
	return <Texts modo="Light">Hola</Texts>;
}
storiesOf('Gral-Atoms/Texts', module).add('texts', () => <DemoComponent />);

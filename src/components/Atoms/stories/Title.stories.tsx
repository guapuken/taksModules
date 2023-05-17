import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from '../titles/Title';

export function DemoComponent() {
	return <Title modo="Light">Hola</Title>;
}
storiesOf('Gral-Atoms/ Title', module).add('title', () => <DemoComponent />);

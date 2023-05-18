import React from 'react';
import { storiesOf } from '@storybook/react';

import ImportantText from '../importantText/ImportantText';

export function DemoComponent() {
	return <ImportantText modo="Light">Hola</ImportantText>;
}
storiesOf('Gral-Atoms/ImportantText', module).add('importantText', () => <DemoComponent />);

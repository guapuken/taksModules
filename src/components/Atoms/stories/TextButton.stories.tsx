import React from 'react';
import { storiesOf } from '@storybook/react';

// componente principal
import TextButton from '../textButton/TextButton';

export function DemoComponent() {
	return (
		<TextButton modo="Light" onClick={() => alert('click')}>
			Hola
		</TextButton>
	);
}
storiesOf('Gral-Atoms/TextButton', module).add('TextButton', () => <DemoComponent />);

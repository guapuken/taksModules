import React from 'react';

import Buttons from './buttons';

describe('Button', () => {
	test('renders the Button component', () => {
		expect(
			<Buttons
				buttons={{
					primary: true,
					secondary: true,
					tertiary: true,
				}}
				composition="horizontal"
				legends={{
					primary: 'Comprar ahora',
					secondary: 'Cancelar',
					tertiary: 'Regresar',
				}}
				onCl_buttons={{
					primary: () => {},
					secondary: function noRefCheck() {},
					tertiary: function noRefCheck() {},
				}}
				size="large"
				styleComposition={{
					maxWidth: '100vw',
				}}
			/>
		);
	});
});

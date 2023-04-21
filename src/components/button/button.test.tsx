import React from 'react';

import Button from './button';

describe('Button', () => {
	test('renders the Button component', () => {
		expect(<Button legend="Hello world!" onCl={() => {}} />);
	});
});

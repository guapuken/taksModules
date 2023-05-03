import React from 'react';

import Button from '../Button';

describe('Button', () => {
	test('renders the Button component', () => {
		expect(<Button legend="Hello world!" onCl={() => {}} />);
	});
});

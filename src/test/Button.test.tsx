import React from 'react';

import { Button } from '../components';

describe('Button', () => {
	test('renders the Button component', () => {
		expect(<Button modo="Light" legend="Hello world!" onCl={() => {}} />);
	});
});

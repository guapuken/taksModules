import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Dificultad from '../Dificultad';

storiesOf('Dificultad/Ejemplos/dificultad 3', module).add('dificultad 3', () => {
	const [dificultad, setDificultad] = useState(2);

	return (
		<Dificultad
			onChange={(e) => setDificultad(e.target.value)}
			initialValue={dificultad}
			modo="Light"
		/>
	);
});

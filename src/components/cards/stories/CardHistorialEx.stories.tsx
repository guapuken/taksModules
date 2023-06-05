import React from 'react';

import { storiesOf } from '@storybook/react';
import CardHistorial from '../Historial/CardHistorial';

storiesOf('Cards/Historial/Ejemplos/Dummies', module).add('Dummies', () => {
	return (
		<CardHistorial
			asignadoPor={'Jorge Correa'}
			modo={'Light'}
			onCl_tarea={() => alert('clickTarea')}
			nombreTarea={'Dummies-4586-Uber_EATS-Noviembre'}
			vecesRetrabajada={null}
		/>
	);
});

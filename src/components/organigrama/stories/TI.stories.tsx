import React from 'react';
import { storiesOf } from '@storybook/react';

import Organigrama from '../Organigrama';

storiesOf('Organigrama/Examples/Organigrama TI', module).add('Organigrama TI', () => {
	return (
		<Organigrama
			memberValue={{ id: '11', title: 'Jorge Correa' }}
			role="Gerente TI"
			members={[
				{
					memberValue: { id: '12', title: 'Iván Flores' },
					role: 'Project mannager',
				},
				{
					memberValue: { id: '13', title: 'Olaf Ruvalcaba' },
					role: 'Fullstack',
					members: [
						{
							memberValue: { id: '16', title: 'Adán Moreno' },
							role: 'Desarrollador',
							lowLevel: true,
						},
						{
							memberValue: { id: '17', title: 'René Carrillo' },
							role: 'Desarrollador',
							lowLevel: true,
						},
						{
							memberValue: { id: '18', title: 'José de la Vega' },
							role: 'Desarrollador',
							lowLevel: true,
						},
					],
				},
				{
					memberValue: { id: '14', title: 'Victor Galván' },
					role: 'Diseñador Ux / Ui',
					members: [
						{
							memberValue: { id: '15', title: 'Denisse Hernández' },
							role: 'Fullstack',
							lowLevel: true,
						},
					],
				},
			]}
		/>
	);
});

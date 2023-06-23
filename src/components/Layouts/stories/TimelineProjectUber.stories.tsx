import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { fijos, indoors, tasks, urbanos, vallas } from '../Timeline/data/dataExample';

import TimelineProject from '../Timeline/TimelineProject';

storiesOf('Layouts/TimelineProject/Examples/Uber', module).add('Uber', () => {
	const [medios, setMedios] = useState('');
	console.log('medios: ', medios);
	return (
		<TimelineProject
			onCl_compartir={() => alert('Compartir línea de tiempo')}
			modo="Light"
			nombreProyecto="2536-Uber_eats-Noviembre"
			tasks={
				medios === 'sitios'
					? tasks.fijos
					: medios === 'urbanos'
					? tasks.urbanos
					: medios === 'indoors'
					? tasks.indoors
					: medios === 'vallas'
					? tasks.vallas
					: (null as any)
			}
			percentUrbanos={25}
			percentSitios={90}
			percentIndoors={75}
			percentVallas={69}
			statusUrbanos={'outOfTime'}
			statusSitios={3}
			statusIndoors={1}
			statusVallas={2}
			haveIndoors
			// haveSitios
			haveUrbanos
			haveVallas
			onCl_selectedMedios={(e) => setMedios(e.target.id)}
			fijos={medios === 'sitios' ? true : false}
			urbanos={medios === 'urbanos' ? true : false}
			indoors={medios === 'indoors' ? true : false}
			vallas={medios === 'vallas' ? true : false}
			medios={
				medios === 'sitios'
					? fijos
					: medios === 'urbanos'
					? urbanos
					: medios === 'indoors'
					? indoors
					: medios === 'vallas'
					? vallas
					: (null as any)
			}
		/>
	);
});

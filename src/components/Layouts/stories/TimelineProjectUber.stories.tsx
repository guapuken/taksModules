import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { fijos, indoors, tasks, urbanos, vallas } from '../Timeline/data/dataExample';

import TimelineProject from '../Timeline/TimelineProject';

storiesOf('Layouts/TimelineProject/Examples/Uber', module).add('Uber', () => {
	const [taskGroup, setTaskGroup] = useState({
		id: '',
		title: '',
	});
	return (
		<TimelineProject
			onCh_dropdown={(e) => setTaskGroup(e)}
			modo="Light"
			opcionesDropdown={[
				{
					id: '1',
					title: 'Sitios fijos',
				},
				{
					id: '2',
					title: 'Urbanos',
				},
				{
					id: '3',
					title: 'Indoors',
				},
				{
					id: '4',
					title: 'Vallas móviles',
				},
			]}
			tasks={
				taskGroup.id === '1'
					? tasks.fijos
					: taskGroup.id === '2'
					? tasks.urbanos
					: taskGroup.id === '3'
					? tasks.indoors
					: taskGroup.id === '4'
					? tasks.vallas
					: []
			}
			fijos={fijos}
			urbanos={urbanos}
			indoors={indoors}
			vallas={vallas}
		/>
	);
});

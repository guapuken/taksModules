import React from 'react';
import { storiesOf } from '@storybook/react';
import CardProject from '.';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [nameTask, setNameTask] = React.useState(true);
	const [descriptionTask, setDescriptionTask] = React.useState('Realizar dummies GDL');

	// consoles para revisar que sse generen de manera correcta los setteos
	console.clear();
	console.log(nameTask);
	console.log(descriptionTask);
	return (
		<CardProject
			modo="Light"
			status={'outOfTime'}
			onCl_showDetails={() => alert('mostrar detalles')}
			onCl_share={() => alert('compartir')}
			onCh_follow={() => setNameTask(!nameTask)}
			/* onCl_followProject={} */ idProject="UBER"
			follow={nameTask}
			completedTask={15}
			incompletedTask={45}
			ejecutivo="Juan Almada"
			projectName="UBER EATS-1536-ESP-NOV"
		/>
	);
}
storiesOf('Pruebas funcionalidad/card project', module).add('setData', () => <DemoComponent />);

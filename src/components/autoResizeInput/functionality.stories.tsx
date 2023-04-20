import React from 'react';
import AutoresizeInput from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [nameTask, setNameTask] = React.useState('Dummies GDL');
	// consoles para revisar que sse generen de manera correcta los setteos
	console.clear();
	console.log(nameTask);
	return (
		<AutoresizeInput
			id=""
			onChange={(e) => setNameTask(e.target.value)}
			initialValue={nameTask}
			modo="Light"
			placeholder="Hola que hace"
		/>
	);
}
storiesOf('Pruebas funcionalidad/autoresize Input', module).add('setData', () => <DemoComponent />);

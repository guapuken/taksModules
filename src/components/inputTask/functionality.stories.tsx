import React from 'react';
import InputTask from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [nameTask, setNameTask] = React.useState('Dummies GDL');
	const [descriptionTask, setDescriptionTask] = React.useState('Realizar dummies GDL');

	// consoles para revisar que sse generen de manera correcta los setteos
	console.clear();
	console.log(nameTask);
	console.log(descriptionTask);
	return (
		<InputTask
			id="1"
			onChangeNameTask={(e) => setNameTask(e.target.value)}
			onChangeDescriptionTask={(e) => setDescriptionTask(e.target.value)}
			valueTask={nameTask}
			valueDescription={descriptionTask}
		/>
	);
}
storiesOf('Pruebas funcionalidad/input task', module).add('setData', () => <DemoComponent />);

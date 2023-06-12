import React, { useState } from 'react';
import InputTask from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [nameTask, setNameTask] = React.useState('Dummies GDL');
	const [descriptionTask, setDescriptionTask] = React.useState('Realizar dummies GDL');
	const [check, setCheck] = useState(false);

	// console.log(check);
	return (
		<InputTask
			id="1"
			check={check}
			modo="Light"
			onCh_checkbox={() => setCheck(!check)}
			idCheckbox="1"
			showTask
			onCh_nameTask={(e) => setNameTask(e.target.value)}
			onCh_descriptionTask={(e) => setDescriptionTask(e.target.value)}
			valueTask={nameTask}
			valueDescription={descriptionTask}
		/>
	);
}
storiesOf('Pruebas funcionalidad/input task', module).add('setData', () => <DemoComponent />);

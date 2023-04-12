import React from 'react';
import ModalProjects from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [projectName, setProjectName] = React.useState('Uber Eats-2536-Espectaculares-Noviembre');

	// consoles para revisar que sse generen de manera correcta los setteos
	console.clear();
	console.log(projectName);
	return (
		<ModalProjects
			modo="Dark"
			onChangeName={(e: any) => {
				console.log(e.target.value);
				setProjectName(e.target.value);
			}}
			projectNameValue={projectName}
			onClickCreate={() => alert('Hola')}
			onClickAbort={() => alert('Adios')}
		/>
	);
}
storiesOf('Pruebas funcionalidad/modal de proyectos', module).add('setData', () => (
	<DemoComponent />
));

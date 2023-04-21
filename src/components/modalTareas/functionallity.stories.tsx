import React, { useEffect } from 'react';
import ModalTask from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	// consoles para revisar que sse generen de manera correcta los setteos
	// console.clear();
	const [checkValue, setCheckValue] = React.useState(false);

	useEffect(() => {
		console.log(checkValue);
	}, [checkValue]);

	return (
		<ModalTask
			content={{
				idTask: '1',
				equipos: [],
				// moreOptions: [],
				onClickNewTemplate: () => {},
				responsables: [],
				revision: [],
				templateOptions: [],
				onClickDelete: () => alert('Hola'),
				onChangeTaskName: (e) => console.log(e.target.value),
				onChangeTaskDescription: (e) => console.log(e.target.value),
				taskCheckValue: checkValue,
				chCheck: (e) => setCheckValue(!checkValue),
			}}
			footer={{}}
		/>
	);
}
storiesOf('Pruebas funcionalidad/modal de tareas', module).add('setData', () => <DemoComponent />);

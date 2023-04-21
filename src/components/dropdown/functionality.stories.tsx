import React from 'react';
import Dropdown from '.';
import { storiesOf } from '@storybook/react';

type options = [
	{
		id: '';
		title: '';
	}
];
// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [value, setValue] = React.useState<options>();

	// consoles para revisar que sse generen de manera correcta los setteos
	console.clear();
	console.log('value Dropdown: ', value);
	return (
		<Dropdown
			isMulti
			onChange={(e) => setValue(e)}
			isSearchable
			options={[
				{
					title: 'Jorge',
					id: '1',
				},
				{
					title: 'Denisse',
					id: '2',
				},
				{
					title: 'Adan',
					id: '3',
				},
				{
					title: 'Olaf',
					id: '4',
				},
				{
					title: 'Victor',
					id: '5',
				},
				{
					title: 'Ivan',
					id: '6',
				},
				{
					title: 'Rene',
					id: '7',
				},
				{
					title: 'Diego',
					id: '8',
				},
			]}
			placeHolder="Selecciona el enccargado de la tarea"
		/>
	);
}
storiesOf('Pruebas funcionalidad/dropdown', module).add('setData', () => <DemoComponent />);

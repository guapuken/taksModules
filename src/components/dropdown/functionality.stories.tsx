import React from 'react';
import Dropdown from '.';
import { storiesOf } from '@storybook/react';

type options = [
	{
		value: '';
		label: '';
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
			options={[
				{
					label: 'Jorge',
					value: '1',
				},
				{
					label: 'Denisse',
					value: '2',
				},
				{
					label: 'Adan',
					value: '3',
				},
				{
					label: 'Olaf',
					value: '4',
				},
				{
					label: 'Victor',
					value: '5',
				},
				{
					label: 'Ivan',
					value: '6',
				},
				{
					label: 'Rene',
					value: '7',
				},
				{
					label: 'Diego',
					value: '8',
				},
			]}
			placeHolder="Selecciona el enccargado de la tarea"
		/>
	);
}
storiesOf('Pruebas funcionalidad/dropdown', module).add('setData', () => <DemoComponent />);

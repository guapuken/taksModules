import React from 'react';
import Dropdown from '.';
import { storiesOf } from '@storybook/react';

type options = {
	id: string;
	title: string;
};
// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [value, setValue] = React.useState<options>({ title: 'Jorge', id: '1' });

	return (
		<Dropdown
			onCh={(e) => setValue(e)}
			isSearchable
			initialValue={value}
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

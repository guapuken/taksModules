import React, { useEffect } from 'react';
import CommentTask from '.';
import { storiesOf } from '@storybook/react';
import useModalWithData from '../Atoms/hooks/useModalWithData';
import Button from '../button/Button';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	// consoles para revisar que sse generen de manera correcta los setteos
	// console.clear();
	const [checkValue, setCheckValue] = React.useState(false);
	const { isOpened, setData, data } = useModalWithData();

	return (
		<div>
			<Button modo="Light" onCl={() => setData({ id: '1', title: '' })} />
			<CommentTask
				messages={[
					{
						date: '2023-05-02 GTM-600 00:00:00',
						message: 'HOla quee hace',
						type: 'Sent',
						userName: 'Olaf Ruvalcaba',
					},
					{
						date: '2023-05-02 GTM-600 00:00:00',
						message: 'HOla quee hace',
						type: 'Sent',
						userName: 'Olaf Ruvalcaba',
					},
					{
						date: '2023-05-02 GTM-600 00:00:00',
						message: 'HOla quee hace',
						type: 'Sent',
						userName: 'Olaf Ruvalcaba',
					},
					{
						date: '2023-05-02 GTM-600 00:00:00',
						message: 'HOla quee hace',
						type: 'Received',
						userName: 'Adan Moreno',
					},
					{
						date: '2023-05-02 GTM-600 00:00:00',
						message: 'HOla quee hace',
						type: 'Received',
						userName: 'Adan Moreno',
					},
				]}
				modo="Light"
				onCh_comment={{} as any}
				isActive={isOpened()}
				handleClose={() => setData(null)}
				onCl_addComment={() => alert('comentario agregado')}
			/>
		</div>
	);
}
storiesOf('Pruebas funcionalidad/commnt task', module).add('setData', () => <DemoComponent />);

import React, { useEffect } from 'react';
import CommentTask from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	// consoles para revisar que sse generen de manera correcta los setteos
	// console.clear();
	const [checkValue, setCheckValue] = React.useState(false);

	return <CommentTask onCl_addComment={() => alert('comentario agregado')} />;
}
storiesOf('Pruebas funcionalidad/commnt task', module).add('setData', () => <DemoComponent />);

import React from 'react';
import { storiesOf } from '@storybook/react';
import CardProject from '../Projects/cardProject';
import { SimpleContainer } from '../../Atoms';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [nameTask, setNameTask] = React.useState(true);
	const [descriptionTask, setDescriptionTask] = React.useState('Realizar dummies GDL');

	return (
		<SimpleContainer style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
			<CardProject
				modo="Light"
				statusTasks={'outOfTime'}
				onCl_showDetails={() => alert('mostrar detalles')}
				onCl_share={() => alert('compartir')}
				onCh_follow={() => setNameTask(!nameTask)}
				/* onCl_followProject={} */ idProject="UBER"
				follow={nameTask}
				completedTask={15}
				incompletedTask={45}
				ejecutivo="Juan Almada"
				projectName="2563-Uber_eats-Noviembre"
			/>
			<CardProject
				modo="Light"
				statusTasks={1}
				onCl_showDetails={() => alert('mostrar detalles')}
				onCl_share={() => alert('compartir')}
				onCh_follow={() => setNameTask(!nameTask)}
				/* onCl_followProject={} */ idProject="UBER"
				follow={nameTask}
				completedTask={90}
				incompletedTask={45}
				ejecutivo="Juan Almada"
				projectName="4586-Electrolit-Enero"
			/>
			<CardProject
				modo="Light"
				statusTasks={1}
				onCl_showDetails={() => alert('mostrar detalles')}
				onCl_share={() => alert('compartir')}
				onCh_follow={() => setNameTask(!nameTask)}
				/* onCl_followProject={} */ idProject="UBER"
				follow={nameTask}
				completedTask={15}
				incompletedTask={0}
				ejecutivo="Francisco Olivares"
				projectName="2563-Provident-Marzo"
			/>
			<CardProject
				modo="Light"
				statusTasks={2}
				onCl_showDetails={() => alert('mostrar detalles')}
				onCl_share={() => alert('compartir')}
				onCh_follow={() => setNameTask(!nameTask)}
				/* onCl_followProject={} */ idProject="UBER"
				follow={nameTask}
				completedTask={15}
				incompletedTask={45}
				ejecutivo="Juan Almada"
				projectName="2563-Uber_eats-Noviembre"
			/>
			<CardProject
				modo="Light"
				statusTasks={2}
				onCl_showDetails={() => alert('mostrar detalles')}
				onCl_share={() => alert('compartir')}
				onCh_follow={() => setNameTask(!nameTask)}
				/* onCl_followProject={} */ idProject="UBER"
				follow={nameTask}
				completedTask={15}
				incompletedTask={45}
				ejecutivo="Juan Almada"
				projectName="UBER EATS-1536-ESP-NOV"
			/>
			<CardProject
				modo="Light"
				statusTasks={'outOfTime'}
				onCl_showDetails={() => alert('mostrar detalles')}
				onCl_share={() => alert('compartir')}
				onCh_follow={() => setNameTask(!nameTask)}
				/* onCl_followProject={} */ idProject="UBER"
				follow={nameTask}
				completedTask={15}
				incompletedTask={45}
				ejecutivo="Juan Almada"
				projectName="UBER EATS-1536-ESP-NOV"
			/>
		</SimpleContainer>
	);
}
storiesOf('Cards/Projects/Ejemplos/multiples', module).add('multiples', () => <DemoComponent />);

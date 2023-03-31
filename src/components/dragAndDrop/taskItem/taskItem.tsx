import React from 'react';

//importación de componentes de la librería
import Cards from '../../cards';
import CardTask from '../../cardTask';
import { screenSize, Task } from '../types';

//Componente que retorna el elemto que podrá moverse entre las diferentes columnas ----------------------------------------------------
interface TaskItemProps {
	data: any;
	scrSize: screenSize;
	Card?: any;
}
export const TaskItem = (props: TaskItemProps) => {
	const { data, scrSize, Card } = props;
	return (
		<>
			{Card && <Card {...data} />}
			{!Card && (
				<div
					style={{
						boxShadow: '0 0 2rem #dedede',
						width: scrSize.width / 4 - 20,
						height: '10rem',
						borderRadius: '2rem',
						padding: '1rem',
					}}
				>
					<h3>Nombre de la tarea</h3>
				</div>
			)}
		</>
	);
};
export default TaskItem;

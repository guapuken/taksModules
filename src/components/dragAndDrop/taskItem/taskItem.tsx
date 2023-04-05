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
						boxShadow: '0 0 20px #dedede',
						width: scrSize.width / 4 - 20,
						height: '100px',
						borderRadius: '20px',
						padding: '10px',
					}}
				>
					<h3>Nombre de la tarea</h3>
				</div>
			)}
		</>
	);
};
export default TaskItem;

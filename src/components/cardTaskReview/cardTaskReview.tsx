import React from 'react';

// importación de funciones que se utilizan en el componente
import { useWindowSize } from '../../utils/widthSize';
// importación de types
import { Modo, onClickType, statusTask } from '../../types';
// importación de componente a usar
import Cards from '../cards';
import { Content } from './files/contentCard';

export interface CardTaskReviewProps {
	statusTask?: statusTask;
	onClickShowDetails?: onClickType;
	modo?: Modo;
	taskName?: string;
	taskDescription?: string;
}
const CardTaskReview = (props: CardTaskReviewProps) => {
	// desesctructuración de propiedades
	const {
		statusTask,
		taskName = 'Nombre de tarea',
		onClickShowDetails = () =>
			alert('agrega la propiedad onClickShowDetails y define la función del clic'),
		taskDescription = 'Descripción de tarea',
		modo,
	} = props;

	const scrSize = useWindowSize();
	const heightCard =
		scrSize.width <= 834 ? scrSize.height / 10 / 4 - 2 : scrSize.height / 10 / 4 - 2;

	return (
		<Cards
			rounded
			width={
				scrSize.width <= 415
					? scrSize.width / 10 - 3
					: scrSize.width <= 834
					? scrSize.width / 10 / 2 - 3
					: scrSize.width / 10 / 4 - 3
			}
			height={heightCard}
			modo={modo}
			Content={() => (
				<Content
					taskName={taskName}
					taskDescription={taskDescription}
					scrSize={scrSize}
					statusTask={statusTask}
					onClickShowDetails={onClickShowDetails}
					modo={modo}
				/>
			)}
		/>
	);
};
export default CardTaskReview;

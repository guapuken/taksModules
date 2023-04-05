import React, { CSSProperties } from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
	horizontalListSortingStrategy,
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { screenSize, Task } from '../types';
import TaskItem from '../taskItem/taskItem';
import SortableTaskItem from '../sortableItem/sortableItem';
import '../../../global.scss';
import css from '../dragAndDrop.module.scss';
import bell from '../../../img/bell.svg';
import { Modo } from '../../../types';

//Genera los tableros en los que se podrá vaciar la información o soltar los elementos--------------------------------------------------
interface BoardSectionProps {
	id: string;
	title: string;
	tasks: Task[];
	data?: any;
	modo: Modo;
	width: number;
	scrSize: screenSize;
	Card?: any;
	styleTaskContainer?: CSSProperties;
}

const BoardSection = (props: BoardSectionProps) => {
	const { id, title, tasks, modo, width, scrSize, Card, styleTaskContainer } = props;
	const { setNodeRef } = useDroppable({
		id,
	});
	return (
		<div className={modo === 'Dark' ? css.dropableCtnDark : css.dropableCtn}>
			<div className={css.ctnTitle}>
				<h2>{title}</h2>
				<img src={bell} alt="" />
			</div>
			<div>
				<SortableContext
					id={id}
					items={tasks}
					strategy={
						scrSize.width <= 834
							? horizontalListSortingStrategy
							: verticalListSortingStrategy
					}
				>
					{/* Se aplican los estilos al componente que contiene las tareas */}
					<div
						ref={setNodeRef}
						style={{
							background: 'green',
							boxShadow: 'inset 0 0 0 5px #000',
							...styleTaskContainer,
						}}
						className={
							width < scrSize.width || scrSize.width <= 834
								? css.DrgAndDrpSml
								: css.ctnTasks
						}
					>
						{tasks.map((task) => (
							<div
								className={
									scrSize.width <= 834 ? css.draggableCtnSml : css.draggableCtn
								}
								key={task.id}
							>
								<SortableTaskItem id={task.id}>
									<TaskItem data={task} Card={Card} scrSize={scrSize} />
								</SortableTaskItem>
							</div>
						))}
					</div>
				</SortableContext>
			</div>
		</div>
	);
};

export default BoardSection;

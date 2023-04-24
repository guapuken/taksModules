import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import {
	horizontalListSortingStrategy,
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { boards } from '../types';
import TaskItem from './taskItem';
import SortableTaskItem from './sortableItem';
import '../dragAndDrop.scss';
import bell from '../../../img/bell.svg';

const BoardSection = (props: boards) => {
	const datos = { ...props };
	const { setNodeRef } = useDroppable({
		id: datos.id,
	});
	return (
		<div className={`drpblCtn`}>
			<div className={'ctnTitle'}>
				<h2>{datos.title}</h2>
				<img src={bell} alt="" />
			</div>
			<div>
				<SortableContext
					id={datos.id}
					items={datos.tasks}
					strategy={
						datos.scrSize.width <= 834
							? horizontalListSortingStrategy
							: verticalListSortingStrategy
					}
				>
					{/* Se aplican los estilos al componente que contiene las tareas */}
					<div
						ref={setNodeRef}
						style={datos.styleTaskContainer}
						className={`ctnIndvlBrd`}
					>
						{datos.tasks.map((task) => {
							console.log('data: ', task);
							return (
								<div className={`ctnDrgbl`} key={task.id}>
									<SortableTaskItem id={task.id}>
										<TaskItem data={task} Card={datos.Card} />
									</SortableTaskItem>
								</div>
							);
						})}
					</div>
				</SortableContext>
			</div>
		</div>
	);
};

export default BoardSection;

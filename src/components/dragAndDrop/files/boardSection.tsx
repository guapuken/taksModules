import React from 'react';
// types
import { boards } from '../types';
// dnd librería
import { useDroppable } from '@dnd-kit/core';
import {
	SortableContext,
	horizontalListSortingStrategy,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
// componentes principales
import SortableTaskItem from './sortableItem';
import TaskItem from './taskItem';
// archivos multimedia
import bell from '../../../img/bell.svg';

import '../dragAndDrop.scss';

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
				<div ref={setNodeRef} style={datos.styleTaskContainer} className={`ctnIndvlBrd`}>
					{datos.tasks.map((task) => {
						return (
							<div className={`ctnDrgbl`} key={task.id}>
								<SortableTaskItem id={task.id}>
									<TaskItem
										data={task}
										Card={datos.Card}
										approved={task.approved}
										modo={datos.modo}
									/>
								</SortableTaskItem>
							</div>
						);
					})}
				</div>
			</SortableContext>
		</div>
	);
};

export default BoardSection;

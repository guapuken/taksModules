import React, { useEffect, useRef, useState } from 'react';
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

import { SimpleContainer, Texts, Title } from '../../Atoms';
import '../dragAndDrop.scss';

const BoardSection = (props: boards) => {
	const datos = { ...props };
	const { setNodeRef } = useDroppable({
		id: datos.id,
	});


	function separarTexto(text: string) {
		let newText = '';
		if (/[-,_]/.test(text)) {
			newText = text.replace(/[-,_]/g, ' ');
		} else {
			newText = text;
		}
		newText !== '' ? (newText = `${newText.charAt(0).toUpperCase()}${newText.slice(1)}`) : '';
		return newText;
	}
	return (
		<div className={`drpblCtn`}>
			<SimpleContainer style={{ width: '100%', height: '30px', position: 'relative' }}>
				<div className={'ctnTitle'}>
					<Title modo={datos.modo}>{separarTexto(datos.title)}</Title>
					<Texts modo={datos.modo}>Total: {datos?.tasks?.length}</Texts>
				</div>
			</SimpleContainer>
			<SortableContext
				id={datos.id}
				items={datos?.tasks}
				strategy={
					datos.scrSize.width <= 834
						? horizontalListSortingStrategy
						: verticalListSortingStrategy
				}
			>
				{/* Se aplican los estilos al componente que contiene las tareas */}
				<div
					ref={(e) => {
						setNodeRef(e);
					}}
					id={`${datos.id}Board`}
					style={{
						...datos.styleTaskContainer,
					}}
					className={`ctnIndvlBrd`}
				>
					{datos?.tasks.map((task: any) => {
						return (
							<div className={`ctnDrgbl`} key={task.id}>
								<SortableTaskItem id={task.id} cantMove={task?.cantMove}>
									<TaskItem
										data={task}
										Card={datos.Card}
										approved={task.approved}
										modo={datos.modo}
										pendingToReview={task.pendingToReview}
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

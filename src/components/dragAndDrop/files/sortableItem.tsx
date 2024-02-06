import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';
import dragIcon from '../../../img/drag.svg';

//Componente que genera el elemento ordenable de cada columna-----------------------------------------------------------------------------
interface SortableTaskItemProps {
	children: React.ReactNode;
	id: string;
	cantMove?: boolean
}
const SortableTaskItem = ({ children, id, cantMove }: SortableTaskItemProps) => {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
		id,
	});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0 : 1,
	};

	return (
		<div ref={setNodeRef} style={{ position: 'relative', ...style }} {...attributes}>
			{!cantMove && <img className="icnDrag" {...listeners} title="Arrastrar" src={dragIcon} />}
			{children}
		</div>
	);
};

export default SortableTaskItem;

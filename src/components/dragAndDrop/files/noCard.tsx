import React from 'react';

const NoCard = ({ taskName }: any) => {
	return (
		<div className="noCardTmplt">
			<p>{taskName ?? 'Nombre de la tarea'}</p>
		</div>
	);
};
export default NoCard;

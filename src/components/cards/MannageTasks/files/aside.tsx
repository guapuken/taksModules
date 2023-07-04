import React from 'react';

// componentes auxiliares
import { AsideContainer, ButtonsArray } from '../../../../utils/asideUtils';
// types
import { aside } from '../types';
// archivos multimedia
import del from '../../../../img/vaciar.svg';
import prev from '../../../../img/previsualizar.svg';
import edit from '../../../../img/editar.svg';

export const Aside = ({
	onCl_delete,
	onCl_preview,
	onCl_edit,
	modo = 'Light',
	isCampaignTask,
}: aside) => {
	const optionsCardTasks = [
		{
			id: 'preview',
			img: prev,
			onClick: onCl_preview,
			titleToShow: 'Previsualizar',
		},
	];
	!isCampaignTask &&
		optionsCardTasks.push(
			{
				id: 'edit',
				img: edit,
				onClick: onCl_edit,
				titleToShow: 'Editar',
			},
			{
				id: 'delete',
				img: del,
				onClick: onCl_delete,
				titleToShow: 'Eliminar',
			}
		);

	return (
		<AsideContainer>
			<ButtonsArray modo={modo} buttons={optionsCardTasks} vertical />
		</AsideContainer>
	);
};

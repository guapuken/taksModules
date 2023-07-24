import React from 'react';

//importación de auxiliares---------------------------------------------------
//archivos multimedia
import editIcon from '../../../../img/icons/edit_light.svg';
import asignIcon_light from '../../../../img/icons/asign_light.svg';
import reminderIcon_light from '../../../../img/icons/reminder_light.svg';
import calendarIcon_light from '../../../../img/icons/calendar_light.svg';
import follow_light from '../../../../img/icons/bell_light.svg';

// types
import { aside } from '../types/types';
import { AsideContainer, ButtonsArray } from '../../../../utils/asideUtils';

//componente principal --------------------------------------------------------------
const Aside = ({
	onCl_edit,
	onCl_reasignDate,
	onCl_asignTask,
	onCl_follow,
	onCl_reminder,
	follow,
	modo,
	idTask,
	isCampaignTask,
}: aside) => {
	let options = [
		// TODO: asignar el icono de recordatorio
		{
			id: `asignTask${idTask}`,
			img: /* modo === 'Dark' ? asignIcon_dark : */ asignIcon_light,
			onClick: onCl_asignTask,
			titleToShow: 'Reasignar tarea',
		},
		{
			id: `reminder${idTask}`,
			img: /*  modo === 'Dark' ? reminderIcon_dark : */ reminderIcon_light,
			onClick: onCl_reminder,
			titleToShow: 'Programar recordatorio',
		},
		// TODO: asignar el icono de follow
		{
			id: `follow${idTask}`,
			img: /* modo === 'Dark' ? calendarIcon_dark : */ follow_light,
			onClick: onCl_follow,
			titleToShow: follow ? 'Dejar de seguir tarea' : 'Seguir tarea',
		},
	];

	!isCampaignTask &&
		options.push(
			{
				id: `edit${idTask}`,
				img: editIcon,
				onClick: onCl_edit,
				titleToShow: 'Editar',
			},
			{
				id: `calendar${idTask}`,
				img: calendarIcon_light,
				onClick: onCl_reasignDate,
				titleToShow: 'Reasignar fecha',
			}
		);
	// retorno del componente
	return (
		<AsideContainer>
			<ButtonsArray modo={modo} buttons={options} vertical />
		</AsideContainer>
	);
};

// exportación de componente default
export default Aside;

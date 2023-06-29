import React from 'react';

//importación de auxiliares---------------------------------------------------
//archivos multimedia
import editIcon from '../../../../img/editar.svg';
import calendarIcon from '../../../../img/calendario.svg';
import asign from '../../../../img/addUser.svg';
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
	modo = 'Light',
	idTask,
	isPM,
	haveSubPersonal,
}: aside) => {
	let options = [
		{
			id: `edit${idTask}`,
			img: editIcon,
			onClick: onCl_edit,
			titleToShow: 'Editar',
		},
		{
			id: `calendar${idTask}`,
			img: calendarIcon,
			onClick: onCl_reasignDate,
			titleToShow: 'Reasignar fecha',
		},

		// TODO: asignar el icono de recordatorio
		{
			id: `reminder${idTask}`,
			img: editIcon,
			onClick: onCl_reminder,
			titleToShow: 'Programar recordatorio',
		},
		// TODO: asignar el icono de follow
		{
			id: `follow${idTask}`,
			img: calendarIcon,
			onClick: onCl_follow,
			titleToShow: follow ? 'Dejar de seguir tarea' : 'Seguir tarea',
		},
	];

	/* (isPM || haveSubPersonal) && */
	options.push({
		id: `asignTask${idTask}`,
		img: asign,
		onClick: onCl_asignTask,
		titleToShow: 'Asignar tarea',
	});
	// retorno del componente
	return (
		<AsideContainer>
			<ButtonsArray modo={modo} buttons={options} vertical />
		</AsideContainer>
	);
};

// exportación de componente default
export default Aside;

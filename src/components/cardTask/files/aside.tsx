import React from 'react';

//importación de auxiliares---------------------------------------------------
// componentes
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
//archivos multimedia
import editIcon from '../../../img/editar.svg';
import calendarIcon from '../../../img/calendario.svg';
import asign from '../../../img/addUser.svg';
// types
import { aside } from '../types';

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
}: aside) => {
	// retorno del componente
	return (
		<AsideContainer>
			<ButtonsArray
				modo={modo}
				buttons={[
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
					{
						id: `asignTask${idTask}`,
						img: asign,
						onClick: onCl_asignTask,
						titleToShow: 'Asignar tarea',
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
				]}
				vertical
			/>
		</AsideContainer>
	);
};

// exportación de componente default
export default Aside;

import React from 'react';

//importación de auxiliares---------------------------------------------------
// componentes
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
//archivos multimedia
import editIcon from '../../../img/editar.svg';
import calendarIcon from '../../../img/calendario.svg';
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
}: aside) => {
	// retorno del componente
	return (
		<AsideContainer>
			<ButtonsArray
				modo={modo}
				buttons={[
					{
						img: editIcon,
						onClick: onCl_edit,
						titleToShow: 'Editar',
					},
					{
						img: calendarIcon,
						onClick: onCl_reasignDate,
						titleToShow: 'Reasignar fecha',
					},
					{
						img: editIcon,
						onClick: onCl_asignTask,
						titleToShow: 'Asignar tarea',
					},
					{
						img: calendarIcon,
						onClick: onCl_follow,
						titleToShow: follow ? 'Dejar de seguir tarea' : 'Seguir tarea',
					},
					{
						img: editIcon,
						onClick: onCl_reminder,
						titleToShow: 'Programar recordatorio',
					},
				]}
				vertical
			/>
		</AsideContainer>
	);
};

// exportación de componente default
export default Aside;

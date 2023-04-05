import React from 'react';

//importación de auxiliares---------------------------------------------------
// componentes
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
//archivos multimedia
import editIcon from '../../../img/editar.svg';
import calendarIcon from '../../../img/calendario.svg';

//componente principal --------------------------------------------------------------
const Aside = (props: any) => {
	//desestructuración de propiedades
	const {
		onClickEditar,
		onClickFecha,
		onClickComentario,
		onClickFollow,
		onClickReminder,
		followNotificationsValue,
		modo,
	} = props;

	// definición de botones
	const buttons = [
		{
			img: editIcon,
			onClick: onClickEditar,
			titleToShow: 'Editar',
		},
		{
			img: calendarIcon,
			onClick: onClickFecha,
			titleToShow: 'Reasignar fecha',
		},
		{
			img: editIcon,
			onClick: onClickComentario,
			titleToShow: 'Asignar tarea',
		},
		{
			img: calendarIcon,
			onClick: onClickFollow,
			titleToShow: followNotificationsValue ? 'Dejar de seguir tarea' : 'Seguir tarea',
		},
		{
			img: editIcon,
			onClick: onClickReminder,
			titleToShow: 'Programar recordatorio',
		},
	];

	// retorno del componente
	return (
		<AsideContainer>
			<ButtonsArray modo={modo} buttons={buttons} vertical />
		</AsideContainer>
	);
};

// exportación de componente default
export default Aside;

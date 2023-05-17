import React, { useEffect, useState } from 'react';
import IconDropdown from '../../iconDropdown';
import FlagIcon from '../../../img/flagICon';
import { Modo, statusTask } from '../../../types';

interface IconPriorityProps {
	prioridadInicial?: 'none' | 'baja' | 'media' | 'alta';
	onCl_selectPriority?: (e: React.MouseEvent<HTMLElement>) => void;
	modo?: Modo;
}

const IconPriority = (props: IconPriorityProps) => {
	//Desestructuración de propiedades
	const { prioridadInicial, onCl_selectPriority, modo } = props;

	//Variables para definir el nivel de prioridad
	const [prioridad, setPrioridad] = useState(prioridadInicial || 'none');

	//Se agrega el estado de la prioridad y se da la opción de agregar un onClick en la para definir la función que se realizará al dar clic en el elemento
	const handleClickPriority = (prioridad: any) => {
		setPrioridad(prioridad.target.id);
		if (onCl_selectPriority) {
			onCl_selectPriority(prioridad);
		}
	};
	useEffect(() => {
		setPrioridad(prioridadInicial as 'none' | 'baja' | 'media' | 'alta');
	}, [prioridadInicial]);
	//Opciones de prioridades
	const optionsPriority = [
		{
			id: 'none',
			title: 'Sin prioridad',
			onClick: handleClickPriority,
		},
		{
			id: 'baja',
			title: 'Prioridad baja',
			onClick: handleClickPriority,
		},
		{
			id: 'media',
			title: 'Prioridad media',
			onClick: handleClickPriority,
		},
		{
			id: 'alta',
			title: 'Prioridad alta',
			onClick: handleClickPriority,
		},
	];

	return (
		<div style={{ width: 'auto', display: 'flex' }} className="ContainerIconPriority">
			{/* Se coloca el color de la bandera dependiendo del estado de la prioridad */}
			<IconDropdown
				modo={modo as Modo}
				title={`Prioridad ${prioridad === 'none' ? 'no definida' : prioridad}`}
				options={optionsPriority}
				svg={
					<FlagIcon
						height={30}
						fill={
							prioridad === 'baja'
								? '#1cbf59'
								: prioridad === 'media'
								? '#fcb23b'
								: prioridad === 'alta'
								? '#fc3d38'
								: modo === 'Dark'
								? '#dedede'
								: '#525252'
						}
					/>
				}
			/>

			{/* Si existe el campo de prioridad se ejecuta el campo en el que se le agrega el color de la prioridad según se haya asignado */}
			{/* {prioridad &&
				useWindowSize().width > 1280 &&
				(prioridad === 'none' ? (
					<></>
				) : (
					<p
						className="TextPriorityMenu"
						style={{
							color: priorityColor(prioridad),
							transition: 'all ease 0.5s',
							fontSize: '1.4rem',
						}}
					>{`Prioridad ${prioridad}`}</p>
				))} */}
		</div>
	);
};
export default IconPriority;

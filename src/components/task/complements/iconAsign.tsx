import React, { useEffect, useRef, useState } from 'react';
import { onClickType } from '../../../utils/types/typesUtils';
import { windowSize } from '../../../utils/widthSize';
import IconDropdown from '../../iconDropdown';

type submenus = {
	id?: number | string;
	className?: string;
	onClick?: onClickType;
	title?: string;
};
interface IconAsignProps {
	involucrados?: number;
	responsables?: submenus[];
	equipos?: submenus[];
	revision?: submenus[];
	className?: string;
	style?: {};
	valueResponsable?: string;
	valueRevision?: string;
}
//Se construye el componente que regresa el icono de asignar usuario
export const IconAsign = (props: IconAsignProps) => {
	//desestructuración de propiedades
	const {
		involucrados = 0,
		responsables,
		equipos,
		revision,
		className,
		style,
		valueResponsable,
		valueRevision,
	} = props;

	//Opciones de usuarios
	const asignUsers = [
		{
			title: 'Asignar responsable:',
			submenus: responsables,
		},
		{
			title: 'Asignar a equipo:',
			submenus: equipos,
		},
		{
			title: 'Encargado de revisión:',
			submenus: revision,
		},
	];

	//La variable isHover permite saber cuando el mouse se encuentra haciendo un hover en un elemento
	const [isHover, setIsHoverEnter] = useState(false);
	const Hover = () => {
		setIsHoverEnter(!isHover);
	};

	interface PopUpInvolucradosProps {
		className?: string;
	}
	//El component de PopUp retorna la estructura del popup que muestra las persona involucradas dentro de la tarea
	const PopUpInvolucrados = (props: PopUpInvolucradosProps) => {
		const { className } = props;
		return (
			<span
				className={`TextInvolucradosTaskComponent ${className}`}
				style={{
					top: `calc(100% + ${
						className === 'TabletAndMobileVersion' ? '2.5rem' : '2rem'
					})`,
					right: className === 'TabletAndMobileVersion' ? '' : '0',
					left: className === 'TabletAndMobileVersion' ? 'calc(-16rem + 5.5rem)' : '',
					display: isHover ? 'block' : 'none',
					zIndex: '1',
				}}
			>
				<span className="IconMsnTaskComponent">
					<span>
						{valueResponsable && (
							<span>
								<strong>Responsable: </strong>
								{valueResponsable}
							</span>
						)}
						{valueRevision && (
							<span>
								<strong>Encargado de revisión: </strong>
								{valueRevision}
							</span>
						)}
					</span>
				</span>
			</span>
		);
	};

	//retorno del componente
	return (
		<div className={`ContainerIconAsignUsers ${className}`} style={style}>
			<IconDropdown options={asignUsers} icon={require('../../../img/addUser.svg')} />

			{/* Si existe la propiedad de involucrados se ejecuta el bloque de código que genera el texto o el círculo con los datos de los involucrado en la tarea o proyecto */}
			{involucrados > 0 && (
				<p
					className={
						windowSize().width < 1280
							? 'CircleInvolucradosTaskComponent'
							: 'TextPriorityMenu'
					}
					style={{
						fontSize: '1.4rem',
						color: windowSize().width < 1280 ? '#fff' : '#525252',
					}}
					onMouseEnter={Hover}
					onMouseLeave={Hover}
					onClick={() => setIsHoverEnter(!isHover)}
				>
					{/* Se returna el número de involucrados */}
					{involucrados}
					<PopUpInvolucrados
						className={windowSize().width < 1280 ? 'TabletAndMobileVersion' : ''}
					/>

					{/* Si el tamaño de la pantalla es mayor a 768px se agrega la concatenación con el número de involucrados y la palabra involucrados o involucrado */}
					{windowSize().width > 1280 &&
						` ${involucrados > 1 ? 'involucrados' : 'involucrado'}`}
				</p>
			)}
		</div>
	);
};

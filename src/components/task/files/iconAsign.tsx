import React, { CSSProperties, useState } from 'react';
import IconDropdown from '../../iconDropdown';
import addUserIcon from '../../../img/addUser.svg';
import { Modo, optionsIcnDrp, submenusArray } from '../../../types';

interface IconAsignProps {
	style?: CSSProperties;
	styleCircle?: CSSProperties;
	iconStyle?: CSSProperties;
	responsables?: submenusArray[];
	equipos: submenusArray[];
	revision?: submenusArray[];
	className?: string;
	valueResponsable?: string;
	valueRevision?: string;
	involucrados?: number;
	// options: optionsIcnDrp[];
	modo: Modo;
	disabled?: boolean;
}
//Se construye el componente que regresa el icono de asignar usuario
const IconAsign = (props: IconAsignProps) => {
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
		styleCircle,
		iconStyle,
		disabled,
		modo = 'Light',
	} = props;

	//Opciones de usuarios
	const asignUsers = [
		{
			id: '1',
			title: 'Asignar responsable:',
			submenus: responsables,
		},
		{
			id: '2',
			title: 'Asignar a equipo:',
			submenus: equipos,
		},
		{
			id: '3',
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
					top: `calc(100% + ${className === 'TabletAndMobileVersion' ? '25px' : '20px'})`,
					right: className === 'TabletAndMobileVersion' ? '' : '0',
					left: className === 'TabletAndMobileVersion' ? 'calc(-160px + 55px)' : '',
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
			<IconDropdown
				modo={modo}
				options={equipos ? asignUsers : [asignUsers[0], asignUsers[2]]}
				icon={addUserIcon}
				iconStyles={iconStyle}
				disabled={disabled}
			/>

			{/* Si existe la propiedad de involucrados se ejecuta el bloque de código que genera el texto o el círculo con los datos de los involucrado en la tarea o proyecto */}
			{involucrados > 0 && (
				<p
					className={
						// useWindowSize().width < 1280?
						'CircleInvolucradosTaskComponent'
						// : 'TextPriorityMenu'
					}
					style={{
						fontSize: '14px',
						color:
							// useWindowSize().width < 1280 ?
							'#fff',
						// : '#525252',
						...styleCircle,
					}}
					onMouseEnter={Hover}
					onMouseLeave={Hover}
					onClick={() => setIsHoverEnter(!isHover)}
				>
					{/* Se returna el número de involucrados */}
					{involucrados}
					<PopUpInvolucrados
						className="TabletAndMobileVersion" // {useWindowSize().width < 1280 ?
						// : ''}
					/>

					{/* Si el tamaño de la pantalla es mayor a 768px se agrega la concatenación con el número de involucrados y la palabra involucrados o involucrado
					{useWindowSize().width > 1280 &&
						` ${involucrados > 1 ? 'involucrados' : 'involucrado'}`} */}
				</p>
			)}
		</div>
	);
};

export default IconAsign;

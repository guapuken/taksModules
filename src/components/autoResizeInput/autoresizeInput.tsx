import React, { useEffect, useRef, useState } from 'react';
// types que se utilizan en el componente
import { autoresizeInput } from './types';
// estilos del componente
import './autoresizeInput.scss';
// types que se usan en documentación, (NO BORRAR)--------------------------------------------------------------------------------------
import { css, onBlurType, taskType } from '../../types';
//--------------------------------------------------------------------------------------------------------------------------------------

/** documentación del componente

 * @param {css} props.style -  objetos con propiedades de css
 * @param {onBlurType} props.onChange - función que se ejecuta al cambiar el contenido del textarea
 * @param {taskType} props.taskType - cambia el tamaño de la fuente dependiendo la jerarquía
 * @param {string} props.initialValue - se aplica un valor inicial al textarea
 * @param {string} props.placeholder - texto que se mostrará hasta el momentos que se escriba dentro del textarea
 * @param {number} props.tabIndex - número de orden que tiene el text área al moverse de uno a otro con tab
 * @param {boolean} props.disabled - propiedad que define si se encuentra desabilitado el input o no
 
 * Resultado del componente
 * @returns - input de textarea que se ajusta automaticamente al tamaño del texto
 */
const AutoresizeInput = (props: autoresizeInput) => {
	//desestructuración de propiedades
	const datos = { ...props };

	// inicialización de propiedades
	const { taskType = 'task', modo = 'Light' } = props;

	//Hooks
	const [value, setValue] = useState(datos.initialValue);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	// se encarga de reiniciar el tamaño del textarea y se setea el tamaño del mismo
	useEffect(() => {
		if (textAreaRef.current) {
			// We need to reset the height momentarily to get the correct scrollHeight for the textarea
			textAreaRef.current.style.height = '0px';
			const scrollHeight = textAreaRef.current.scrollHeight;

			// We then set the height directly, outside of the render loop
			// Trying to set this with state or a ref will product an incorrect value.
			textAreaRef.current.style.height = `${scrollHeight}px`;
		}
	}, [value]);

	//construcción de componente
	return (
		<textarea
			id={datos.id}
			ref={textAreaRef}
			disabled={datos.disabled}
			onChange={(e: any) => setValue(e.target?.value)}
			onBlur={(e: any) => {
				if (datos.onChange) {
					datos.onChange(e);
				}
			}}
			tabIndex={datos.tabIndex}
			placeholder={datos.placeholder}
			rows={1}
			value={value}
			className={`ctn${modo}-${taskType}_AIPTC`}
			style={datos.style}
		/>
	);
};

export default AutoresizeInput;

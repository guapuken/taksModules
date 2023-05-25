import React, { useEffect, useRef, useState } from 'react';
// types que se utilizan en el componente
import { autoresizeInput } from './types/types';
// estilos del componente
import './styles/autoresizeInput.scss';
// types que se usan en documentación, (NO BORRAR)--------------------------------------------------------------------------------------
import { css, onBlurType, onChangeType, taskType } from '../../types';
//--------------------------------------------------------------------------------------------------------------------------------------

/** documentación del componente

 * @param {css} props.style -  objetos con propiedades de css
 * @param {onBlurType} props.onChange - función que se ejecuta al cambiar el contenido del textarea
 * @param {taskType} props.taskType - cambia el tamaño de la fuente dependiendo la jerarquía
 * @param {string} props.initialValue - se aplica un valor inicial al textarea
 * @param {string} props.placeholder - texto que se mostrará hasta el momentos que se escriba dentro del textarea
 * @param {number} props.tabIndex - número de orden que tiene el text área al moverse de uno a otro con tab
 * @param {boolean} props.disabled - propiedad que define si se encuentra desabilitado el input o no
 * 
 * @returns - input de textarea que se ajusta automaticamente al tamaño del texto
 */
const AutoresizeInput = ({
	id,
	style,
	onCh,
	taskType = 'task',
	initialValue,
	placeholder,
	tabIndex,
	disabled,
	modo = 'Light',
}: autoresizeInput) => {
	//Hooks
	const [value, setValue] = useState(initialValue || undefined);
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
	// se encarga de reiniciar el tamaño del textarea y se setea el tamaño del mismo
	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	const handleChange = (e: any) => {
		setValue(e.target.value);
		if (onCh) onCh(e);
	};
	//construcción de componente
	return (
		<textarea
			id={id}
			ref={textAreaRef}
			disabled={disabled}
			onChange={handleChange}
			tabIndex={tabIndex}
			placeholder={placeholder}
			rows={1}
			value={value}
			className={`ctn_AIPTC ${modo}`}
			style={{ width: '100%', ...style }}
			// atributos que aayudan en la construcción de los estilos de los componentes
			hrc-inpt={taskType}
		/>
	);
};

export default AutoresizeInput;

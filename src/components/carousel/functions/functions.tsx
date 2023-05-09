import React from 'react';
import { elements } from '../types/types';
export function asignIndex(array: any[], property: string) {
	let contador = 0;
	for (let i = 0; i < array.length; i++) {
		array[i] = {
			[property]: contador,
			...array[i],
		};
		contador++;
	}
	return array;
}

export function nextPrevProp(next?: boolean, property?: any, setProperty?: any, data?: any) {
	const newIndex = next ? property.index + 1 : property.index - 1;
	setProperty(data[newIndex]);
}

/** DESCRIPCIÓN DE LA FUNCIÓN
 * define el valor de ancho y alto que tienen los elementos que se colocarán dentro del carrusel
 * @param {elements[]} data - recibe un arreglo de objetos que contienen un id y el número de propiedades que se necesiten
 * @example :
 * 		[
 * 			{
 * 				id: "1256d52f4g5r8",
 * 				name: "Juanito Bodoque",
 * 				description:"Niño de peso y altura promedio",
 * 				birthDate: "2023-04-05 00:00:00"
 * 			}
 * 		]
 * @returns - objeto con width y height
 * @example -
 * 		{
 * 			width: 250,
 * 			height: 120
 * 		}
 */
export function sizeElement(data: elements[]) {
	const elementSize = data.map((prop) => {
		const elementSize = document.getElementById(`card${prop.id}`);
		const elementWidth = elementSize?.clientWidth;
		const elementHeight = elementSize?.clientHeight;
		let width = 0;
		let height = 0;
		for (let i = 0; i < data.length; i++) {
			if (elementWidth !== width) {
				width += elementWidth ?? 0;
			}
			if (elementHeight !== height) {
				height += elementHeight ?? 0;
			}
		}
		if (width !== 0 && height !== 0) {
			return { key: prop.id, width, height };
		}
	});
	return elementSize[0];
}

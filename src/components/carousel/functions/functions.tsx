import React from 'react';
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

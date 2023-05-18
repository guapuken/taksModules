import { useWindowSize } from '../windowSize';

// regresa el tamaño ideal que debería de conservar las cards de tareas ------------------------------------
export function cardW(aside: boolean) {
	const scrW = useWindowSize().width;
	return scrW <= 415
		? scrW / 10 - (aside ? 8 : 3)
		: scrW <= 834
		? (scrW * 0.9) / 10 / 2 - (aside ? 8 : 3)
		: (scrW * 0.9) / 10 / 4 - (aside ? 8 : 3);
}

//regresa el tamaño ideal de la altura que debería dde conseervar las cards de tareas------------------------
export function cardH() {
	const scrH = useWindowSize().height;
	return scrH / 10 / 4 - 3;
}

/**
 * @param {string} text - recibe una cadena de texto
 * @example "Juan Carlos Almada"
 * @returns las letras iniciales de la cadena de texto
 * @example - initialLetters("Juan Calos Almada") → return → "JCA"
 */
export function initialLetters(text: string) {
	return text ? text.split(' ').map((word) => word.charAt(0)) : '';
}

let id = 0;
export function autoIncrementalId(diferencial?: string) {
	id++;
	return `${diferencial ?? ''}-${id}`;
}

export function aspectRatio() {
	const scrnW = useWindowSize().width;
	const scrnH = useWindowSize().height;
	const size = scrnH / 10 > scrnW / 7 ? true : false;
	return size;
}

/**
 *
 * @param {string} idToSelect - se requiere de un string con el nombre del id que se quiere saber su ancho
 * @returns - el tamaño a lo ancho del elemento con el id seleccionado
 */
export function getElementWidth(idToSelect: string) {
	let width = 0;
	const element = document.getElementById(idToSelect);
	if (element && element.clientWidth) {
		width = element?.clientWidth;
	}
	return width;
}

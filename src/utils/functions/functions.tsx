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
export function getWidth(idToSelect: string) {
	console.log(idToSelect);
	let width = 0;
	let height = 0;
	const element = document.getElementById(idToSelect);
	console.log(element);
	if (element && element.clientWidth) {
		width = element?.clientWidth;
	}
	if (element && element.clientHeight) {
		height = element?.clientHeight;
	}

	return { width, height };
}

export function obtenerColorLetra(colorFondo: any) {
	/*
	 * Devuelve el color de letra (blanco o negro) en función del color de fondo proporcionado.
	 */
	// Convertir el color de fondo a su equivalente en escala de grises
	// El cálculo se basa en la fórmula de luminosidad relativa (https://en.wikipedia.org/wiki/Relative_luminance)
	let r = 0;
	let g = 0;
	let b = 0;
	if (colorFondo?.includes('#')) {
		r = parseInt(colorFondo?.slice(1, 3), 16);
		g = parseInt(colorFondo?.slice(3, 5), 16);
		b = parseInt(colorFondo?.slice(5, 7), 16);
	} else {
		[r, g, b] = colorFondo;
	}
	const luminosidad = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

	// Determinar el color de letra en función de la luminosidad del fondo
	if (luminosidad > 0.5) {
		return '#282828'; // Fondo claro, usar letra negra
	} else {
		return '#dedede'; // Fondo oscuro, usar letra blanca
	}
}

// Ejemplo de uso
const fondoBlanco = [255, 255, 255];
const fondoNegro = [0, 0, 0];
// const fondoBlanco = '#282828';
// const fondoNegro = '#ffffff';

const colorLetraBlanca = obtenerColorLetra(fondoBlanco);
const colorLetraNegra = obtenerColorLetra(fondoNegro);

console.log('Color de letra para fondo blanco:', colorLetraBlanca);
console.log('Color de letra para fondo negro:', colorLetraNegra);

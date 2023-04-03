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

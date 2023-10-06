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
		return '#ffffff'; // Fondo oscuro, usar letra blanca
	}
}

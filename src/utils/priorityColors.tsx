//functions
export function priorityColor(prioridad: 'none' | 'baja' | 'media' | 'alta') {
	return prioridad === 'baja'
		? '#1CBF59'
		: prioridad === 'media'
		? '#FCB23B'
		: prioridad === 'alta'
		? '#FC3D38'
		: '#525252';
}

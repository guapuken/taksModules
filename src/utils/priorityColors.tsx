type prioridadTypes = 'none' | 'baja' | 'media' | 'alta';

//functions
export function priorityColor(prioridad: prioridadTypes) {
	return prioridad === 'baja'
		? '#1CBF59'
		: prioridad === 'media'
		? '#FCB23B'
		: prioridad === 'alta'
		? '#FC3D38'
		: '#525252';
}

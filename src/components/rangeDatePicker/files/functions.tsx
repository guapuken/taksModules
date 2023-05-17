export function MonthName(month: any) {
	const months = [
		'Ene',
		'Feb',
		'Mar',
		'Abr',
		'May',
		'Jun',
		'Jul',
		'Ago',
		'Sep',
		'Oct',
		'Nov',
		'Dic',
	];
	/** Se define la fecha tomando los primeros 10 caaracteres dl timestamp
	 * @example -
	 * 		se recibe: 2023-06-09 GMT-0600 12:00:00
	 * 		se obtiene: 2023-06-09
	 *  */
	const date = month.slice(0, 10);
	/**
	 *	Una vez definida la fecha se define el mes, para eso se hace un slice de la fecha solicitando solamente los caracteres del mes:
	 *  @example -
	 * 		se recibe: 2023-09-05
	 * 		se regresa: 09
	 */
	const monthNumber = date.slice(5, 7);
	/**
	 * Para obtener el nombre del mes se obtiene selecciona el mes y se le agrega uno más para poder hacer el tratamiento dentro del array de meses
	 * @example -
	 * 		se obtiene: 09
	 * 		regresa: 10
	 * una vez obtenido el número del mes se hace un slice dentro del array de nombres para colocar el nombre con el número del día
	 * @example -
	 * 		se obtiene 09
	 * 		regresa: Oct, 05
	 */
	parseInt(monthNumber) + 1;
	if (monthNumber <= 9) {
		return `${months[monthNumber.slice(-1) - 1]}, ${date.slice(-2)}`;
	} else return `${months[monthNumber - 1]}, ${date.slice(-2)}`;
}

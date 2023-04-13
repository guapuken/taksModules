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
	// const monthNumber = month.slice(0, 2);
	const date = month.slice(0, 10);
	const monthNumber = date.slice(5, 7);
	parseInt(monthNumber) + 1;
	if (monthNumber <= 9) {
		// return `${months[monthNumber.slice(-1) - 1]}, ${month.slice(-2)}`;
		return `${months[monthNumber.slice(-1) - 1]}, ${date.slice(-2)}`;
	} else return `${months[monthNumber - 1]}, ${month.slice(-2)}`;
}

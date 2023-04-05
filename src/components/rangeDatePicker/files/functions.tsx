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
	const monthNumber = month.slice(0, 2);
	parseInt(monthNumber) + 1;
	if (monthNumber <= 9) {
		return `${months[monthNumber.slice(-1) - 1]}, ${month.slice(-2)}`;
	} else return `${months[monthNumber - 1]}, ${month.slice(-2)}`;
}

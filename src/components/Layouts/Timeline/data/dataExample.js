export const tasks = [
	{
		duration: 2,
		modo: 'Light',
		taskName: 'Bloqueos',
		completed: true,
		// onClick
	},
	{
		duration: 1,
		modo: 'Light',
		taskName: 'Dummies',
		completed: true,
	},
	{
		duration: 1,
		modo: 'Light',
		taskName: 'Pdc',
		completed: true,
	},
	{
		duration: 5,
		modo: 'Light',
		taskName: 'Impresión',
	},
	{
		duration: 10,
		modo: 'Light',
		taskName: 'Envío e instalación',
	},
	{
		duration: 3,
		modo: 'Light',
		taskName: 'Reporte fotográfico',
		legendBtn: 'Ir a testigos',
		onCl_showDetails: () => alert('Redirigiendo a testigos'),
	},
	{
		duration: 3,
		modo: 'Light',
		taskName: 'Reporte 2',
	},
	{
		duration: 3,
		modo: 'Light',
		taskName: 'Reporte 3',
	},
	{
		duration: 3,
		modo: 'Light',
		taskName: 'Retiro',
	},
];

export const fijos = [
	{
		nombreMedio: 'IMJ-CDMX-ESP-1526',
		porcentajeMedio: 25,
		statusMedio: 'onTime',
		onCl_medio: () => alert('IMJ-CDMX-ESP-1526'),
	},
	{
		nombreMedio: 'IMJ-CDMX-ESP-7586',
		porcentajeMedio: 75,
		statusMedio: 'outOfTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
];

export const urbanos = [
	{
		nombreRuta: 'T-18 Antes(622)',
		porcentajeRuta: 15,
		statusRuta: 'delayed',
	},
	{
		nombreRuta: 'C-79 Antes(640)',
		porcentajeRuta: 26,
		statusRuta: 'outOfTime',
	},
];

export const indoors = [
	{
		nombreMedio: 'IMJ-CDMX-ESP-1526',
		porcentajeMedio: 25,
		statusMedio: 'onTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-ESP-7586',
		porcentajeMedio: 75,
		statusMedio: 'outOfTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
	{
		nombreMedio: 'IMJ-CDMX-MUR-7695',
		porcentajeMedio: 30,
		statusMedio: 'onTime',
	},
];

export const vallas = [
	{
		nombreValla: '254',
		porcentajeValla: 75,
		statusValla: 'onTime',
	},
	{
		nombreValla: '7569',
		porcentajeValla: 20,
		statusValla: 'onTime',
	},
];

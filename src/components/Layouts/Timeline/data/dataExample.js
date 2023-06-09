export const tasks = {
	fijos: [
		{
			duration: 2,
			taskName: 'Bloqueos',
			completed: true,
			// onClick
		},
		{
			duration: 1,
			taskName: 'Dummies',
			completed: true,
		},
		{
			duration: 1,
			taskName: 'Pdc',
			completed: true,
		},
		{
			duration: 5,
			taskName: 'Impresión',
			completed: false,
		},
		{
			duration: 10,
			taskName: 'Envío e instalación',
		},
		{
			duration: 3,
			taskName: 'Reporte fotográfico',
			legendBtn: 'Ir a testigos',
			onCl_showDetails: () => alert('Redirigiendo a testigos'),
		},
		{
			duration: 3,
			taskName: 'Reporte 2',
		},
		{
			duration: 3,
			taskName: 'Reporte 3',
		},
		{
			duration: 3,
			taskName: 'Retiro',
		},
	],
	urbanos: [
		{
			duration: 1,
			taskName: 'Dummies',
			completed: true,
		},
		{
			duration: 1,
			taskName: 'Pdc',
			completed: true,
		},
		{
			duration: 5,
			taskName: 'Impresión',
		},
		{
			duration: 10,
			taskName: 'Envío e instalación',
		},
	],
	indoors: [
		{
			duration: 1,
			taskName: 'Contratación de indoor',
			completed: true,
		},
		{
			duration: 1,
			taskName: 'Dummies',
			completed: true,
		},
		{
			duration: 1,
			taskName: 'Pdc',
			completed: true,
		},
		{
			duration: 5,
			taskName: 'Impresión',
		},
		{
			duration: 10,
			taskName: 'Envío e instalación',
		},
	],
	vallas: [
		{
			duration: 1,
			taskName: 'Contratación de valla',
			completed: true,
		},
		{
			duration: 1,
			taskName: 'Dummies',
			completed: true,
		},
		{
			duration: 1,
			taskName: 'Pdc',
			completed: true,
		},
		{
			duration: 5,
			taskName: 'Impresión',
		},
		{
			duration: 10,
			taskName: 'Envío e instalación',
		},
	],
};

export const fijos = [
	{
		nombre: 'IMJ-CDMX-ESP-1526',
		porcentaje: 25,
		status: 1,
		onClick: () => alert('IMJ-CDMX-ESP-1526'),
	},
	{
		nombre: 'IMJ-CDMX-ESP-7586',
		porcentaje: 75,
		status: 'outOfTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
];

export const urbanos = [
	{
		nombre: 'T-18 Antes(622)',
		porcentaje: 15,
		status: 'delayed',
	},
	{
		nombre: 'C-79 Antes(640)',
		porcentaje: 26,
		status: 'outOfTime',
	},
];

export const indoors = [
	{
		nombre: 'IMJ-CDMX-ESP-1526',
		porcentaje: 25,
		status: 'onTime',
	},
	{
		nombre: 'IMJ-CDMX-ESP-7586',
		porcentaje: 75,
		status: 'outOfTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
	{
		nombre: 'IMJ-CDMX-MUR-7695',
		porcentaje: 30,
		status: 'onTime',
	},
];

export const vallas = [
	{
		nombre: '254',
		porcentaje: 75,
		status: 'onTime',
	},
	{
		nombre: '7569',
		porcentaje: 20,
		status: 'onTime',
	},
];

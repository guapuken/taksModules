import { autoIncrementalId } from '../../../utils/functions/functions';

export const equipos = [
	{
		id: String(autoIncrementalId()),
		title: 'Creative',
		onClick: (e) => setRevision({ id: e.target.id, name: e.target.outerText }),
	},
	{
		id: String(autoIncrementalId()),
		title: 'Traffic',
	},
	{
		id: String(autoIncrementalId()),
		title: 'Planning',
	},
	{
		id: String(autoIncrementalId()),
		title: 'Sales',
	},
];

export const revisionarios = [
	{
		id: '1',
		title: 'Jorge Correa',
		// onClick: (e) => setResponsable(e.target.value),
		onClick: (e) => setRevision({ id: e.target.id, name: e.target.outerText }),
	},
	{
		id: '2',
		title: 'Kaori Soto',
	},
];

export const responsables = [
	{
		id: '1',
		title: 'Jorge Correa',
		// onClick: (e) => setResponsable(e.target.value),
		onClick: (e) => setResponsable({ id: e.target.id, name: e.target.outerText }),
	},
	{
		id: '2',
		title: 'Kaori Soto',
	},
];

export const templateOptions = [
	{
		id: '1',
		title: 'Espectaculares',
	},
	{
		id: '2',
		title: 'Muros',
	},
];

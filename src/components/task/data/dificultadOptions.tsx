import { onClickType } from '../../../types';

export function opcionesDificultad(handleClick: onClickType) {
	return [
		{
			id: '1',
			title: 'Muy fácil',
			onClick: handleClick,
		},
		{
			id: '2',
			title: 'Fácil',
			onClick: handleClick,
		},
		{
			id: '3',
			title: 'Normal',
			onClick: handleClick,
		},
		{
			id: '4',
			title: 'Dificil',
			onClick: handleClick,
		},
		{
			id: '5',
			title: 'Muy dificil',
			onClick: handleClick,
		},
	];
}

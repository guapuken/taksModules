import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';

//types
import { iconDrps } from './types';
// componente principal
import { Menus } from './files';
import './iconDropdown.scss';

//Componente funcional que se utilizará para generar el DropdownMenu
const IconDropdown = (props: iconDrps) => {
	let optionsInitialValue = [
		{
			id: '1',
			title: 'Opction 1',
			submenus: [
				{ id: '4', title: 'Option 1.1' },
				{ id: '5', title: 'Option 1.2' },
				{ id: '6', title: 'Option 1.3' },
				{ id: '7', title: 'Option 1.4' },
				{ id: '8', title: 'Option 1.5' },
			],
		},
		{ id: '2', title: 'Opction 2' },
		{ id: '3', title: 'Opction 3' },
	];
	// desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const { options = optionsInitialValue, modo = 'Light' } = props;

	return (
		<div className="">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger disabled={datos.disabled}>
					<span
						style={datos.iconStyles}
						// className={`trggr${modo}_IcnDrpC`}
						className={`trggr${modo}_IcnDrpC`}
						title={datos.title}
					>
						{datos.icon && <img src={datos.icon} alt={datos.icon} />}
						{datos.svg && datos.svg}
						{datos.legend && !datos.icon && datos.legend}
						{!datos.legend && !datos.icon && !datos.svg && 'ICON'}
					</span>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content
						onClick={datos.onCl}
						className={`sbCtn${modo}_IcnDrpC ${datos.className}`}
						style={{ cursor: 'pointer', zIndex: '2', ...datos.style }}
					>
						<Menus menus={options} modo={modo} />
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	);
};

export default IconDropdown;

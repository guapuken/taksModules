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
			title: 'Opction 1',
			submenus: [
				{ title: 'Option 1.1' },
				{ title: 'Option 1.2' },
				{ title: 'Option 1.3' },
				{ title: 'Option 1.4' },
				{ title: 'Option 1.5' },
			],
		},
		{ title: 'Opction 2' },
		{ title: 'Opction 3' },
	];
	// desestructuración de propiedades
	const datos = { ...props };
	// inicialización de propiedades
	const { options = optionsInitialValue, modo = 'Light' } = props;

	return (
		<div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<button
						style={datos.iconStyles}
						className={`trggr${modo}_IcnDrpC`}
						title={datos.title}
					>
						{datos.icon && <img src={datos.icon} alt={datos.icon} />}
						{datos.svg && datos.svg}
						{datos.legend && !datos.icon && datos.legend}
						{!datos.legend && !datos.icon && !datos.svg && 'ICON'}
					</button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content
						onClick={datos.onClick}
						// className={`SubmenuContainer${''} ${className}`}
						className={`sbCtn${modo}_IcnDrpC ${datos.className}`}
						style={{ cursor: 'pointer', ...datos.style }}
					>
						<Menus menus={options} modo={modo} />
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	);
};

export default IconDropdown;

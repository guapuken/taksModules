import React from 'react';
// comportamiento
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// types
import { optionsIcnDrp } from '../../../types';

//Componente funcional que permite mapear los menús y submenús, regresando ela estructura que necesita la librería de comportamiento
// const Menus = ({ menus }: any, modo: Modo) => {
const Menus = (props: any) => {
	const { menus, modo = 'Light' } = props;
	const menusMapping = menus.map((menu: optionsIcnDrp) => {
		//Si no existe la propiedad de submenu dentro de menu sólo regresará un item del Dropdown con sus propiedades para definir
		if (!menu.submenus) {
			return (
				<DropdownMenu.Item
					className={`ttlMenus${modo}_IcnDrpC`}
					onClick={menu.onClick}
					id={menu.id}
				>
					{menu.title}
				</DropdownMenu.Item>
			);
		}

		//Si existe la propiedad de submenu dentro del menú regresará la estructura de un submenú con sus respectivas propiedades para que se definan más adelante
		if (menu.submenus) {
			return (
				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger className={`ttlMenus${modo}_IcnDrpC`} id={menu.id}>
						{menu.title}
					</DropdownMenu.SubTrigger>
					<DropdownMenu.Portal>
						<DropdownMenu.SubContent
							className={`sbMenuCtn${modo}_IcnDrpC ${menu.className}`}
							style={{ cursor: 'pointer' }}
						>
							{menu.submenus.map((submenu) => {
								return (
									<DropdownMenu.Item
										className={`ttlMenus${modo}_IcnDrpC`}
										onClick={(e) => {
											if (submenu.onClick) {
												submenu.onClick(e);
											}
										}}
										id={submenu.id ? submenu.id : ''}
									>
										{submenu.title}
									</DropdownMenu.Item>
								);
							})}
						</DropdownMenu.SubContent>
					</DropdownMenu.Portal>
				</DropdownMenu.Sub>
			);
		}
	});

	return menusMapping;
};
export default Menus;

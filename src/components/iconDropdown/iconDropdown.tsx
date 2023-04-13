import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { CSSProperties } from 'react';
import './iconDropdown.scss';
import { Modo, onClickType } from '../../types';

//definición de los types que se usarán dentro de la interfaz
interface submenusArray {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	id?: string;
	title?: string;
}
interface optionsType {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	submenus?: submenusArray[];
	id?: string;
	title?: string;
	className?: string;
}

//propiedades definidas en la interfaz
export interface IconDropdownProps {
	options?: optionsType[];
	onClick?: onClickType;
	icon?: string | any;
	className?: string;
	legend?: string;
	title?: string;
	style?: CSSProperties;
	iconStyles?: CSSProperties;
	svg?: any;
	modo: Modo;
}

//Componente funcional que permite mapear los menús y submenús, regresando ela estructura que necesita la librería de comportamiento
// const Menus = ({ menus }: any, modo: Modo) => {
const Menus = (props: any) => {
	const { menus, modo } = props;
	const menusMapping = menus.map((menu: optionsType) => {
		//Si no existe la propiedad de submenu dentro de menu sólo regresará un item del Dropdown con sus propiedades para definir
		if (!menu.submenus) {
			console.log('Recibiendo datos de menu: ', menu);
			return (
				<DropdownMenu.Item
					className={`ttlMenus${modo}_IcnDrpC`}
					onClick={menu.onClick}
					id={menu.id}
					onChange={(e) => console.log(e)}
				>
					{menu.title}
				</DropdownMenu.Item>
			);
		}

		//Si existe la propiedad de submenu dentro del menú regresará la estructura de un submenú con sus respectivas propiedades para que se definan más adelante
		if (menu.submenus) {
			return (
				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger className={`ttlMenus${modo}_IcnDrpC`}>
						{menu.title}
					</DropdownMenu.SubTrigger>
					<DropdownMenu.Portal>
						<DropdownMenu.SubContent
							className={`sbMenuCtn${modo}_IcnDrpC ${menu.className}`}
							style={{ cursor: 'pointer' }}
						>
							{menu.submenus.map((submenu) => {
								console.log('Recibiendo datos de submenus: ', menu);
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

//Componente funcional que se utilizará para generar el DropdownMenu
const IconDropdown = (props: IconDropdownProps) => {
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
	const {
		options = optionsInitialValue,
		icon,
		iconStyles,
		style,
		legend,
		onClick,
		className,
		title,
		svg,
		modo = 'Light',
	} = props;
	return (
		<div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<button style={iconStyles} className={`trggr${modo}_IcnDrpC`} title={title}>
						{icon && <img src={icon} alt={icon} />}
						{svg && svg}
						{legend && !icon && legend}
						{!legend && !icon && !svg && 'ICON'}
					</button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content
						onClick={onClick}
						// className={`SubmenuContainer${''} ${className}`}
						className={`sbCtn${modo}_IcnDrpC ${className}`}
						style={{ cursor: 'pointer', ...style }}
					>
						<Menus menus={options as optionsType} modo={modo} />
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</div>
	);
};

export default IconDropdown;

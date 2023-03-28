import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import '../../styles.scss';
import css from './iconDropdown.module.scss';

//definición de los types que se usarán dentro de la interfaz
interface submenusArray {
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	id?: string | number;
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
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	icon?: string | any;
	className?: string;
	legend?: string;
	title?: string;
	style?: {};
	iconStyles?: {};
}

//Componente funcional que permite mapear los menús y submenús, regresando ela estructura que necesita la librería de comportamiento
const Menus = ({ menus }: any) => {
	const menusMapping = menus.map((menu: optionsType) => {
		//Si no existe la propiedad de submenu dentro de menu sólo regresará un item del Dropdown con sus propiedades para definir
		if (!menu.submenus) {
			return (
				<DropdownMenu.Item className="MenusTitles" onClick={menu.onClick} id={menu.id}>
					{menu.title}
				</DropdownMenu.Item>
			);
		}

		//Si existe la propiedad de submenu dentro del menú regresará la estructura de un submenú con sus respectivas propiedades para que se definan más adelante
		if (menu.submenus) {
			return (
				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger className="MenusTitles">
						{menu.title}
					</DropdownMenu.SubTrigger>
					<DropdownMenu.Portal>
						<DropdownMenu.SubContent
							className={`SubmenuContainer ${menu.className}`}
							style={{ cursor: 'pointer' }}
						>
							{menu.submenus.map((submenu) => (
								<DropdownMenu.Item
									className="MenusTitles"
									onClick={(e) => {
										if (submenu.onClick) {
											submenu.onClick(e);
										}
									}}
								>
									{submenu.title}
								</DropdownMenu.Item>
							))}
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
	} = props;
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<button
					style={{
						background: 'none',
						border: 'none',
						fontSize: '1.2rem',
						cursor: 'pointer',
						...iconStyles,
					}}
					title={title}
				>
					{icon && <img src={icon} alt={icon} style={{ height: '2.5rem' }} />}
					{legend && !icon && legend}
					{!legend && !icon && 'ICON'}
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					onClick={onClick}
					className={`SubmenuContainer ${className}`}
					style={{ cursor: 'pointer', ...style }}
				>
					<Menus menus={options} />
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};

export default IconDropdown;

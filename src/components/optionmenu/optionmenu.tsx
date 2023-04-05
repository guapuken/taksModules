import React, { useState } from 'react';
import { MenusSc, MenusCc } from './files';
import './optionmenu.scss';

interface menusOptionsTypes {
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	href?: string;
}
interface conCategoriaTypes {
	title?: string;
	menus?: menusOptionsTypes[];
}
interface menusTypes {
	conCategoria?: conCategoriaTypes[];
	sinCategoria?: menusOptionsTypes[];
}
export interface OptionMenuProps {
	menus?: menusTypes;
}

const OptionMenu = (props: OptionMenuProps) => {
	const { menus } = props;

	const MenuConCategoria = (menus: any) => {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<>
				<div className={`ContainerMenuComponent${isOpen ? 'Open' : ''}`}>
					<nav className={'navOpenCloseMenuComponent'}>
						<a
							onClick={() => setIsOpen(!isOpen)}
							className={'buttonOpenCloseMenuComponent'}
						>
							<div
								className={`${
									isOpen ? 'openMenuComponent' : ''
								} iconOpenCloseMenuComponent`}
							></div>
						</a>
					</nav>
					<div
						className={'contenedorMenusMenuComponent'}
						style={{ display: isOpen ? 'block' : 'none' }}
					>
						<div
							className="contenedorMenusMenuComponent"
							style={{ display: isOpen ? 'block' : 'none' }}
						>
							<MenusCc menus={menus} />
							<MenusSc menus={menus} />
						</div>
					</div>
				</div>
			</>
		);
	};
	return <MenuConCategoria menus={menus} />;
};

export default OptionMenu;

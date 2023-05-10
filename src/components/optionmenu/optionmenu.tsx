import React, { useState } from 'react';
import { MenusSc, MenusCc } from './files';
import './optionmenu.scss';
import { Modo } from '../../types';

interface menusOptionsTypes {
	id: string;
	title: string;
	onClick: (e: React.MouseEvent<HTMLElement>) => void;
	href?: string;
}
interface conCategoriaTypes {
	id: string;
	title: string;
	menus?: menusOptionsTypes[];
}
interface menusTypes {
	conCategoria?: conCategoriaTypes[];
	sinCategoria?: menusOptionsTypes[];
}
export interface OptionMenuProps {
	menus: menusTypes;
	modo: Modo;
}

const OptionMenu = (props: OptionMenuProps) => {
	const { menus, modo = 'Light' } = props;
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={`ctn${isOpen ? 'Open' : ''}${modo}_MenuC`}>
			<a onClick={() => setIsOpen(!isOpen)} className={'btnOpnCls'}>
				<div className="IcnClsMenu"></div>
			</a>
			<div className={`menus`}>
				<div className="centerElement">
					<div>
						<MenusSc menus={menus} />
						<MenusCc menus={menus} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default OptionMenu;

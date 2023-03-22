import React, { useState } from 'react';
import { onClickType } from '../../utils/types/typesUtils';
import '../../styles.scss';
import './optionmenu.scss';

type menusOptionsTypes = {
	title?: string;
	onClick?: onClickType;
};
type conCategoriaTypes = {
	title?: string;
	menus?: menusOptionsTypes[];
};
type menusTypes = {
	conCategoria?: conCategoriaTypes[];
	sinCategoria?: menusOptionsTypes[];
};
export interface OptionmenuProps {
	menus?: menusTypes[];
	width?: string;
	height?: string;
}

const Optionmenu = (props: OptionmenuProps) => {
	const { menus } = props;

	function menusSC(props: any) {
		return props.menus?.map((e: any) => {
			let conCategoria = e.conCategoria?.map((categoria: any) => {
				return (
					<div className="menusContainerMenuComponent">
						<h2>{categoria.title}</h2>
						<ul>
							{categoria.menus?.map((menu: any) => {
								return (
									<li onClick={menu.onClick}>
										<button>{menu.title}</button>
									</li>
								);
							})}
						</ul>
					</div>
				);
			});
			return props.menus ? conCategoria : <></>;
		});
	}
	function menusCC(props: any) {
		return props.menus?.map((e: any) => {
			let sinCategoria = e.sinCategoria?.map((sinCategoria: any) => {
				return (
					<div className="menusContainerMenuComponent">
						<h2 onClick={sinCategoria.onClick}>{sinCategoria.title}</h2>
					</div>
				);
			});
			return props.menus ? sinCategoria : <></>;
		});
	}

	const MenuConCategoria = (menus: any) => {
		const [isOpen, setIsOpen] = useState(false);
		return (
			<>
				<div className={`ContainerMenuComponent${isOpen ? 'Open' : ''}`}>
					<nav className="navOpenCloseMenuComponent">
						<a
							onClick={() => setIsOpen(!isOpen)}
							className="buttonOpenCloseMenuComponent"
						>
							<div
								className={`${
									isOpen ? 'openMenuComponent' : ''
								} iconOpenCloseMenuComponent`}
							></div>
						</a>
					</nav>
					<div
						className="contenedorMenusMenuComponent"
						style={{ display: isOpen ? 'block' : 'none' }}
					>
						{menusCC(menus)}
						{menusSC(menus)}
					</div>
				</div>
			</>
		);
	};
	return <MenuConCategoria menus={menus} />;
};

export default Optionmenu;

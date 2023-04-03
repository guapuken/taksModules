import React, { useState } from 'react';
import '../../global.scss';
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

function menusSC(props: any) {
	return props.menus ? (
		props.menus.conCategoria?.map((categoria: conCategoriaTypes) => (
			<div className="menusContainerMenuComponent">
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '35%',
					}}
				>
					<h2
						style={{
							fontSize: '1.6rem',
							color: '#dedede',
							userSelect: 'none',
							fontWeight: 'lighter',
						}}
					>
						{categoria.title}
					</h2>
					{/* <Button legend="Crear nueva" size="small" primary /> */}
				</div>
				<ul>
					{categoria.menus?.map((menu: any) => {
						return (
							<li onClick={menu.onClick}>
								<a
									style={{
										fontSize: '1.6rem',
										fontWeight: 'normal',
										userSelect: 'none',
										marginLeft: '1rem',
									}}
									href={menu.href}
								>
									{menu.title}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		))
	) : (
		<></>
	);
}
function menusCC(props: any) {
	return props.menus ? (
		props.menus.sinCategoria?.map((sinCategoria: menusOptionsTypes) => (
			<div className="menusContainerMenuComponent">
				<ul>
					<li>
						<a href={sinCategoria.href} onClick={sinCategoria.onClick}>
							{sinCategoria.title}
						</a>
					</li>
				</ul>
			</div>
		))
	) : (
		<></>
	);
}

const OptionMenu = (props: OptionMenuProps) => {
	const { menus } = props;

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
						style={{
							display: 'grid',
							placeItems: 'center',
							height: '100%',
							width: '100%',
						}}
					>
						<div
							className="contenedorMenusMenuComponent"
							style={{ display: isOpen ? 'block' : 'none' }}
						>
							{menusCC(menus)}
							{menusSC(menus)}
						</div>
					</div>
				</div>
			</>
		);
	};
	return <MenuConCategoria menus={menus} />;
};

export default OptionMenu;

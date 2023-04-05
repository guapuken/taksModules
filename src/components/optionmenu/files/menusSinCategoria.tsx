import React from 'react';
import '../optionmenu.scss';
const MenusSc = (props: any) => {
	const { menus } = props;
	return menus ? (
		menus.sinCategoria?.map((sinCategoria: any) => (
			<div className={'menusContainerMenuComponent'}>
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
};
export default MenusSc;

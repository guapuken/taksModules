import React from 'react';

export default function MenusCc(props: any) {
	return props.menus ? (
		props.menus.conCategoria?.map((categoria: any) => (
			<div className={'menuCtn'}>
				<h2>{categoria.title}</h2>
				<ul>
					{categoria.menus?.map((menu: any) => {
						return (
							<li onClick={menu.onClick}>
								<a href={menu.href}>{menu.title}</a>
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

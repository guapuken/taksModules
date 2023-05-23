import React from 'react';

export default function MenusCc(props: any) {
	return props.menus ? (
		props.menus.conCategoria?.map((categoria: any) => {
			return (
				<div className={'menuCtn'} key={categoria.id}>
					<h2>{categoria.title}</h2>
					<ul>
						{categoria.menus?.map((menu: any) => {
							return (
								<li
									onClick={(e) => {
										props.setIsOpen(false);
										if (menu.onClick) menu.onClick(e);
									}}
									key={menu.id}
								>
									<a href={menu.href}>{menu.title}</a>
								</li>
							);
						})}
					</ul>
				</div>
			);
		})
	) : (
		<></>
	);
}

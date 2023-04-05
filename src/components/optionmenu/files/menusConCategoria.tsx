import React from 'react';

const MenusCc = (props: any) => {
	return props.menus ? (
		props.menus.conCategoria?.map((categoria: any) => (
			<div className={'menusContainerMenuComponent'}>
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
							fontSize: '16px',
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
										fontSize: '16px',
										fontWeight: 'normal',
										userSelect: 'none',
										marginLeft: '10px',
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
};
export default MenusCc;

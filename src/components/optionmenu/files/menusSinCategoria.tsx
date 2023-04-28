import React from 'react';
import '../optionmenu.scss';

export default function MenusSc(props: any) {
	const { menus } = props;
	return (
		menus &&
		menus.sinCategoria?.map((sinCategoria: any) => (
			<div className="menuCtn" key={sinCategoria.id}>
				<ul>
					<li>
						<a href={sinCategoria.href} onClick={sinCategoria.onClick}>
							{sinCategoria.title}
						</a>
					</li>
				</ul>
			</div>
		))
	);
}

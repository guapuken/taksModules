import React from 'react';
import '../optionmenu.scss';

export default function MenusSc(props: any) {
	const { menus, setIsOpen } = props;
	return (
		menus &&
		menus.sinCategoria?.map((sinCategoria: any) => {
			if (sinCategoria === null) {
				return null;
			} else {
				return (
					<div className="menuCtn" key={sinCategoria.id}>
						<ul>
							<li>
								<a
									href={sinCategoria.href}
									onClick={(e) => {
										setIsOpen(false);
										if (sinCategoria.onClick) {
											sinCategoria.onClick(e);
										}
									}}
								>
									{sinCategoria.title}
								</a>
							</li>
						</ul>
					</div>
				);
			}
		})
	);
}

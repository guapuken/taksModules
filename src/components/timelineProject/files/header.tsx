import React from 'react';
// componentes auxiliares
import { Spans } from '../../../utils/cardsUtils';
// types
import { header } from '../types';
// archivos multimedia
import logo from '../../../img/ByImjSimple.svg';
import logoDark from '../../../img/ByImjSimpleDark.svg';

const Header = (props: header) => {
	const { modo } = props;
	return (
		<div className="ctnHeader">
			<div>
				<h2 className="projectName">UBER EATS-2536-ESP-NOV</h2>
				<Spans boldLegend={'Ejecutivo: '} legend={'Juan Almada'} />
			</div>
			<img src={modo === 'Dark' ? logoDark : logo} alt="" />
		</div>
	);
};

export default Header;

import React from 'react';
import Header from './Helpers/Header';
import Contenido from './Helpers/Contenido';
import Aside from './Helpers/Aside';
import Footer from './Helpers/Footer';

const Container = ({ children, ...props }) => {
	return (
		<div
			{...props}
			style={{
				width: props?.width ?? '100%',
				height: props?.height ?? '100%',
				display: 'flex',
				flexWrap: 'wrap',
				...props?.style,
			}}
		>
			{children}
		</div>
	);
};

Container.Aside = Aside;
Container.Contenido = Contenido;
Container.Footer = Footer;

export default Container;

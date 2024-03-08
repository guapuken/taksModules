import React from 'react';
import Aside from './Helpers/Aside';
import Contenido from './Helpers/Contenido';
import Footer from './Helpers/Footer';
import Header from './Helpers/Header';

const Container = ({ children, ...props }: any) => {
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

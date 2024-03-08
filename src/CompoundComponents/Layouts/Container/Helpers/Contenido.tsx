import React from 'react';
import Textos from '../../../Atoms/Textos/Textos';
import Footer from './Footer';

const Contenido = ({ children, ...props }: any) => {
	return (
		<div {...props} >
			{children}
		</div>
	);
};

const Aside = ({ children, ...props }: any) => (
	<div {...props} >
		{children}
	</div>
);

const Title = ({ children, ...props }: any) => (
	<Textos>
		<Textos.Title {...props} tipo="h4">
			{children}
		</Textos.Title>
	</Textos>
);

const Header = ({ children, ...props }: any) => (
	<div {...props} style={{ display: 'flex', alignItems: 'center', gap: '15px', ...props.style }}>
		{children}
	</div>
);

Header.Title = Title;
Contenido.Header = Header;
Contenido.Aside = Aside;
Contenido.Footer = Footer;

export default Contenido;

import React from 'react';
import Textos from '../../../Atoms/Textos/Textos';

const Contenido = ({ children, ...props }) => {
	return (
		<div
			{...props}
			style={{
				width: props?.width ?? '100%',
				maxWidth: props?.width ?? '100%',
				height: props?.height ?? '100%',
				maxHeight: props?.height ?? '100%',
				overflowY: 'auto',
				overflowX: 'hidden',
				...props?.style,
			}}
		>
			{children}
		</div>
	);
};

const Aside = ({ children, ...props }) => (
	<div
		{...props}
		style={{
			width: props?.width ?? '25%',
			height: props?.height ?? '100%',
			...props?.style,
		}}
	>
		{children}
	</div>
);

const Title = ({ children, ...props }) => (
	<Textos>
		<Textos.Title {...props} tipo="h4">
			{children}
		</Textos.Title>
	</Textos>
);

const Header = ({ children, ...props }) => (
	<div {...props} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
		{children}
	</div>
);

Header.Title = Title;
Contenido.Header = Header;
Contenido.Aside = Aside;

export default Contenido;

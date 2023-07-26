import React from 'react';
import { storiesOf } from '@storybook/react';
import CardSitios from '../sitios/cardSitios';

storiesOf('Cards / OBP / sitios', module).add('sitios', () => {
	return (
		<div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
			<CardSitios
				comentarios={
					'Vista general libre con una medida de 3.5 metros a lo largo y 2 metros a lo alto generando una vista espectacular de los medios exhibidos'
				}
				activo
				altura={12}
				base={7.5}
				bloqueado
				claveproveedor={'WestMedia-2546'}
				direccion={'Av. Mariano Otero #2560'}
				especiales={false}
				estadoBtn={false}
				iluminacion={false}
				latitud={'15.623586'}
				longitud={'-99.1542630'}
				material={'Lona front'}
				modo={'Dark'}
				onCarritoClick={() => {}}
				onClickEditar={() => {}}
				onClickEstado={() => {}}
				onClickPdf={() => {}}
				proveedor={'WestMedia'}
				ubicacion={'CDMX'}
				vista={'Natural'}
				tipos={'Espectaculares'}
				claveimj="IMJ-CDMX-ESP-O-1526"
				imagen1={'https://img.gruporeforma.com/imagenes/960x640/6/365/5364652.jpg'}
			/>
			<CardSitios
				activo
				altura={12}
				base={7.5}
				bloqueado={false}
				claveproveedor={'WestMedia-2546'}
				direccion={'Av. Mariano Otero #2560'}
				especiales={false}
				estadoBtn={false}
				iluminacion
				latitud={'15.623586'}
				longitud={'-99.1542630'}
				material={'Lona front'}
				modo={'Dark'}
				onCarritoClick={() => {}}
				onClickEditar={() => {}}
				onClickEstado={() => {}}
				onClickPdf={() => {}}
				proveedor={'WestMedia'}
				ubicacion={'CDMX'}
				vista={'Cruzada'}
				tipos={'Muros'}
				claveimj="IMJ-CDMX-MUR-O-845B"
				imagen1={
					'https://xomedia.mx/wp-content/uploads/2020/09/adb94d14-c8fd-4eff-890c-37578d8f6f4d.jpg'
				}
			/>
			<CardSitios
				activo
				altura={12}
				base={7.5}
				bloqueado
				claveproveedor={'WestMedia-2546'}
				direccion={'Av. Mariano Otero #2560'}
				especiales={false}
				estadoBtn={false}
				iluminacion={false}
				latitud={'15.623586'}
				longitud={'-99.1542630'}
				material={'Lona front'}
				modo={'Dark'}
				onCarritoClick={() => {}}
				onClickEditar={() => {}}
				onClickEstado={() => {}}
				onClickPdf={() => {}}
				proveedor={'WestMedia'}
				ubicacion={'CDMX'}
				vista={'Natural'}
				tipos={'Muros'}
				claveimj="IMJ-CDMX-MUR-O-1426"
				imagen1={'https://www.marketingdirecto.com/wp-content/uploads/2014/12/31.jpg'}
			/>
			<CardSitios
				activo={false}
				altura={12}
				base={7.5}
				bloqueado
				claveproveedor={'WestMedia-2546'}
				direccion={'Av. Mariano Otero #2560'}
				especiales={false}
				estadoBtn
				iluminacion={false}
				latitud={'15.623586'}
				longitud={'-99.1542630'}
				material={'Lona front'}
				modo={'Dark'}
				onCarritoClick={() => {}}
				onClickEditar={() => {}}
				onClickEstado={() => {}}
				onClickPdf={() => {}}
				proveedor={'WestMedia'}
				ubicacion={'CDMX'}
				vista={'Natural'}
				tipos={'Muros'}
				claveimj="IMJ-CDMX-MUR-O-4526"
				imagen1={
					'https://imjmedia.com.mx/wp-content/uploads/2022/12/Home_Photo6_Medios_Muros-1.jpg'
				}
			/>
		</div>
	);
});

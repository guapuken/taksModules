import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import CardSitios from '../sitios/cardSitios';

storiesOf('Cards / OBP / sitios', module).add('sitios', () => {
	const [added, setAdded] = useState(false);
	return (
		<div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
				modo={'Light'}
				addedToCar={added}
				onCarritoClick={() => setAdded(!added)}
				onClickEditar={() => {}}
				onClickEstado={() => {}}
				onClickPdf={() => {}}
				proveedor={'WestMedia'}
				ubicacion={'CDMX'}
				vista={'Natural'}
				tipos={'Espectaculares'}
				claveimj="IMJ-CDMX-ESP-O-1526"
				precioventa="$150,000.00"
				costo="$57,000.00"
				income_a_users={15}
				income_b_users={11}
				income_c_users={14}
				income_d_users={52}
				income_e_users={8}
				a13_17_users={null}
				a18_25_users={null}
				a26_40_users={null}
				a41_55_users={null}
				a55_users={null}
				percent_female_users={62}
				percent_male_users={38}
				female_users={310808}
				male_users={324418}
				frequency={2.68}
				reach={18.41}
				total_hits={1704223}
				total_users={635226}
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

import React from 'react';
//importacióon de elementos del storybook auxiliares
import { Meta, Story } from '@storybook/react';
//importación de componente principal
import Cards from './cards';
import { cardIntrfc } from './types';

//importación de componentes auxiliares
import { AsideContainer, ButtonsArray } from '../../utils/asideUtils';

//importación de archivos multimedia auxiliares
import del from '../../img/vaciar.svg';
import prev from '../../img/previsualizar.svg';

//creación de la plantilla en la que se colocarán los elementos
const Template: Story<cardIntrfc> = (args) => <Cards {...args} />;

// estado inicial del componente
export const initialState = Template.bind({});
initialState.args = {
	modo: 'Dark',
};

// estado del componente con propiedades
export const withProperties = Template.bind({});
withProperties.args = {
	rounded: true,
	modo: 'Dark',
	Content: () => {
		return (
			<div
				className="hola"
				style={{
					display: 'grid',
					placeItems: 'center',
					height: '100%',
					padding: '15px',
					margin: '0 auto',
				}}
			>
				<div>
					<h3>Traffic</h3>
					<p>5 Integrantes...</p>
				</div>
				<div
					style={{
						background: 'green',
						height: '100%',
						width: '30px',
						position: 'absolute',
						top: '0',
						right: '0',
						// borderRadius: '0 20px 20px 0',
					}}
				></div>
			</div>
		);
	},
	Aside: () => {
		return (
			<AsideContainer>
				<ButtonsArray
					modo="Dark"
					buttons={[
						{
							id: '1',
							img: del,
							onClick: () => alert('eliminar'),
							titleToShow: 'Eliminar',
						},
						{
							id: '2',
							img: prev,
							onClick: () => alert('previsualizar'),
							titleToShow: 'Previsualizar',
						},
					]}
					vertical
				/>
			</AsideContainer>
		);
	},
};

//exportación de valores default
export default {
	//nombre de la carpeta en la que agrupará / nombre del compponente que se mostrará
	title: 'Cards/generica',
	component: Cards,
	//definición de argumentos
	argTypes: {
		height: {
			control: 'number',
		},
		width: {
			control: 'number',
		},
		rounded: {
			control: 'boolean',
		},
		modo: {
			control: {
				type: 'select',
				options: ['Dark', 'Light'],
			},
		},
		Content: {
			type: 'function',
		},
		Aside: {
			type: 'function',
		},
	},
} as Meta;

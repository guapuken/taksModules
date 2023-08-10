// import React from 'react';
// // utilidaes del storybook
// import { Meta, Story } from '@storybook/react';
// // componente principal
// import { Button } from '../../components';
// // types
// import { button } from '../../components/button/types/types';
// // storybook utils
// import {
// 	boolean,
// 	color,
// 	filesNoBG,
// 	functions,
// 	modo,
// 	object,
// 	sizeBtns,
// 	text,
// } from '../../storyUtils';

// // creación de la plantilla en la que se colocará el componente
// const Template: Story<button> = (args) => <Button {...args} />;

// export const InitialState = Template.bind({});
// InitialState.args = {
// 	onCl: () => alert('Change the function'),
// };
// export const Primary = Template.bind({});
// Primary.args = {
// 	onCl: () => alert('Change the function'),
// 	primary: true,
// 	legend: 'Botón primario',
// 	size: 'large',
// 	rounded: false,
// 	icon: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png',
// };
// export const Secondary = Template.bind({});
// Secondary.args = {
// 	onCl: () => alert('Change the function'),
// 	secondary: true,
// 	legend: 'Botón secundario',
// 	icon: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png',
// };
// export const Tertiary = Template.bind({});
// Tertiary.args = {
// 	onCl: () => alert('Change the function'),
// 	tertiary: true,
// 	legend: 'Botón terciario',
// 	// icon: 'https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png',
// };

// export default {
// 	//nombre de la carpeta en la que se agrupará y el título del elemento
// 	title: 'Button',
// 	component: Button,
// 	//Definición de argumentos
// 	argTypes: {
// 		onCl: functions(),
// 		size: sizeBtns(),

// 		style: object(),
// 		styleIcon: object(),

// 		legend: text(),
// 		color: color(),
// 		id: text(),
// 		key: text(),
// 		icon: filesNoBG(),
// 		colorHover: color(),
// 		fontColor: color(),
// 		className: text(),

// 		primary: boolean(),
// 		secondary: boolean(),
// 		tertiary: boolean(),
// 		rounded: boolean(),
// 		disabled: boolean(),
// 		border: boolean(),
// 		float: boolean(),
// 		modo: modo(),
// 	},
// } as Meta;
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	boolean,
	color,
	filesNoBG,
	functions,
	modo,
	object,
	sizeBtns,
	text,
} from '../../storyUtils';

import { Button } from '../../components';
import { useState } from 'react';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	name: 'Botón primario',
	render: () => <Button modo="Light" onCl={() => alert('Has hecho clic')} primary />,
};

// Cuando se quieren hacer
const ButtonWithHooks = () => {
	const [styleButton, setStyleButton] = useState({
		primary: true,
		secondary: false,
	});
	const [legend, setLegend] = useState('Presiona');
	return (
		<Button
			primary={styleButton.primary}
			secondary={styleButton.secondary}
			modo="Light"
			onCl={() => {
				setStyleButton({
					primary: !styleButton.primary,
					secondary: !styleButton.secondary,
				});
				setLegend(
					legend === 'Presiona'
						? 'Puto el que presionó'
						: 'Lo volví a presionar porque me gustá la ver....'
				);
			}}
			legend={legend}
		/>
	);
};

export const ChangeStateWithButton: Story = {
	name: 'Cambio de estilo',
	render: () => <ButtonWithHooks />,
};

export const border: Story = {
	render: () => <Button modo="Light" onCl={() => {}} border color="#f1e323" />,
};

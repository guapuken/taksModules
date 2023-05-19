import React from 'react';
// utilidades del storybook
import { Meta, Story } from '@storybook/react';
import { boolean, functions, modo, object, text } from '../../../storyUtils';
// componente principal
import AsideTemplates from '../asideTemplates';
// types del componente principal
import { aside } from '../types/types';

// creación de plantilla donde se colocará el componente
const Template: Story<aside> = (args) => <AsideTemplates {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {};

//exportación de valores default
export default {
	//nombre de la carpeta en la que se agrupará / nombre del componente
	title: 'Átomos/aside',
	component: AsideTemplates,
	//definición de argumentos
	argTypes: {
		modo: modo(),
		visible: boolean(),
		imageNoTasks: text(),
		priText: text(),
		secText: text(),
		tasks: object(),
		legendBtn: text(),
		idSection: text(),
		onCl_btn: functions(),
		onCh_dropdown: functions(),
		initialValueDropdown: object(),
		optionsDropdown: object(),
		placeholderDropdown: text(),
	},
} as Meta;

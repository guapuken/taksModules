import { Meta, Story } from '@storybook/react';
import React from 'react';
import Cards from '../cards';
import IconDropdown from '../iconDropdown';
import NotificationBell, { NotificationBellProps } from './notificationBell';

const Template: Story<NotificationBellProps> = (args) => <NotificationBell {...args} />;

export const Initial = Template.bind({});
Initial.args = {};
export const Basic = Template.bind({});
Basic.args = {
	notifications: [
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
	],
};

export default {
	title: 'NotificationBell',
	component: NotificationBell,
} as Meta;

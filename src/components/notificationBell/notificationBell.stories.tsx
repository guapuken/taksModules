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
			id: '1',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '2',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '3',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '4',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '5',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '6',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '7',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '8',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '9',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '10',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '11',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '12',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
		{
			id: '13',
			title: 'Se actualizó OBP a la versión 2.0.3 puedes visualizar los cambios',
			onClick: () => alert('visualizar'),
		},
	],
};

export default {
	title: 'NotificationBell',
	component: NotificationBell,
} as Meta;

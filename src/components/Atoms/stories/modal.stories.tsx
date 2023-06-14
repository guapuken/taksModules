import React from 'react';
//importación de elementos de storybook a utilizar
import { Meta, Story } from '@storybook/react';
import { functions, modo, object, text } from '../../../storyUtils';
//importación de componente principal
import Modal from '../modal/modal';
import { modalProps } from '../modal/types/types';
//importación de componentes auxiliares
import { Button, Buttons, Task } from '../..';
import bell from '../../../img/bell.svg';
import SimpleContainer from '../simpleContainer/SimpleContainer';

const Template: Story<modalProps> = (args) => <Modal {...args} />;

//estado inicial del componente
export const InitialState = Template.bind({});
InitialState.args = {
	modo: 'Light',
	themeStyle: 'box',
	header: 'Creación de tareas',
	Footer: (
		<SimpleContainer
			style={{
				minWidth: '100%',
				minHeight: '100%',
				display: 'grid',
				placeItems: 'center',
				// background: 'green',
			}}
		>
			<Button modo="Light" onCl={{} as any} float primary icon={bell} rounded />
		</SimpleContainer>
	),
	Content: (
		<div>
			<Task
				check={false}
				onCh_checkbox={{} as any}
				onCh_descriptionTask={{} as any}
				onCh_endDate={{} as any}
				onCh_nameTask={{} as any}
				onCh_startDate={{} as any}
				idTask="12"
				templateOptions={[]}
				idCheckbox="12"
				principalTask={true}
				taskComplete={false}
				isSubtask
				valueTask="Bloqueos sitios IMJ-CDMX-ESP-O-576"
				valueDescription="Bloquear con los porveedores los sitios de la campaña de uber"
				onCh_duration={() => alert('change días')}
				plantillas={true}
				responsables={[{ title: 'Olaf', id: 'Olaf' }]}
				equipos={[{ title: 'TI', id: 'TI' }]}
				revision={[{ title: 'Jorge', id: 'Jorge' }]}
				valueResponsable={'Olaf Ruvalcaba'}
				valueRevision={'Jorge Correa'}
				onCl_selectPriority={() => alert('change priority')}
				onCl_delete={() => alert('eliminando')}
				onCl_reminder={() => alert('Creando recordatorio')}
				onCl_addTask={() => alert('agregando Tarea')}
				subtasks={[
					{
						equipos: [],
						idTask: '1',
						onCl_newTemplate: () => {},
						responsables: [],
						revision: [],
						templateOptions: [],
						check: false,
						onCh_checkbox: {} as any,
						onCh_descriptionTask: {} as any,
						onCh_endDate: {} as any,
						onCh_nameTask: {} as any,
						onCh_startDate: {} as any,
						valueDescription: '',
						valueTask: '',
					},
				]}
			/>
		</div>
	),
};

// estado del componente con propiedades
export const WithProperties = Template.bind({});
WithProperties.args = {
	Content: () => (
		<div>
			<Task
				check={false}
				onCh_checkbox={{} as any}
				onCh_descriptionTask={{} as any}
				onCh_endDate={{} as any}
				onCh_nameTask={{} as any}
				onCh_startDate={{} as any}
				idTask="12"
				templateOptions={[]}
				idCheckbox="12"
				principalTask={true}
				taskComplete={false}
				isSubtask
				valueTask="Bloqueos sitios IMJ-CDMX-ESP-O-576"
				valueDescription="Bloquear con los porveedores los sitios de la campaña de uber"
				onCh_duration={() => alert('change días')}
				plantillas={true}
				responsables={[{ title: 'Olaf', id: 'Olaf' }]}
				equipos={[{ title: 'TI', id: 'TI' }]}
				revision={[{ title: 'Jorge', id: 'Jorge' }]}
				valueResponsable={'Olaf Ruvalcaba'}
				valueRevision={'Jorge Correa'}
				onCl_selectPriority={() => alert('change priority')}
				onCl_delete={() => alert('eliminando')}
				onCl_reminder={() => alert('Creando recordatorio')}
				onCl_addTask={() => alert('agregando Tarea')}
				subtasks={[
					{
						equipos: [],
						idTask: '1',
						onCl_newTemplate: () => {},
						responsables: [],
						revision: [],
						templateOptions: [],
						check: false,
						onCh_checkbox: {} as any,
						onCh_descriptionTask: {} as any,
						onCh_endDate: {} as any,
						onCh_nameTask: {} as any,
						onCh_startDate: {} as any,
						valueDescription: '',
						valueTask: '',
					},
				]}
			/>
		</div>
	),
	header: 'Tareas',
	Footer: () => (
		<Buttons
			modo="Light"
			onCl_buttons={{} as any}
			buttons={{ primary: true, secondary: true }}
			legends={{
				primary: 'Crear Tarea',
				secondary: 'Cancelar creación',
			}}
			styleComposition={{ maxWidth: '90%', margin: '0 auto 0 20px' }}
			composition="vertical"
		/>
	),
	modo: '',
};

// exportación de valores default
export default {
	//nombre de la carpeta en la que agrupará eel componente y su nombre
	title: 'Modales/modal',
	// definición de argumentos
	component: Modal,
	argTypes: {
		title: text(),
		Footer: functions(),
		Content: functions(),
		style: object(),
		styleHeader: object(),
		styleContent: object(),
		styleFooter: object(),
		modo: modo(),
	},
} as Meta;

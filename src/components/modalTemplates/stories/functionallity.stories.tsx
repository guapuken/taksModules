import React, { useState } from 'react';
// utilidades del storybook
import { storiesOf } from '@storybook/react';
// componentes principales
import ModalTemplates from '..';
import { autoIncrementalId } from '../../../utils/functions/functions';
import { equipos, responsables, revision, templateOptions } from '../data/exampleData';

function DemoComponent() {
	const [template, setTemplate] = useState(undefined);
	console.table({
		template: template,
	});
	return (
		<ModalTemplates
			onCl_close={() => {}}
			idTemplate="1"
			modo="Light"
			isMannager
			onCh_checkboxMedio={() => {}}
			onCh_dropDownTipoMedio={() => {}}
			onCh_templateName={(e) => setTemplate(e.target.value)}
			onCl_abort={() => {}}
			onCl_addTask={() => {}}
			onCl_confirm={() => {}}
			optionsTipoMedio={[
				{ id: String(autoIncrementalId()), title: 'Urbanos' },
				{ id: String(autoIncrementalId()), title: 'Espectaculares' },
				{ id: String(autoIncrementalId()), title: 'Muros' },
				{ id: String(autoIncrementalId()), title: 'Vallas móviles' },
			]}
			onCh_checkboxCampaign={() => {} /* setCampaign(!campaign) */}
			tasks={[
				{
					idTask: String(autoIncrementalId()),
					valueTask: 'Bloqueos',
					valueDescription: 'Realizar los bloqueos de los siguientes sitios',
					modo: 'Light',
					onCh_descriptionTask: (e) => console.log(e.target.value),
					onCh_nameTask: (e) => console.log(e.target.value),
					onCl_addTask: () => {},
					onCh_duration: (e) => console.log(e.target.value),
					onCl_delete: () => {},
					equipos: equipos,
					templateOptions: templateOptions,
					onCl_newTemplate: () => {},
					responsables: responsables,
					revision: revision,
					subtasks: [
						{
							onCh_descriptionTask: () => {},
							onCh_nameTask: () => {},
							onCl_addTask: () => {},
							onCl_delete: () => {},
							valueDescription: '',
							valueResponsable: '',
							valueTask: '',
							modo: 'Light',
							idTask: String(autoIncrementalId()),
							equipos: equipos,
							onCl_newTemplate: () => {},
							responsables: responsables,
							revision: revision,
							templateOptions: templateOptions,
						},
						{
							idTask: String(autoIncrementalId()),
							equipos: equipos,
							onCl_newTemplate: () => {},
							responsables: responsables,
							revision: revision,
							templateOptions: templateOptions,
							modo: 'Light',
							onCh_descriptionTask: (e) => console.log(e.target.value),
							onCh_nameTask: (e) => console.log(e.target.value),
							onCl_addTask: () => {},
							onCl_delete: () => {},
							valueDescription: '',
							valueResponsable: '',
							valueTask: '',
							moreOptions: [],
							subtasks: [
								{
									idTask: String(autoIncrementalId()),
									equipos: equipos,
									onCl_newTemplate: () => {},
									responsables: responsables,
									revision: revision,
									templateOptions: templateOptions,
									modo: 'Light',
									onCh_descriptionTask: (e) => console.log(e),
									onCh_nameTask: (e) => console.log(e),
									onCl_addTask: () => {},
									onCl_delete: () => {},
									valueDescription: '',
									valueResponsable: '',
									valueTask: '',
									moreOptions: [],
									onCh_duration: (e) => console.log(e.target.value),
									subtaskForbbiden: false,
								},
								{
									idTask: String(autoIncrementalId()),
									equipos: equipos,
									onCl_newTemplate: () => {},
									responsables: responsables,
									revision: revision,
									templateOptions: templateOptions,
									modo: 'Light',
									onCh_descriptionTask: (e) => console.log(e),
									onCh_nameTask: (e) => console.log(e),
									onCl_addTask: () => {},
									onCl_delete: () => {},
									valueDescription: '',
									valueResponsable: '',
									valueTask: '',
									moreOptions: [],
									onCh_duration: (e) => console.log(e.target.value),
									subtaskForbbiden: false,
								},
							],
						},
					],
				},
			]}
		/>
	);
}

// creación de stories
storiesOf('Pruebas funcionalidad/modal templates', module).add('setData', () => <DemoComponent />);

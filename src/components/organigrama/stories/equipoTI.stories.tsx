import React from 'react';
import { storiesOf } from '@storybook/react';

import Organigrama from '../Organigrama';

storiesOf('Organigrama/Examples/Organigrama', module).add('Organigrama', () => {
	return (
		<Organigrama
			memberValue={{ id: '1', title: 'José Almada' }}
			role="CEO"
			members={[
				{
					memberValue: { id: '2', title: 'Juan Almada' },
					role: 'Director comercial',
					members: [
						{
							memberValue: { id: '3', title: 'Andre Estrada' },
							role: 'Asistente',
							// lowLevel: true,
						},
						{
							memberValue: { id: '4', title: 'Ana Aburto' },
							role: 'Recepción',
							// lowLevel: true,
						},
						{
							memberValue: { id: '5', title: 'Claudia Afre' },
							role: 'SAC',
							// lowLevel: true,
						},
						{
							memberValue: { id: '6', title: 'Ramón Ruiz' },
							role: 'Gerente Comercial',
							// lowLevel: true,
							members: [
								{
									memberValue: { id: '7', title: 'Andrea Ramírez' },
									role: 'Comercial CDMX',
									lowLevel: true,
								},
								{
									memberValue: { id: '8', title: 'Francisco Olivares' },
									role: 'Comercial CDMX',
									lowLevel: true,
								},
								{
									memberValue: { id: '9', title: 'Fernando Muñoz' },
									role: 'Comercial CDMX',
									lowLevel: true,
								},
								{
									memberValue: { id: '10', title: 'Carolina Aguilera' },
									role: 'Comercial GDL',
									lowLevel: true,
								},
							],
						},
						{
							memberValue: { id: '11', title: 'Jorge Correa' },
							role: 'Gerente TI',
							// lowLevel: true,
							members: [
								{
									memberValue: { id: '12', title: 'Iván Flores' },
									role: 'Project mannager',
									lowLevel: true,
								},
								{
									memberValue: { id: '13', title: 'Olaf Ruvalcaba' },
									role: 'Fullstack',
									lowLevel: true,
									members: [
										{
											memberValue: { id: '16', title: 'Adán Moreno' },
											role: 'Desarrollador',
											lowLevel: true,
										},
										{
											memberValue: { id: '17', title: 'René Carrillo' },
											role: 'Desarrollador',
											lowLevel: true,
										},
										{
											memberValue: { id: '18', title: 'José de la Vega' },
											role: 'Desarrollador',
											lowLevel: true,
										},
									],
								},
								{
									memberValue: { id: '14', title: 'Victor Galván' },
									role: 'Diseñador Ux / Ui',
									lowLevel: true,
									members: [
										{
											memberValue: { id: '15', title: 'Denisse Hernández' },
											role: 'Fullstack',
											lowLevel: true,
										},
									],
								},
							],
						},
						{
							memberValue: { id: '19', title: 'Adrián Romero' },
							role: 'Gerente de negociación',
							// lowLevel: true,
							members: [
								{
									memberValue: { id: '20', title: 'Alondra Altamirano' },
									role: 'OBP Data',
									lowLevel: true,
								},
								{
									memberValue: { id: '21', title: 'Carlos pinto' },
									role: 'Negociador',
									lowLevel: true,
								},
								{
									memberValue: { id: '22', title: 'Daniel Corona' },
									role: 'Sitios y Vallas',
									lowLevel: true,
								},
								{
									memberValue: { id: '23', title: 'Miriam Pelayo' },
									role: 'Autobuses ZMG',
									lowLevel: true,
								},
								{
									memberValue: { id: '24', title: 'Alejandra Becerra' },
									role: 'Autobuses NAC.',
									lowLevel: true,
								},
								{
									memberValue: { id: '25', title: 'Bianca Jiménez' },
									role: 'Indoors',
									lowLevel: true,
								},
								{
									memberValue: { id: '25', title: 'Luis Jauregui' },
									role: 'Odoo Controller',
									lowLevel: true,
								},
							],
						},
					],
				},
			]}
		/>
	);
});

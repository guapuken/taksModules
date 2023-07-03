import React from 'react';
import { storiesOf } from '@storybook/react';
import CardCampaign from '../Campaigns/CardCampaign';
import { SimpleContainer } from '../../Atoms';

storiesOf('Cards/Campaigns/Examples/Uber eats', module).add('Uber eats', () => {
	return (
		<SimpleContainer style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
			<CardCampaign
				nombreProyecto="2563-Uber_Eats-Noviembre"
				porcentajeFijos={0}
				statusFijos={'onTime'}
				modo={'Light'}
			/>
			<CardCampaign
				nombreProyecto="4856-Mc_Donalds-Enero"
				porcentajeFijos={36}
				porcentajeUrbanos={100}
				statusUrbanos={'onTime'}
				statusFijos={'onTime'}
				modo={'Light'}
			/>
			<CardCampaign
				nombreProyecto="9568-Electrolit-Julio"
				porcentajeFijos={45}
				statusFijos={'delayed'}
				modo={'Light'}
			/>
			<CardCampaign
				nombreProyecto="9625-Rappy-Agosto"
				porcentajeFijos={15}
				porcentajeUrbanos={85}
				statusUrbanos={'delayed'}
				statusFijos={'outOfTime'}
				modo={'Light'}
			/>
			<CardCampaign
				nombreProyecto="9568-Electrolit-Julio"
				porcentajeFijos={45}
				statusFijos={'delayed'}
				modo={'Light'}
			/>
		</SimpleContainer>
	);
});

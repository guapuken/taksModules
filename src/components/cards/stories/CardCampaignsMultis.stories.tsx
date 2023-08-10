import { storiesOf } from '@storybook/react';
import React from 'react';
import { SimpleContainer } from '../../Atoms';
import CardCampaign from '../Campaigns/CardCampaign';

storiesOf('Cards/Campaigns/Examples/Uber eats', module).add('Uber eats', () => {
	return (
		<SimpleContainer style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
			<CardCampaign
				nombreProyecto="2563-Uber_Eats-Noviembre"
				porcentajeFijos={0}
				statusFijos={'onTime'}
				modo={'Dark'}
				campaignColor="#f1f498"
			/>
			<CardCampaign
				nombreProyecto="4856-Mc_Donalds-Enero"
				porcentajeFijos={36}
				porcentajeUrbanos={100}
				statusUrbanos={'onTime'}
				statusFijos={'onTime'}
				modo={'Dark'}
				campaignColor="#525252"
			/>
			<CardCampaign
				nombreProyecto="9568-Electrolit-Julio"
				porcentajeFijos={45}
				statusFijos={'delayed'}
				modo={'Dark'}
				campaignColor="#3EDE46"
			/>
			<CardCampaign
				nombreProyecto="9625-Rappy-Agosto"
				porcentajeFijos={15}
				porcentajeUrbanos={85}
				statusUrbanos={'delayed'}
				statusFijos={'outOfTime'}
				modo={'Dark'}
			/>
			<CardCampaign
				nombreProyecto="9568-Electrolit-Julio"
				porcentajeFijos={45}
				statusFijos={'delayed'}
				modo={'Dark'}
			/>
		</SimpleContainer>
	);
});

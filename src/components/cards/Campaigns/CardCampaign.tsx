import React from 'react';
import { CircularProgressBar } from '../../../components';
import { SimpleContainer, Texts, Title, ValidationComponent } from '../../Atoms';

//Styles
import './styles/CardCampaigns.scss';
import { cardCampaignProps } from './types/Types';

const CardCampaign = ({
	modo = 'Light',
	porcentajeFijos,
	porcentajeUrbanos,
	porcentajeIndoors,
	porcentajeVallas,
	statusFijos,
	statusUrbanos,
	statusIndoors,
	statusVallas,
	nombreProyecto = 'ProjectName',
	campaignColor,
	onCl_mostrarDetalles,
}: cardCampaignProps) => {
	function percentCampaign() {
		let total = 0;
		let dividendo = 0;
		if (porcentajeFijos !== undefined || porcentajeFijos !== null) {
			if (porcentajeFijos !== undefined) dividendo += 1;
			total += porcentajeFijos ?? 0;
		}
		if (porcentajeIndoors !== undefined || porcentajeIndoors !== null) {
			if (porcentajeIndoors !== undefined) dividendo += 1;
			total += porcentajeIndoors ?? 0;
		}
		if (porcentajeUrbanos !== undefined || porcentajeUrbanos !== null) {
			if (porcentajeUrbanos !== undefined) dividendo += 1;
			total += porcentajeUrbanos ?? 0;
		}
		if (porcentajeVallas !== undefined || porcentajeVallas !== null) {
			if (porcentajeVallas !== undefined) dividendo += 1;
			total += porcentajeVallas ?? 0;
		}
		return dividendo === 0 || total === 0 ? 0 : total / dividendo;
	}

	return (
		<SimpleContainer
			labels={{
				className: `cardCampaign`,
				'theme-config': modo,
				onClick: onCl_mostrarDetalles,
			}}
		>
			<SimpleContainer className="cardCampaign__header">
				<Title modo={modo}>{nombreProyecto}</Title>
				<SimpleContainer className="cardCampaign__header-percent">
					<CircularProgressBar
						percentTask={percentCampaign()}
						statusTask={'onTime'}
						strokeColor={
							statusFijos === 'outOfTime' ||
							statusUrbanos === 'outOfTime' ||
							statusIndoors === 'outOfTime' ||
							statusVallas === 'outOfTime'
								? 'red'
								: ''
						}
						size={50}
					/>
					<Texts modo={modo} className="cardCampaign__header-percent-text">
						{`${Math.floor(percentCampaign())}%`}
					</Texts>
				</SimpleContainer>
			</SimpleContainer>
			<ValidationComponent validate={campaignColor}>
				<SimpleContainer
					style={{
						borderBottom: campaignColor ? `4px solid ${campaignColor}` : '',
						maxWidth: '40%',
					}}
					children={null}
				/>
			</ValidationComponent>
			<SimpleContainer className="cardCampaign__contenido">
				{porcentajeFijos !== undefined && (
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeFijos as any}
								statusTask={statusFijos ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeFijos ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Fijos</Texts>
					</SimpleContainer>
				)}
				{porcentajeUrbanos !== undefined && (
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeUrbanos ?? 0}
								statusTask={statusUrbanos ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeUrbanos ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Urbanos</Texts>
					</SimpleContainer>
				)}
				{porcentajeIndoors !== undefined && (
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeIndoors ?? 0}
								statusTask={statusIndoors ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeIndoors ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Indoors</Texts>
					</SimpleContainer>
				)}
				{porcentajeVallas !== undefined && (
					<SimpleContainer className="cardCampaign__contenido-medios">
						<SimpleContainer className="cardCampaign__contenido-medios-percent">
							<CircularProgressBar
								percentTask={porcentajeVallas ?? 0}
								statusTask={statusVallas ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeVallas ?? 0}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Vallas M.</Texts>
					</SimpleContainer>
				)}
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default CardCampaign;

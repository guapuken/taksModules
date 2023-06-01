import React from 'react';
import { SimpleContainer, Texts, Title, ValidationComponent } from '../../Atoms';
import { CircularProgressBar } from '../../../components';

//Styles
import './styles/CardCampaigns.scss';
import { cardCampaignProps } from './types/Types';

const CardCampaign = ({
	modo,
	porcentajeFijos,
	porcentajeUrbanos,
	porcentajeIndoors,
	porcentajeVallas,
	statusFijos,
	statusUrbanos,
	statusIndoors,
	statusVallas,
	nombreProyecto,
	onCl_mostrarDetalles,
}: cardCampaignProps) => {
	function percentCampaign() {
		let total = 0;
		let dividendo = 0;
		if (porcentajeFijos && porcentajeFijos !== null) {
			total += porcentajeFijos;
			dividendo += 1;
		}
		if (porcentajeIndoors && porcentajeIndoors !== null) {
			total += porcentajeIndoors;
			dividendo += 1;
		}
		if (porcentajeUrbanos && porcentajeUrbanos !== null) {
			total += porcentajeUrbanos;
			dividendo += 1;
		}
		if (porcentajeVallas && porcentajeVallas !== null) {
			total += porcentajeVallas;
			dividendo += 1;
		}
		return total / dividendo;
	}
	return (
		<SimpleContainer className={`ctn_CCampaign ${modo}`} onClick={onCl_mostrarDetalles}>
			<SimpleContainer className="header_CCampaign">
				<Title modo={modo}>{nombreProyecto}</Title>
				<SimpleContainer className="Percent_CCampaign">
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
					<Texts modo={modo} className="TextPercent_CCampaign">
						{`${Math.floor(percentCampaign())}%`}
					</Texts>
				</SimpleContainer>
			</SimpleContainer>
			<SimpleContainer
				style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}
			>
				<ValidationComponent validate={porcentajeFijos}>
					<SimpleContainer
						style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<SimpleContainer className="CtnPercent_CCampaign">
							<CircularProgressBar
								percentTask={porcentajeFijos ?? 0}
								statusTask={statusFijos ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeFijos}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Fijos</Texts>
					</SimpleContainer>
				</ValidationComponent>
				<ValidationComponent validate={porcentajeUrbanos}>
					<SimpleContainer
						style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<SimpleContainer className="CtnPercent_CCampaign">
							<CircularProgressBar
								percentTask={porcentajeUrbanos ?? 0}
								statusTask={statusUrbanos ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeUrbanos}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Urbanos</Texts>
					</SimpleContainer>
				</ValidationComponent>
				<ValidationComponent validate={porcentajeIndoors}>
					<SimpleContainer
						style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<SimpleContainer className="CtnPercent_CCampaign">
							<CircularProgressBar
								percentTask={porcentajeIndoors ?? 0}
								statusTask={statusIndoors ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeIndoors}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Indoors</Texts>
					</SimpleContainer>
				</ValidationComponent>
				<ValidationComponent validate={porcentajeVallas === 0 || porcentajeVallas}>
					<SimpleContainer
						style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
					>
						<SimpleContainer className="CtnPercent_CCampaign">
							<CircularProgressBar
								percentTask={porcentajeVallas ?? 0}
								statusTask={statusVallas ?? 'onTime'}
								size={40}
							/>
							<Texts modo={modo}>{`${porcentajeVallas}%`}</Texts>
						</SimpleContainer>
						<Texts modo={modo}>Vallas M.</Texts>
					</SimpleContainer>
				</ValidationComponent>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default CardCampaign;

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Ficha from '../../CompoundComponents/Ficha/Ficha';
import Button from '../../CompoundComponents/Button/Button';
import { Legend, Measures } from '../../CompoundComponents/Atoms';
import IconWithPleca from '../../CompoundComponents/Atoms/IconWithPleca/IconWithPleca';
import { Iluminacion } from '../../img/icons/iluminacion';
import { Vista } from '../../img/icons/vista';

const meta: Meta<typeof Ficha> = {
	title: 'Compound/Ficha',
	component: Ficha,
};

export default meta;

type Story = StoryObj<typeof Ficha>;

export const CompoundFicha: Story = {
	name: 'Ficha',
	render: () => (
		<div>
			<img src="https://png.pngtree.com/thumb_back/fh260/background/20211101/pngtree-cinematic-bg-image_914451.png" />
			<Ficha modo="Dark" width={'80vw'} height={'90vh'} style={{ display: 'flex' }}>
				<div
					style={{ width: '45vw', height: 'calc((45vw / 16) * 9)', position: 'relative' }}
				>
					<Ficha.Image width={'inherit'} height={'inherit'}>
						https://www.bilbo.mx/wp-content/uploads/2021/04/Pantalla-aguascalientes-espectacular-av-universidad.jpg
					</Ficha.Image>
					<Ficha.Pleca
						width={'45vw'}
						height="70px"
						className="absolute-lb"
						styleContent={{
							display: 'flex',
							widht: '100%',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Ficha.Measures width={12.5} height={7.2} />
						<div style={{ display: 'flex', gap: '15px' }}>
							<IconWithPleca>
								<IconWithPleca.Legend
									style={{
										background: 'var(--detailFont)',
										padding: '5px 15px',
										borderRadius: '5px',
									}}
								>
									Vista natural
								</IconWithPleca.Legend>
								<IconWithPleca.Icon>
									<Vista vista="Natural" fill="var(--detailFont)" />
								</IconWithPleca.Icon>
							</IconWithPleca>
							<IconWithPleca>
								<IconWithPleca.Legend
									style={{
										background: 'var(--detailFont)',
										padding: '5px 15px',
										borderRadius: '5px',
									}}
								>
									Con iluminación
								</IconWithPleca.Legend>
								<IconWithPleca.Icon>
									<Iluminacion withIlumination fill="var(--detailFont)" />
								</IconWithPleca.Icon>
							</IconWithPleca>
						</div>
					</Ficha.Pleca>
				</div>
				<div style={{ padding: '15px', width: '100%' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							alignItems: 'center',
						}}
					>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<Legend className="titleFont">IMJ-ZMG-ESP-O-1254B</Legend>
							<Legend className="textFont">Espectaculares</Legend>
						</div>
						<Button color="#f1e323" height={40}>
							<Button.Icon size={30}>
								https://icons.veryicon.com/png/o/application/love-other-car-app-icon/add-to-cart.png
							</Button.Icon>
							<Button.Legend>Comprar ahora</Button.Legend>
							<Button.Counter>✔</Button.Counter>
						</Button>
					</div>
					<div style={{ display: 'flex', gap: '15px' }}>
						<div>
							<Legend className="textFont bold">Latitud:</Legend>
							<Legend className="textFont">19.256351</Legend>
						</div>
						<div>
							<Legend className="textFont bold">Longitud:</Legend>
							<Legend className="textFont">-99.23521</Legend>
						</div>
					</div>
				</div>
			</Ficha>
		</div>
	),
};

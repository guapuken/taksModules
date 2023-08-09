export const dataNse = ({
	income_a_users,
	income_b_users,
	income_c_users,
	income_d_users,
	income_e_users,
}) => {
	return [
		{
			title: 'NSE A',
			value: income_a_users ?? 0,
			color: '#f8b03d',
		},
		{
			title: 'NSE B',
			value: income_b_users ?? 0,
			color: '#8e1913',
		},
		{
			title: 'NSE C',
			value: income_c_users ?? 0,
			color: '#ca2284',
		},
		{
			title: 'NSE D',
			value: income_d_users ?? 0,
			color: '#3866ae',
		},
		{
			title: 'NSE E',
			value: income_e_users ?? 0,
			color: '#5fb464',
		},
	];
};

export const dataEdad = ({ a13_17_users, a18_25_users, a26_40_users, a41_55_users, a55_users }) => {
	return [
		{
			title: '13-17',
			value: a13_17_users ?? 0,
			color: '#f8b03d',
		},
		{
			title: '18-25',
			value: a18_25_users ?? 0,
			color: '#8e1913',
		},
		{
			title: '26-40',
			value: a26_40_users ?? 0,
			color: '#ca2284',
		},
		{
			title: '41-55',
			value: a41_55_users ?? 0,
			color: '#3866ae',
		},
		{
			title: '55+',
			value: a55_users ?? 0,
			color: '#5fb464',
		},
	];
};

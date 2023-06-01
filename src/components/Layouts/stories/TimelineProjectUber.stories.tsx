import React from 'react';
import { storiesOf } from '@storybook/react';
import { fijos, indoors, urbanos, vallas } from '../Timeline/data/dataExample';

import TimelineProject from '../Timeline/TimelineProject';

storiesOf('Layouts/TimelineProject/Examples/Uber', module).add('Uber', () => {
	return <TimelineProject fijos={fijos} urbanos={urbanos} indoors={indoors} vallas={vallas} />;
});

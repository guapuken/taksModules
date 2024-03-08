import React from 'react';
import SimpleText from './Simple/SimpleText';
import Titles from './Titles/Titles';

const Textos = ({ children }: any) => {
    return <>{children}</>;
};

Textos.Simple = SimpleText;
Textos.Title = Titles;

export default Textos;

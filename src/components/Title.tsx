
import React from 'react';

interface TitleProps {
    name1: string;
    name2: string;
}

const Title: React.FC<TitleProps> = ({ name1, name2 }) => {
    return (
        <h1 className="text-3xl font-bold">
            CS3733-D25 Team 15: {name1} and {name2}
        </h1>
    );
};

export default Title;

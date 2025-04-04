import React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Hello, we are {name1} and {name2}!</h1>
        </div>
    );
};

export default Intro;
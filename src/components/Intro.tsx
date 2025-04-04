import React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <div>
            <p> Hello, my name is are {name1}. My name is Matthew Nickerson and I am a sophomore studying Computer Science at WPI. I have wanted to study programming since I was in primary school, and I used to make Minecraft mods using Java! Video games were the reason I got into computer science.  At WPI, I am involved in the Outing club, Alpha Chi Rho Fraternity, and Exploradreams.  I will be going to Copenhagen, Denmark on IQP next D-Term! </p>

            <p> Hello, my name is {name2}I'm Sahana, a CS student at WPI. I'm currently taking software engineering, and really excited for this class. </p>

        </div>
    );
};

export default Intro;
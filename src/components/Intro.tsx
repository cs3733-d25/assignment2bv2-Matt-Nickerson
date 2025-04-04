import React from 'react';

interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Hello, my name is are {name1}. <p>My name is Matthew Nickerson and I am a sophomore studying Computer Science at WPI. I have wanted to study programming since I was in primary school, and I used to make Minecraft mods using Java! Video games were the reason I got into computer science.  At WPI, I am involved in the Outing club, Alpha Chi Rho Fraternity, and Exploradreams.  I will be going to Copenhagen, Denmark on IQP next D-Term! </p>
                <p>My hobby is quite a unique one, which is I love to snowmobile in the winter.  For the past 6 years, my family always had snowmobiles and we used to go to NH and ME to ride on the trails.  Once I was old enough, I bought my own snowmobile with some help from my family so I could ride my own.  I have snowmobiled all the way from Nashua, NH all the way to Canada.  There are specific customs checkpoints set up just for people traveling on snowmobile.  The snowmobile I own is a lot like the one in the photo shown above.  I used to do a bit of racing, but stopped once college started up.</p>
            </h1>
            <h1 className={"text-3xl font-bold"}>Hello, my name is {name2}</h1>
        </div>
    );
};

export default Intro;
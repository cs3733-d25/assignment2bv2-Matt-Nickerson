import React from 'react';

interface Hobby2Props {
    imageUrl: string;
}

const Hobby1: React.FC<Hobby2Props> = ({ imageUrl }) => {
    return (
        <div>
            <p>
                My hobby is quite a unique one, which is I love to snowmobile in the
                winter. For the past 6 years, my family always had snowmobiles and we
                used to go to NH and ME to ride on the trails. Once I was old enough, I
                bought my own snowmobile with some help from my family so I could ride
                my own. I have snowmobiled all the way from Nashua, NH all the way to
                Canada. There are specific customs checkpoints set up just for people
                traveling on snowmobile. The snowmobile I own is a lot like the one in
                the photo shown above. I used to do a bit of racing, but stopped once
                college started up.
            </p>
            <img src={imageUrl} alt="Snowmobile" className="w-64 h-64" />
        </div>
    );
};

export default Hobby1;
import React from 'react';


interface Hobby1Props {
    imageUrl: string;
}



const Hobby1: React.FC<Hobby1Props> = ({imageUrl}) => {
    return (
        <div className="hobby">
            <h1>Everything about Baking</h1>
            <img src={imageUrl} alt="Baking" className="w-64 h-64"  />

            <h2>Baking</h2>
            <p>When I have time or just want to de-stress,
                my favorite hobby is to bake. It calms my mind and puts me in the present.
                I love midnight baking when it's just me listening to good songs baking some
                of my favorite items. </p>
        </div>
    );
};

export default Hobby1;
import React from 'react';
import List1 from './List1';
import Table1 from './Table1';
import Form1 from './Form1';
import baking from '.assests/baking.jpg';

interface Hobby1Props {
    hobby: string;
}



const Hobby1: React.FC<Hobby1Props> = ({}) => {
    return (
        <div className="hobby">
            <h1>Everything about Baking</h1>
            <img src={baking} alt="Baking" className="baking" />

            <h2>Baking</h2>
            <p>When I have time or just want to de-stress,
                my favorite hobby is to bake. It calms my mind and puts me in the present.
                I love midnight baking when it's just me listening to good songs baking some
                of my favorite items. </p>

            <List1 />
            <Table1/>
            <Form1/>
        </div>
    );
};

export default Hobby1;
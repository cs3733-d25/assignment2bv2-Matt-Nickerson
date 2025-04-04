import React from 'react';
import Title from './components/Title.tsx';
import Intro from './components/Intro.tsx';
import Hobby2 from './components/Hobby2.tsx';
import List2 from './components/List2.tsx';
import Table2 from './components/Table2.tsx';
import Form2 from './components/Form2.tsx';

import Hobby1 from './components/Hobby1.tsx';
import List1 from './components/List1.tsx';
import Table1 from './components/Table1.tsx';
import Form1 from './components/Form1.tsx';


import snowmobileImage from './assets/snowmobiling.jpg';
import bakingImage from './assets/baking.jpg';
import './styles.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Title name1="Matt" name2="Sahana" />
            <Intro name1= "Matt" name2="Sahana"/>
            <hr />
            <Hobby2 imageUrl={snowmobileImage} />
            <List2 />
            <Table2 />
            <Form2 />

            <Hobby1 imageUrl={bakingImage}/>
            <List1 />
            <Table1 />
            <Form1 />

        </div>
    );
};

export default App;

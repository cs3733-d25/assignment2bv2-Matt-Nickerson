import React from 'react';
import Title from './components/Title.tsx';
import Intro from './components/Intro.tsx';
import Hobby2 from './components/Hobby2.tsx';
import List2 from './components/List2.tsx';
import Table2 from './components/Table2.tsx';
import Form2 from './components/Form2.tsx';
import snowmobileImage from './assets/snowmobiling.jpg';
import bakingImage from './assets/baking.jpg';
import './styles.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Title name1="Matt" name2="Sahana" />
            <Hobby2 imageUrl={snowmobileImage} />
            <List2 />
            <Table2 />
            <Form2 />
            <Hobby2 imageUrl={bakingImage} />

        </div>
    );
};

export default App;

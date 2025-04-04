import React from 'react';

const List2: React.FC = () => {
    return (
        <div>
            <h2>Some parts of a Snowmobile:</h2>
            <ul className="parts">
                <li style={{ color: 'darkcyan' }}>Body</li>
                <li>Skis</li>
                <li>Track</li>
                <li>Snow Flap</li>
                <li>Skid</li>
            </ul>
        </div>
    );
};

export default List2;
// Table1.tsx
import React from 'react';

const Table1: React.FC = () => {
    return (
        <div>
            <hr />
            <table className="collapse">
                <caption>Examples of Snowmobiles</caption>
                <thead>
                <tr>
                    <th>Snowmobile</th>
                    <th>Year</th>
                    <th>Cost ($)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Polaris Indy VR1</td>
                    <td>2026</td>
                    <td>$17199</td>
                </tr>
                <tr>
                    <td>Polaris Patriot RMK</td>
                    <td>2026</td>
                    <td>$23199</td>
                </tr>
                <tr>
                    <td>SkiDoo Renegade X-RS</td>
                    <td>2026</td>
                    <td>$18799</td>
                </tr>
                <tr>
                    <td>Arctic Cat M-600 Alpha One Sno Pro</td>
                    <td>2026</td>
                    <td>$15799</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table1;

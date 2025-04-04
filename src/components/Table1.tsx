import React from "react";

const Table1: React.FC = () => {
    return (
        <table className="collapse">
            <caption>Best baking dishes</caption>
            <tr>
                <th>Item</th>
                <th>Duration</th>
                <th>Difficulty Level</th>
            </tr>
            <tr>
                <td>Banana Bread</td>
                <td>1 hour</td>
                <td>Easy</td>
            </tr>
            <tr>
                <td>Cinnamon Roll</td>
                <td>2 hours</td>
                <td>Medium</td>
            </tr>
            <tr>
                <td>Brownies</td>
                <td>1 hour</td>
                <td>Easy</td>
            </tr>
            <tr>
                <td>Croissant</td>
                <td>1 hour</td>
                <td>Hard</td>
            </tr>
        </table>

    );
};

export default Table1;
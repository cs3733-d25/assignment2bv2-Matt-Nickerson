import React from "react";

const Form1: React.FC = () => {
    return(
        <div>
        <h2>Best places for fresh baked food!</h2>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name">
            </input>
            <br/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"></input>
                <br/>
                <label htmlFor="comments">Comments:</label>
                <textarea id="comments"></textarea>
                <br/>
                <br/>
                Select which country(s) have the best baked food:
                <br/>
                <input type="checkbox" id="usa"/>
                <label htmlFor="usa">USA</label>
                <br/>
                <input type="checkbox" id="france"/>
                <label htmlFor="france">France</label>
                <br/>
                <input type="checkbox" id="italy"/>
                <label htmlFor="italy">Italy</label>

                <br/>
                <br/>

                Would you travel to another country just to tried their baked food?
                <br/>
                <input type="radio" id="yes" name="travel" value="yes"/>
                <label htmlFor="yes">Yes</label>
                <br/>
                <input type="radio" id="no" name="travel" value="no"/>
                <label htmlFor="no">No</label>
                <br/>
                <input type="radio" id="maybe" name="travel" value="maybe"/>
                <label htmlFor="maybe">Maybe</label>
                <br/>
                <br/>

                Which item is your favorite:
                <select id="dropdown" name="dropdown">
                    <option value="Brownies">Brownies</option>
                    <option value="Cinnamon Roll">Cinnamon Roll</option>
                    <option value="Banana Bread">Banana Bread</option>
                    <option value="Croissant">Croissant</option>
                </select>

                <br/>
                <br/>

                <button type="submit">Submit</button>

                </form>

            </div>
    );
};

export default Form1;
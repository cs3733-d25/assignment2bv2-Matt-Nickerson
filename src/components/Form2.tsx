// Form.tsx
import React from 'react';

const Form2: React.FC = () => {
    return (
        <div>
            <h2>Customize your Snowmobile</h2>
            <form>
                <label htmlFor="price">Enter your max price:</label>
                <input type="text" id="price" />
                <br />
                <br />
                <label htmlFor="RidingType">Enter what type of snowmobiling you do:</label>
                <input type="text" id="RidingType" />
                <br />
                <br />
                <p style={{ textAlign: 'center' }}>Select your preferred snowmobile brand:</p>
                <input type="radio" id="polaris" name="brand" value="Polaris" />
                <label htmlFor="polaris">Polaris</label>
                <br />
                <input type="radio" id="skidoo" name="brand" value="SkiDoo" />
                <label htmlFor="skidoo">Ski-Doo</label>
                <br />
                <input type="radio" id="arcticcat" name="brand" value="ArcticCat" />
                <label htmlFor="arcticcat">Arctic Cat</label>
                <br />
                <br />
                <input type="checkbox" id="longTrack" />
                <label htmlFor="longTrack">Longer Track?</label>
                <br />
                <input type="checkbox" id="GPS" />
                <label htmlFor="GPS">Built In GPS?</label>
                <br />
                <input type="checkbox" id="HeatedSeat" />
                <label htmlFor="HeatedSeat">Heated Seat?</label>
                <br />
                <br />
                <label htmlFor="experience">Select your experience level:</label>
                <select id="experience">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                </select>
                <br />
                <br />
                <label htmlFor="comments">Additional Comments:</label>
                <br />
                <textarea
                    id="comments"
                    rows={4}
                    cols={40}
                    placeholder="Enter comments here:"
                ></textarea>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form2;

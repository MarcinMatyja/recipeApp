import React from "react";
import { v4 as uuidv4 } from "uuid";


const Nutrients = ({valueP,valueF,valueS,valuePR}) => {

    return (
        <ul key={uuidv4()} className="nut-list">
            <li className="ingredient-text"> Carbs:{Math.round(valueP*100)/100} g</li>
            <li className="ingredient-text"> Fat:{Math.round(valueF*100)/100} g</li>
            <li className="ingredient-text"> Sugar:{Math.round(valueS*100)/100} g</li>
            <li className="ingredient-text"> Proteins:{Math.round(valuePR*100)/100} g</li>
        </ul>
    );
};


export default Nutrients;
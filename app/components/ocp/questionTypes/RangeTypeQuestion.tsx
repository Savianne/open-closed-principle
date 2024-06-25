import React from "react";

interface IRangeTypeQuestion {
    description: string,
}

const RangeTypeQuestion: React.FC<IRangeTypeQuestion> = ({description}) => {
    return (
        <div className="question-group">
            <h3>{description}</h3>
            <label>Maximum</label><br></br>
            <input type="number" /><br></br>
            <label >Minimum</label><br></br>
            <input type="number"/>
        </div>
    )
}

export default RangeTypeQuestion;
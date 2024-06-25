import React from "react";

interface IBooleanTypeQuestion {
    description: string,
}

const BooleanTypeQuestion: React.FC<IBooleanTypeQuestion> = ({description}) => {
    return (
        <div className="question-group">
            <h3>{description}</h3>
            <input type="radio" name="true" checked={false} />
            <label>True</label><br></br>
            <input type="radio" checked={false}/>
            <label>False</label><br></br>
        </div>
    )
}

export default BooleanTypeQuestion;
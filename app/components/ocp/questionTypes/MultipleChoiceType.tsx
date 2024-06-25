import React from "react";

interface IMultipleChoiceQuestion {
    description: string,
    options: string[]
}

const MultipleChoiceTypeQuestion: React.FC<IMultipleChoiceQuestion> = ({description, options}) => {
    return (
        <div className="question-group">
            <h3>{description}</h3>
            {
                options && options.map((option, index) => {
                    return(
                    <div key={index}>
                        <input type="radio" name="true" checked={false} />
                        <label>{option}</label><br></br>
                    </div>
                    )
                }) 
            }
        </div>
    )
}

export default MultipleChoiceTypeQuestion;
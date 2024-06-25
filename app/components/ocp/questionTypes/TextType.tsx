import React from "react";

interface ITextTypeQuestion {
    description: string,
}

const TextTypeQuestion: React.FC<ITextTypeQuestion> = ({description}) => {
    return (
        <div className="question-group">
            <h3>{description}</h3>
            <textarea placeholder="Answer here" />
        </div>
    )
}

export default TextTypeQuestion;
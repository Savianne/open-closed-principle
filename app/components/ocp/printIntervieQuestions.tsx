import React from "react";

interface IQuestions {
    type: "boolean" | "multiple-choice" | "text" | 'range';
    description: string;
    options?: string[]
}

const PrintInterviewForm: React.FC<{questions: React.ReactNode[]}> = ({questions}) => {
    return(
        <form id="interviewForm">
            {
                questions
            }
        </form>
    )
}



export default PrintInterviewForm;
import React from "react";

interface IQuestions {
    type: "boolean" | "multiple-choice" | "text" | 'range';
    description: string;
    options?: string[]
}

export const PrintInterviewForm: React.FC<{questions: IQuestions[]}> = ({questions}) => {
    return(
        <form id="interviewForm">
            {
                questions.map(question => {
                    switch(question.type) {
                        case 'boolean': 
                            return(
                                <div className="question-group">
                                    <h3>{question.description}</h3>
                                    <input type="radio" name="true" checked={false} />
                                    <label>True</label><br></br>
                                    <input type="radio" checked={false}/>
                                    <label>False</label><br></br>
                                </div>
                            );
                        case 'multiple-choice':
                            return(
                                <div className="question-group">
                                    <h3>{question.description}</h3>
                                    {
                                        question.options && question.options.map((option, index) => {
                                            return(<>
                                                <input type="radio" name="true" checked={false} />
                                                <label>{option}</label><br></br>
                                            </>
                                            )
                                        }) 
                                    }
                                </div>
                            )
                        case 'text':
                            return(
                                <div className="question-group">
                                    <h3>{question.description}</h3>
                                    <textarea placeholder="Anser here" />
                                </div>
                            );
                        case 'range':
                            return(
                                <div className="question-group">
                                    <h3>{question.description}</h3>
                                    <label>Maximum</label><br></br>
                                    <input /><br></br>
                                    <label>Minimum</label><br></br>
                                    <input />
                                </div>
                            )
                    }
                })
            }
        </form>
    )
}
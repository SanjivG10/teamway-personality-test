import React from 'react'

const Question = ({ data, selectedAnswers, setSelectedAnswers }) => {
    const handleUserAnswer = (answerId) => {
        setSelectedAnswers((selectedAnswers) => {
            const newAnswer = {};
            newAnswer[data.q.id] = answerId;
            return {
                ...selectedAnswers, ...newAnswer
            }
        })
    }

    return (
        <div className="flex flex-col items-start w-full">
            <div className="mt-4 text-2xl text-white">
                {data.q.text}
            </div>

            {data.a.map((answer) => {
                return <div
                    key={answer.id}
                    className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                    onClick={() => handleUserAnswer(answer.id)}
                >
                    <input
                        type="radio"
                        name={answer.text}
                        value={answer.text}
                        checked={
                            answer.id === selectedAnswers[data.q.id]
                        }
                        className="w-6 h-6 bg-black"
                        onChange={() => handleUserAnswer(answer.id)}
                    />
                    <p className="ml-6 text-white">{answer.text}</p>
                </div>
            })}
        </div>
    )
}

export default Question
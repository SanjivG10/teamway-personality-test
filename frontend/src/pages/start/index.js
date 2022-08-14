import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Question from '../../components/question';


const Questions = [
    {
        q: {
            id: 1,
            text: "What type of framework is NextJS"
        },
        a: [
            { text: "HELLO", id: 1 },
            { text: "NOTHING MUCH", id: 2 },
            { text: "TOO MUCH", id: 3 },
            { text: "ARSENAL WINNING ", id: 4 },
        ]
    },
    {
        q: {
            id: 2,
            text: "How hard is it to impress you"
        },
        a: [
            { text: "HELLO", id: 1 },
            { text: "NOTHING MUCH", id: 2 },
            { text: "TOO MUCH", id: 3 },
            { text: "ARSENAL WINNING ", id: 4 },
        ]
    },
    {
        q: {
            id: 3,
            text: "FUCK YOU?"
        },
        a: [
            { text: "HELLO", id: 1 },
            { text: "NOTHING MUCH", id: 2 },
            { text: "TOO MUCH", id: 3 },
            { text: "ARSENAL WINNING ", id: 4 },
        ]
    }
]

const Start = () => {
    const [level, setLevel] = useState(0);
    const [question, setQuestion] = useState(Questions[level]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        setQuestion(Questions[level])
    }, [level]);

    const handleNext = () => {
        if (level !== Questions.length - 1) {
            setLevel((level) => level + 1)
        }
        else {
            navigate("/finish", {
                state: {
                    selectedAnswers
                }
            })
        }
    }

    const handlePrev = () => {
        if (level !== 0) {
            setLevel((level) => level - 1)
        }
    }

    return (
        <div className='flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center'>
            <Question data={question} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />

            <div className="flex justify-between w-full mt-4 text-white">
                <Button className='w-[49%]' disabled={!(selectedAnswers[question.q.id - 1])} onClick={handlePrev} >
                    Prev
                </Button>
                <Button className='w-[49%]' disabled={!(selectedAnswers[question.q.id])} onClick={handleNext} >
                    Next
                </Button>
            </div>
        </div>

    )
}

export default Start
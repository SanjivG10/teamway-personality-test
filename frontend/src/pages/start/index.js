import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Question from '../../components/question';
import axios from "axios";
import { BACKEND_URL } from '../../constant';


const Start = () => {
    const [level, setLevel] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(BACKEND_URL + "/questions");
                setQuestions(data);
            }
            catch {
                console.log("error fething questions")
            }
        })();
    }, []);

    const handleNext = () => {
        if (level !== questions.length - 1) {
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

    const question = questions?.[level];

    return (
        <div className='flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center'>
            <Question data={question} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />

            <div className="flex justify-between w-full mt-4 text-white">
                <Button className='w-[49%]' disabled={!(selectedAnswers[question?.q?.id - 1])} onClick={handlePrev} >
                    Prev
                </Button>
                <Button className='w-[49%]' disabled={!(selectedAnswers[question?.q?.id])} onClick={handleNext} >
                    Next
                </Button>
            </div>
        </div>

    )
}

export default Start
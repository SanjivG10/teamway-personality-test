import React, { useEffect, useState } from 'react'
import Button from '../../components/button'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Personality from '../../components/personality';

const Finish = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const [result, setResult] = useState(null);


    useEffect(() => {
        if (!state) {
            return navigate("/")
        }
        const { selectedAnswers } = state;
        // call axios and find answer
        setResult("EXTROVERT")

    }, []);


    const renderPersonality = () => {
        if (result)
            return <Personality result={result} />
        return null;
    }

    return (
        <div className='h-screen flex flex-col justify-center'>
            <div className='flex flex-col justify-center text-center items-center mt-4'>
                <h2 className='font-bold text-xl my-2 '>TEAMWAY PERSONALITY TEST</h2>

                {renderPersonality()}

                <Link to="/start">
                    <Button className='my-2'>
                        Start Again
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Finish
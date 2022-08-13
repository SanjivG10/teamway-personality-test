import React from 'react';
import { Link } from "react-router-dom"
import Button from '../../components/button';

const HomeScreen = ({ loading }) => {
    return (
        <div className='h-screen flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='font-bold text-xl '>TEAMWAY PERSONALITY TEST</h2>

                <img alt="personality-logo" src="https://img.icons8.com/external-flaticons-flat-flat-icons/256/FFFFFF/external-personality-vacation-planning-girls-trip-flaticons-flat-flat-icons.png" />


                <Link to="/start">
                    <Button disabled={loading}>
                        Start your test
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HomeScreen
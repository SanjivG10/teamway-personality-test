import React from 'react'

const Personality = ({ result }) => {

    let image = result === "EXTROVERT" ? "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/000000/external-extrovert-isolation-flaticons-lineal-color-flat-icons-3.png" : "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/256/000000/external-introvert-isolation-flaticons-lineal-color-flat-icons-3.png"

    return (<>
        <img className={`${result}-logo`} src={image} />
        <h4 className='my-1'>
            <blockquote>
                "I am not fragile like a flower. I am fragile like a bomb"
            </blockquote>
            <span className='text-xl'>{result}</span>
        </h4>
    </>
    )
}

export default Personality
import React from 'react'
import "./Movie.css"
const Movie = (props) => {
    return (
        <div className='main'>
            <img src={props.img} alt="" />
            <p>{props.title}</p>
            <p>{props.year}</p>

        </div>
    )
}

export default Movie
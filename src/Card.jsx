import React from 'react'
import './requesterList.css'

function Card (props)
{
    return (
        <div className="column">
            <img src = {props.avatar} alt = "Staff" />
            <h3>{props.firstname}</h3>
            <p>{props.position}</p>
        </div>
    )
}

export default Card 
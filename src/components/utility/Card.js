import './Card.css'
import React from 'react'

function Card ({imgSource, title, description, link}) {
    return (
        <div className="Card">
            <div className="image">
                <img src={process.env.PUBLIC_URL + imgSource} alt={title}></img>
            </div>
            <div className="content">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} target="_">
                    <button>view &rarr;</button>
                </a>
            </div>
        </div>
    )
}

export default Card
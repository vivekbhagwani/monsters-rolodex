import React from 'react'
import './card.styles.css'

export const Card = ({ id, name, email, phone, username, website }) => {
    return (
        <div className='card-container' key={id}>
            <img src={`https://robohash.org/${id}?set=set2`} alt='monster' />
            <h2>{name}</h2>
            {/* <p>{username}</p> */}
            <p>
                {/* {phone} */}
                {email}
            </p>
            {/* <a href={website} target='_blank'>{website}</a> */}
        </div>
    )
}

export default Card
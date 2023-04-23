import React from 'react';

const Card = ({ name, email, id }) => {
    return (
    <div className='tc bg-light-blue br4 dib ma2 pa3 w-30 bw2 shadow-5 grow'>
        <img alt='profile_pic' src={`https://robohash.org/${id}?200x200`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>    
    );
}

export default Card;
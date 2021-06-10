import React from 'react'

const Card = () => {

  const cardText = `text inside of a Card`

  return (
    <div className='card'>
      <p className='text'>
        {cardText}
      </p>
    </div>
  )
}

export default Card

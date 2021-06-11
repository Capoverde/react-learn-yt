import React from 'react'

const Counter = () => {
  const counterText = 'this is our counter component'
 let result = 0;
  return (
    <div>
      {counterText}
      <div>
      {result}
      </div>
    </div>
  )
}

export default Counter

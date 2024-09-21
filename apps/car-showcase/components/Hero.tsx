import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    // using created utility classes  
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className='hero_subtile'>Find, book, or rent a car - made easily and accessible!</h1>
        <p>Streamline car rental experience with an effortless booking process.</p>
        <Button/>
      </div>
    </div>
  )
}

export default Hero

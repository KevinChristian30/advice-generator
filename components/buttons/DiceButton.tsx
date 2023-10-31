import Image from 'next/image'
import React, { ButtonHTMLAttributes } from 'react'

const DiceButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className='bg-neon-green p-4 rounded-full glow'>
      <Image 
        alt='dice'
        src={'images/icon-dice.svg'}
        height={20}
        width={20}
      />
    </button>
  )
}

export default DiceButton
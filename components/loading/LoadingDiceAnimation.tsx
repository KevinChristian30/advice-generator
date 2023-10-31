import React from 'react';
import Image from 'next/image';

const LoadingDiceAnimation = () => {
  return (
    <article className='flex flex-col items-center gap-4'>
      <div className='bg-neon-green p-4 rounded-full animate-spin'>
        <Image 
          alt='dice'
          src={'images/icon-dice.svg'}
          height={20}
          width={20}
        />  
      </div>
      <p className='text-light-cyan font-manrope'>Fetching Advices</p>
    </article>
  )
}

export default LoadingDiceAnimation
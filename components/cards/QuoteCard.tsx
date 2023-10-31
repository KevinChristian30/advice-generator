import React from 'react'
import DiceButton from '../buttons/DiceButton';

interface ICardProps {
  adviceNumber: number;
  quote: string;
  onDiceButtonClick: () => void
}

const Line = () => {
  return <div className="bg-light-cyan opacity-30 h-[0.5px] w-full"></div>
}

const Capsule = () => {
  return <div className="bg-light-cyan h-5 w-4 rounded-full"></div>
}

const QuoteCard = (props: ICardProps) => {
  const { adviceNumber, quote, onDiceButtonClick } = props;

  return (
    <article className='bg-dark-grayish-blue flex flex-col gap-6 items-center mx-4 px-6 pt-10 pb-14 rounded-xl relative max-w-lg'>
      <p className='text-xs font-manrope text-neon-green'>A D V I C E # {adviceNumber}</p>
      <p className='text-[28px] font-manrope text-light-cyan text-center'>"{quote}"</p>
      <div className='flex items-center gap-3 w-full'>
        <Line />
        <Capsule />
        <Capsule />
        <Line />
      </div>
      <div className="absolute bottom-[-25px]">
        <DiceButton
          onClick={onDiceButtonClick} 
        />
      </div>
    </article>
  )
}

export default QuoteCard
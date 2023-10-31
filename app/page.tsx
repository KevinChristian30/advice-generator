'use client'

import DiceButton from "@/components/buttons/DiceButton";
import QuoteCard from "@/components/cards/QuoteCard";

export default function Home() {
  const fetchQuote = () => {

  }

  return (
    <main className="w-screen h-screen bg-dark-blue grid place-items-center">
      <QuoteCard
        adviceNumber={117}
        quote="It is easy to sit up and take notice, what's difficult is getting up and take action"
        onDiceButtonClick={fetchQuote}
      />
    </main>
  )
}

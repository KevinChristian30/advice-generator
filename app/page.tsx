'use client'

import QuoteCard from "@/components/cards/QuoteCard";
import LoadingDiceAnimation from "@/components/loading/LoadingDiceAnimation";
import useSlip from "@/hooks/useSlip";

export default function Home() {
  const { data, loading, error, fetch } = useSlip();

  return (
    <main className="w-screen h-screen bg-dark-blue grid place-items-center">
      {
        loading || !data ? 
        <LoadingDiceAnimation />
        :
        <QuoteCard
          adviceNumber={data.id}
          quote={data.advice}
          onDiceButtonClick={fetch}
        />
      }
    </main>
  )
}

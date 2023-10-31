'use client'

import QuoteCard from "@/components/cards/QuoteCard";
import LoadingDiceAnimation from "@/components/loading/LoadingDiceAnimation";
import Slip from "@/types/Slip";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [slip, setSlip] = useState<Slip>({
    advice: '',
    id: 0
  });
  const [loading, setLoading] = useState<boolean>(true);
  
  const fetchQuote = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.adviceslip.com/advice?timestamp=${Date.now()}`,
      );

      setSlip({...response.data.slip});
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="w-screen h-screen bg-dark-blue grid place-items-center">
      {
        loading ? 
        <LoadingDiceAnimation />
        :
        <QuoteCard
          adviceNumber={slip?.id}
          quote={slip?.advice}
          onDiceButtonClick={fetchQuote}
        />
      }
    </main>
  )
}

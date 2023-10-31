import Card from "@/components/cards/Card";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-dark-blue grid place-items-center">
      <Card
        adviceNumber={117}
        quote="It is easy to sit up and take notice, what's difficult is getting up and take action"
      />
    </main>
  )
}

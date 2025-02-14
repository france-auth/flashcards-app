"use client"

import { questions } from "@/data/[index"
import { useState } from "react"

const App = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const handleClick = (id: number) => {
    setSelectedCard(id === selectedCard ? 0 : id)
  }

  return (
    <div className="w-full pt-20 px-4">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-2">
        {questions.map(({id, question, answer}) => (
          <div 
            key={id} 
            className={`h-32 w-full grid col-span-1 items-center rounded-md border-[0.5px] border-gray-600 p-6 
              ${selectedCard === id 
                ? "bg-cyan-500 font-semibold" 
                : "bg-gray-100"}`}
            onClick={() => handleClick(id)}
          >
            {selectedCard !== id ? (
              <p className="text-center text-xs sm:text-sm md:text-base">{question}</p>
            ) : (
              <p className="text-center text-xs sm:text-sm md:text-base">{answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
"use client"

import { questions } from "@/data"
import React, { useState } from "react"

interface ColorProp {
  cardColor: string;
}

const App: React.FC<ColorProp> = ({ cardColor }) => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const handleClick = (id: number) => {
    setSelectedCard(id === selectedCard ? 0 : id)
  }

  return (
    <div className="w-full pt-20 px-5 pb-3">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 justify-items-center gap-2">
        {questions.map(({id, question, answer}) => (
          <div 
            key={id} 
            className={`h-36 sm:h-40 lg:h-48 w-full grid col-span-1 items-center rounded-md border-[0.5px] border-gray-600 p-6 
              ${selectedCard === id 
                ? `${cardColor !== 'bg-red-500' ? cardColor : 'bg-red-500'} font-semibold transition-all duration-500 rotate-clockwise`
                : "bg-gray-100 rotate-back duration-300 transition-all"}`}
            onClick={() => handleClick(id)}
          >
            {selectedCard !== id ? (
              <p className="rotate-back transition-all duration-100 text-center text-sm sm:text-[15px] md:text-base lg:text-lg">{question}</p>
            ) : (
              <p className="rotate-clockwise transition-all duration-100 text-center font-semibold text-sm sm:text-[15px] md:text-base lg:text-lg">{answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
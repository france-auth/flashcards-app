"use client"

import Header from "@/components/Header";
import App from "@/components/App"
import Settings from "@/components/Settings"
import { JSX, useState } from "react";

export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cardColor, setCardColor] = useState<string>("red");

  const handleColor = (value: string) => setCardColor(value);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  
  return (
    <div className="overflow-y-hidden relative w-full flex flex-col items-center bg-white">
      <Header onModalOpen={handleOpen} />
      <App cardColor={cardColor} />
      <Settings cardColor={cardColor} onModalClose={handleClose} isModalOpen={isOpen} handleColor={handleColor} />
    </div>
  );
}

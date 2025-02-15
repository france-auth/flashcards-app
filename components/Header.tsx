import { settings } from "@/public/header"
import Image from "next/image"

interface HeaderProps {
  onModalOpen: () => void;
}

const Header = ({ onModalOpen }: HeaderProps ) => {
  return (
    <div className="z-50 fixed w-full bg-black text-white p-5 flex justify-center items-center">
      <p className="text-base sm:text-lg font-semibold">
        Flashcards App
      </p>
      <Image 
        src={settings}
        alt="settings"
        quality={100}
        width={1}
        height={1}
        onClick={onModalOpen}
        className="absolute w-8 h-auto bg-white p-1 rounded-lg right-8"
      />
    </div>
  )
}

export default Header
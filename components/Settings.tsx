import { colors } from "@/data";

interface SettingsProps {
  isModalOpen: boolean;
  cardColor: string;
  onModalClose: () => void;
  handleColor: (value: string) => void;
}

const Settings = ({ isModalOpen, cardColor, onModalClose, handleColor }: SettingsProps) => {
  return (
    <div className="w-full">
      {isModalOpen ? (<div className={`${isModalOpen ? 'fixed' : 'hidden'} inset-0 bg-gray-100 bg-opacity-20 backdrop-brightness-50 flex justify-center items-center z-[999] px-16`}>
        <div className="flex flex-col items-center gap-2 bg-white w-full px-3 py-4 rounded-lg border-[0.5px] border-gray-600">
          <div
            onClick={onModalClose}
            className="bg-white rounded-lg absolute bottom-28 p-[10px] flex justify-center items-center">
            <p className="text-center font-medium">Done</p>
          </div>
          <p className="font-bold text-base">
            SETTINGS
          </p>
          <div className="w-full flex items-center justify-center gap-3">
            <div className="">
              <p className="">Theme:</p>
            </div>
            <select 
              name="colors" 
              title="colors"  
              value={cardColor}
              onChange={(e) => handleColor(e.target.value)}
              className="max-w-max py-2 px-3 border-[0.5px] border-gray-600 rounded-lg"
            >
              {colors.map(({ color }, id: number) => (
                <option key={id} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>) : null}
    </div>
  )
}

export default Settings;
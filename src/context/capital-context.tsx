import { createContext, useState } from 'react'

export type CityContextType = {
  city: string
  saveCity: (city: string) => void
  closeDialog: () => void
  isVisible: boolean
}

export const CityContext = createContext<CityContextType | null>(null)

const CityProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [city, setCity] = useState<string>('')
  const [isVisible, setVisible] = useState<boolean>(false)

  const saveCity = (city: string) => {
    setCity(city)
    setVisible(true)
  }

  const closeDialog = () => {
    setVisible(false)
  }

  return (
    <CityContext.Provider value={{ city, saveCity, closeDialog, isVisible }}>
      {children}
    </CityContext.Provider>
  )
}

export default CityProvider

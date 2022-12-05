import { WeatherForecast } from 'models/weather-forecast'
import { createContext, useState } from 'react'
import api from 'services/weather'
import { fahrenheitConverter } from 'utils/fahrenheit-converter'
import { milesConverter } from 'utils/miles-converter'

export type CityContextType = {
  weatherForecast?: WeatherForecast
  saveWeatherForecast: (city: string) => void
  closeDialog: () => void
  isSpinnerVisible: boolean
  isVisible: boolean
}

export const CityContext = createContext<CityContextType | null>(null)

const CityProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast>()
  const [isSpinnerVisible, setSpinnerVisible] = useState<boolean>(false)
  const [isVisible, setVisible] = useState<boolean>(false)

  const saveWeatherForecast = async (city: string) => {
    setSpinnerVisible(true)
    const response = await api
      .get('/weather', {
        params: {
          appid: process.env.NEXT_PUBLIC_API_KEY,
          lang: 'pt-br',
          q: city
        }
      })
      .finally(() => {
        setSpinnerVisible(false)
        setVisible(true)
      })
    const weatherForecast = {
      name: `${response.data.name}, ${response.data.sys.country}`,
      current_temp: `${fahrenheitConverter(response.data.main.temp)} °C`,
      temp_max: `${fahrenheitConverter(response.data.main.temp_max)} °C`,
      temp_min: `${fahrenheitConverter(response.data.main.temp_min)} °C`,
      feels_like: `${fahrenheitConverter(response.data.main.feels_like)} °C`,
      wind_speed: `${milesConverter(response.data.wind.speed)} km/h`,
      humidity: `${response.data.main.humidity} %`
    } as WeatherForecast

    setWeatherForecast(weatherForecast)
  }

  const closeDialog = () => {
    setVisible(false)
  }

  return (
    <CityContext.Provider
      value={{
        weatherForecast,
        saveWeatherForecast,
        closeDialog,
        isSpinnerVisible,
        isVisible
      }}
    >
      {children}
    </CityContext.Provider>
  )
}

export default CityProvider

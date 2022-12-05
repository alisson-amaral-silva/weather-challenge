import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import Capitals from 'components/Capitals'
import WeatherDetails from 'components/WeatherDetails'
import { CityContext, CityContextType } from 'context/capital-context'
import { ChangeEvent, useContext, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import * as S from './styles'

const Main = ({ title = 'Previsão do tempo' }) => {
  const { saveWeatherForecast, isVisible, isSpinnerVisible } = useContext(
    CityContext
  ) as CityContextType
  const [formData, setFormData] = useState<string>('')

  const handleSaveCity = async (e: React.FormEvent, city: string) => {
    e.preventDefault()
    saveWeatherForecast(city)
  }

  const handleForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData(e.currentTarget.value)
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {isSpinnerVisible && (
        <BeatLoader style={{ margin: '5rem' }} color="#ffffff" />
      )}
      {isVisible && <WeatherDetails />}
      <form
        style={{ width: '100%', marginTop: '2rem' }}
        onSubmit={(e) => handleSaveCity(e, formData)}
      >
        <S.TextFieldWrapper
          sx={{ input: { color: 'black' }, marginTop: '2rem' }}
          label="Insira aqui o nome da cidade"
          onChange={(e) => handleForm(e)}
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment
                onClick={() => saveWeatherForecast(formData)}
                position="end"
              >
                <SearchIcon sx={{ cursor: 'pointer' }} />
              </InputAdornment>
            )
          }}
        />
      </form>
      <Capitals />
    </S.Wrapper>
  )
}

export default Main

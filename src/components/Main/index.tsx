import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import Capitals from 'components/Capitals'
import WeatherDetails from 'components/WeatherDetails'
import { CityContext, CityContextType } from 'context/capital-context'
import { ChangeEvent, useContext, useState } from 'react'
import * as S from './styles'

const Main = ({ title = 'Previsão do tempo' }) => {
  const { saveCity, isVisible } = useContext(CityContext) as CityContextType
  const [formData, setFormData] = useState<string>('')

  const handleSaveTodo = (e: React.FormEvent, formData: string) => {
    e.preventDefault()
    saveCity(formData)
  }

  const handleForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData(e.currentTarget.value)
  }

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {isVisible && <WeatherDetails />}
      <form
        style={{ width: '100%', marginTop: '2rem' }}
        onSubmit={(e) => handleSaveTodo(e, formData)}
      >
        <S.TextFieldWrapper
          sx={{ input: { color: 'black' }, marginTop: '2rem' }}
          label="Insira aqui o nome da cidade"
          onChange={(e) => handleForm(e)}
          variant="filled"
          InputProps={{
            endAdornment: (
              <InputAdornment onClick={() => saveCity(formData)} position="end">
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

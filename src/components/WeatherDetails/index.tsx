import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { CityContext, CityContextType } from 'context/capital-context'
import { useContext } from 'react'
import * as S from './styles'
const WeatherDetails = () => {
  const { weatherForecast, closeDialog } = useContext(
    CityContext
  ) as CityContextType

  return (
    <S.Wrapper style={{ color: 'black' }}>
      <S.HeaderWrapper>
        <S.CityWrapper>{weatherForecast?.name}</S.CityWrapper>
        <S.CloseButton onClick={closeDialog}>X</S.CloseButton>
      </S.HeaderWrapper>
      <S.TemperatureWrapper>
        {weatherForecast?.current_temp}
      </S.TemperatureWrapper>
      <S.TemperatureDetailsWrapper>
        <S.BoldContent>
          <ArrowUpwardIcon style={{ color: 'orange', fontSize: '2.5rem' }} />
          {weatherForecast?.temp_max}
        </S.BoldContent>
        <S.BoldContent>
          <ArrowDownwardIcon style={{ color: 'orange', fontSize: '2.5rem' }} />
          {weatherForecast?.temp_min}
        </S.BoldContent>
        <S.SpecificDetailsWrapper>
          <p>Sensação</p>
          <S.BoldContent>{weatherForecast?.feels_like}</S.BoldContent>
        </S.SpecificDetailsWrapper>
      </S.TemperatureDetailsWrapper>
      <S.TemperatureDetailsWrapper>
        <S.SpecificDetailsWrapper>
          <p>Vento</p>
          <S.BoldContent>{weatherForecast?.wind_speed}</S.BoldContent>
        </S.SpecificDetailsWrapper>
        <S.SpecificDetailsWrapper>
          <p>Humidade</p>
          <S.BoldContent>{weatherForecast?.humidity}</S.BoldContent>
        </S.SpecificDetailsWrapper>
      </S.TemperatureDetailsWrapper>
    </S.Wrapper>
  )
}

export default WeatherDetails
